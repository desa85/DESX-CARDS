import {QueryResult, Client} from "pg";
import * as Express from 'express'
import * as uuid from 'uuid/v4'
import * as bodyParser from 'body-parser'

const client = new Client({
  user: 'desx_user',
  host: '127.0.0.1',
  database: 'desx_cards',
  password: 'desx_pass',
  port: 5430,
})

async function createTable() {
  await client.connect()

  await client.query(
    `CREATE TABLE IF NOT EXISTS cards (
      id uuid not null primary key, 
      name varchar(16) not null, 
      type_magic varchar(16) not null, 
      power int not null
    )`
  )

  const row = await client.query(`SELECT COUNT(*) FROM cards`)
  try {
    if (row.rows[0].count == 0) {
      await client.query(
        `insert into cards (id, name, type_magic, power) values
        ('${uuid()}', 'АНТАРАС', 'ЗЕМЛЯ', 60),
        ('${uuid()}', 'СОНИК', 'ВОДА', 55),
        ('${uuid()}', 'ГЛЫБА', 'ЗЕМЛЯ', 30),
        ('${uuid()}', 'ХЬЮГА', 'ВЕТЕР', 50),
        ('${uuid()}', 'ВАЛАКАС', 'ОГОНЬ', 70);`
      )

    }
  } catch (err) {
    console.log(err)
  }
}

createTable()

const app = Express()

app.use(bodyParser())

app.get('/api/card/list', (req: Express.Request, res: Express.Response) => {
  client.query('select * from cards').then((resultDb: QueryResult) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    res.send(
      resultDb.rows
        .map(card => {return { id: card.id, name: card.name, typeMagic: card.type_magic, power: card.power }})
    )
  })
})

app.post('/api/card/', (req: Express.Request, res: Express.Response) => {
  let isSuccess = true;
  let code: string, 
    message: string

  [
    ['string', 'name'],
    ['string', 'typeMagic'],
    ['number', 'power']
  ].forEach(function ([type, name]) {

    function Possible(option: string): boolean {
      return option === req.body[name]
    }

    if (isSuccess) {
      if (!req.body[name]) [code, message] = ['no-line', `No property ${name}`]
      else if (typeof req.body[name] !== type) [code, message] = ['disparity-type', `wrong type in ${name}`]
      else if (name === 'name' && req.body[name] && req.body[name].length > 6) {
        [code, message] = ['validation-name', `In the '${name}' property, more than 6 characters`]
      } else if (['earth', 'water', 'fire', 'wind'].find(Possible)) {
        [code, message] = ['validation-type-magic', `must be enum type`]
      } else if (name === 'power' && (req.body[name] < 1 || req.body[name] > 200)) {
        [code, message] = ['validation-power', `value is not valid`]
      }
    }
    
    if (code) {
      isSuccess = false
      res.status(400).send({
        code: code,
        message: message
      })
    }
  } )

  if (isSuccess) {
    const id: string = uuid()
    client.query(`INSERT INTO cards (id, name, type_magic, power) VALUES 
      ('${id}', '${req.body.name}', '${req.body.typeMagic}', ${req.body.power})`)
      .then(() => {
        res.send({ id: id, name: req.body.name, typeMagic: req.body.typeMagic, power: req.body.power })
      })
  }
})

app.delete('/api/card/:id', (req: Express.Request, res: Express.Response) => {
  client.query(`DELETE FROM cards where id = '${req.params.id}'`)
    .then(() => res.status(204).send())
})

app.listen(3000)
