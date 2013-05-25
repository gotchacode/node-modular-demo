var express = require('express')
var app = module.exports = express()

app.get('/users', funtion (req, res) {
    res.send('list of users')
})
