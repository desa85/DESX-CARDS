import {QueryResult, Client} from "pg";
import * as Express from 'express'
import * as uuid from 'uuid/v4'

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

app.listen(3000)
