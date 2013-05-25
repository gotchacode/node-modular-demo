var express = require('express')
var app = module.exports = express()

app.get('/posts', funtion (req, res) {
    res.render('posts')
})
