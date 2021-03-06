const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const http = require('http')
const routes = require('./src/routes')

const PORT = 3000

mongoose.connect(
  'mongodb://localhost:27017/mevnshop',
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

routes.forEach(item => {
  app.use(`/${item}`, require(`./src/routes/${item}`))
})

http.createServer({}, app).listen(PORT)
console.log(`Server has running at port ${PORT}`)