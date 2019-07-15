import {QueryResult, Client} from "pg";
import * as Express from 'express'
import * as uuid from 'uuid/v4'
import * as bodyParser from 'body-parser'

const client = new Client()


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
        ('${uuid()}', 'АНТАРАС', 'earth', 60),
        ('${uuid()}', 'СОНИК', 'water', 55),
        ('${uuid()}', 'ГЛЫБА', 'earth', 30),
        ('${uuid()}', 'ХЬЮГА', 'wind', 50),
        ('${uuid()}', 'ВАЛАКАС', 'fire', 70);`
      )

    }
  } catch (err) {
    console.log(err)
  }
}

const headers = (res: Express.Response) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
}

createTable()

const app = Express()

app.use(bodyParser())

app.get('/api/card/list', (req: Express.Request, res: Express.Response) => {
  client.query('select * from cards').then((resultDb: QueryResult) => {
    headers(res)
    res.send(
      resultDb.rows
        .map(card => {return { id: card.id, name: card.name, typeMagic: card.type_magic, power: card.power }})
    )
  })
})
app.options('/api/card/', (req: Express.Request, res: Express.Response) => {
  headers(res)
  res.send()
})

app.post('/api/card/', (req: Express.Request, res: Express.Response) => {
  class Error {
    code: string
    message: string
    constructor(code: string, message: string) {
      this.code = code
      this.message = message
    }
  }
  res.header('Access-Control-Allow-Origin', '*')

  const validationLine = ([name, type]: string[]): Error | null => { 
    return (!req.body[name]) ? 
      new Error('no-line', `No property ${name}`) :
      (typeof req.body[name] !== type) ? 
        new Error('disparity-type', `wrong type in ${name}`):
        (name === 'name' && req.body[name] && req.body[name].length > 6) ? 
          new Error('validation-name', `In the '${name}' property, more than 6 characters`):
          (name === 'typeMagic' && !['earth', 'water', 'fire', 'wind'].includes(req.body[name])) ? 
            new Error('validation-type-magic', `must be enum type`):
            (name === 'power' && (req.body[name] < 1 || req.body[name] > 200)) ? 
              new Error('validation-power', `value is not valid`):
              null
  }
  const fieldNames: string[][] =
  [
    ['name', 'string'],
    ['typeMagic', 'string'],
    ['power', 'number']
  ]

  const searchError = (fieldNames: string[][], validationLine: (a: string[]) => Error | null): Error | null => {
    if (fieldNames.length) {
      const result: Error | null = validationLine(fieldNames.pop())
      return (result) ? result : searchError(fieldNames, validationLine) 
    } else return null
  }

  const error = searchError(fieldNames, validationLine)

  if (!error) {
    const id: string = uuid()
    client.query(`INSERT INTO cards (id, name, type_magic, power) VALUES 
    ('${id}', '${req.body.name}', '${req.body.typeMagic}', ${req.body.power})`)
      .then(() => {
        res.send({ id: id, name: req.body.name, typeMagic: req.body.typeMagic, power: req.body.power })
      })
  } else res.status(400).send(error)
})

app.options('/api/card/:id', (req: Express.Request, res: Express.Response) => {
  headers(res)
  res.send()
})

app.delete('/api/card/:id', (req: Express.Request, res: Express.Response) => {
  client.query(`DELETE FROM cards where id = '${req.params.id}'`)
    .then(() => {
      headers(res)
      res.status(204).send()
    })
})

app.listen(9000, '0.0.0.0')
