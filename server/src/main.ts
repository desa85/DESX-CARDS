import {QueryResult, Client} from "pg";
import { Request, Response, Application } from 'express'

const express = require('express')
const uuid = require('uuid/v4')

const client = new Client({
  user: 'desx_user',
  host: '127.0.0.1',
  database: 'desx_cards',
  password: 'desx_pass',
  port: 5430,
})

async function createTable() {
  let row

  await client.connect()

  await client.query(
    `CREATE TABLE IF NOT EXISTS cards (
      id uuid not null primary key, 
      name varchar(16) not null, 
      typeMagic varchar(16) not null, 
      power int not null
    )`
  )

  row = await client.query(`SELECT COUNT(*) FROM cards`)
  try {
    if (row.rows[0].count == 0) {
      await client.query(
        `insert into cards (id, name, typeMagic, power) values
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

const app = express()

app.get('/api/card/list', (req: Request, res: Response) => {
  client.query('select * from cards').then((resultDb: QueryResult) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    res.send(resultDb.rows)
  })
})

app.listen(3000)
