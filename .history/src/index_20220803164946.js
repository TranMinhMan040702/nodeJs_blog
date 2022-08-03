const path = require('path')
const express = require('express')
var morgan = require('morgan')
const handlebars  = require('express-handlebars')
const app = express()
const port = 3000

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'resources/views'))
console.log('PATH:', path.join(__dirname, 'resources/views/layout'))

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})