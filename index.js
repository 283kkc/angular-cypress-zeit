const express = require('express')
const helmet = require('helmet')
const basicAuth = require('basic-auth-connect')

const app = express()

app.use(helmet())
app.use(basicAuth('myid', 'mypassword'))
app.use(express.static('dist/angular-tour-of-heroes'))

module.exports = app
