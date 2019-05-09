let express = require('express')

const app = express()

app.get('/', (req: any, res: any) => {
  res.send("<h1>Дурак</h1>")
})

app.listen(3000)
