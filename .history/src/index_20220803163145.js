const express = require('express')
var morgan = require('morgan')
const handlebars  = require('express-handlebars')
const app = express()
const port = 3000

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')
app.set('views', './resources/views')


app.get('/', (req, res) => {
  res.send('Hello World Dev Man!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})