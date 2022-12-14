const path = require('path')
const express = require('express')
var morgan = require('morgan')
const handlebars  = require('express-handlebars')
const { allowedNodeEnvironmentFlags } = require('process')
const app = express()
const port = 3000

// Static file
app.use(express.static(path.join(__dirname, 'public')))

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})