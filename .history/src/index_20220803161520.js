const express = require('express')
const handlebars = require('express-handlebars')
var morgan = require('morgan')

app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')
app.set('views', './views')

const app = express()
const port = 3000

app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.send('Hello World Dev Man!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})