var express = require('express')
var app = express()

var login = require('./lib/login')
var signup = require('./lib/signup')

app.use(signup)
app.use(login)

app.listen(3000)
console.log('listening on port 3000')
