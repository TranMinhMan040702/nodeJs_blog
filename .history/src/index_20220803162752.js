const express = require('express')
const engine  = require('express-handlebars')
var morgan = require('morgan')


const app = express()
const port = 3000

app.engine('handlebars', engine ())
app.set('view engine', 'handlebars')
app.set('views', '.resources/views')

app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.send('Hello World Dev Man!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})