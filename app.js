var express = require('express')
var app = express()

var login = require('./lib/login')
var signup = require('./lib/signup')

app.use(signup)
app.use(login)
var port = process.env.PORT || 3000
app.listen(port)
console.log('listening on port ' + port)
