var express = require('express')
var app = module.exports = express()

app.get('/login', funtion (req, res) {
    res.render('login')
})
