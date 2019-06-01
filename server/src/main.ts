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
  interface Error {code: string; message: string};

  class ErrorMaker {
    code: string
    message: string
    constructor(code: string, message: string) {
      this.code = code
      this.message = message
    }
  }

  const id: string = uuid()
  const validationLine = ([name, type]: string[]): Error | null => {
    if (!req.body[name]) {
      return new ErrorMaker('no-line', `No property ${name}`)
    } else if (typeof req.body[name] !== type) {
      return new ErrorMaker('disparity-type', `wrong type in ${name}`)
    } else if (name === 'name' && req.body[name] && req.body[name].length > 6) {
      return new ErrorMaker('validation-name', `In the '${name}' property, more than 6 characters`)
    } else if (name === 'typeMagic' && !['earth', 'water', 'fire', 'wind'].includes(req.body[name])) {
      return new ErrorMaker('validation-type-magic', `must be enum type`)
    } else if (name === 'power' && (req.body[name] < 1 || req.body[name] > 200)) {
      return new ErrorMaker('validation-power', `value is not valid`)
    } else {
      return null
    }
  }
  const nameLine: string[][] =
  [
    ['name', 'string'],
    ['typeMagic', 'string'],
    ['power', 'number']
  ]

  const searchErr = (arr: string[][], call: Error | null, index: number = 0): Error | null => {
    const length: number = arr.length
    if (index <= length - 1) {
      const result: Error | null = call(arr[index])
      if (result) return result
      else return searchErr(arr, call, ++index)
    } else return null
  }

  const err = searchErr(nameLine, validationLine)

  if (!err) {
    client.query(`INSERT INTO cards (id, name, type_magic, power) VALUES 
    ('${id}', '${req.body.name}', '${req.body.typeMagic}', ${req.body.power})`)
      .then(() => {
        res.send({ id: id, name: req.body.name, typeMagic: req.body.typeMagic, power: req.body.power })
      })
  } else res.status(400).send(err)
})

app.delete('/api/card/:id', (req: Express.Request, res: Express.Response) => {
  client.query(`DELETE FROM cards where id = '${req.params.id}'`)
    .then(() => res.status(204).send())
})

app.listen(3000)
