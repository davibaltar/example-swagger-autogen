/*
 * Run the project and access the documentation at: http://localhost:3000/doc
 *
 * Use the command below to generate the documentation without starting the project:
 * $ npm start
 *
 * Use the command below to generate the documentation at project startup:
 * $ npm run swagger-autogen
 */

const app = require('express')()
const http = require('http')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
const bodyParser = require('body-parser')

/* Server */
const httpPort = 3000
http.createServer(app).listen(httpPort)
console.log("Access the link: http://localhost:%s/doc", httpPort)

/* Middlewares */
app.use(bodyParser.json())
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

/* Endpoints */
require('./src/endpoints')(app)