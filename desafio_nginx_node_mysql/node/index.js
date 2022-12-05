const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const service = require('./service')

var route = require('./service')(app, config);
app.listen(3000, function(){
  console.log("servidor iniciado na porta 3000!");
});