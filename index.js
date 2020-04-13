const swaggerUi = require('swagger-ui-express')
const apiSpec = require('./swagger_output.json')
const bodyParser = require('body-parser')
const express = require('express')
const http = require('http')
const app = express()

const httpPort = 3000

/* Server */
http.createServer(app).listen(httpPort)
console.log("Listening at:// port:%s (HTTP)", httpPort)

/* Middlewares */
app.use(bodyParser.json())
app.use('/doc', swaggerUi.serve, swaggerUi.setup(apiSpec))
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader('Cache-Control', 'no-cache')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
})

/* Endpoints */
require('./src/endpoints')(app)