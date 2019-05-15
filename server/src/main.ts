import {QueryResult} from "pg";
import { Request, Response, Application } from 'express'

const express = require('express')
const { Client } = require('pg')

const client = new Client({
  user: 'desx_user',
  host: '127.0.0.1',
  database: 'desx_cards',
  password: 'desx_pass',
  port: 5430,
})

client.connect()
client.query(
  `CREATE TABLE IF NOT EXISTS cards (
    id uuid not null primary key, 
    name varchar(16) not null, 
    typeMagic varchar(16) not null, 
    power int not null
  )`
)

const app = express()

app.get('/api/card/list', (req: Request, res: Response) => {
  client.query('select * from cards').then((resultDb: QueryResult) => {
    res.send(resultDb.rows)
  })
})

app.listen(3000)
