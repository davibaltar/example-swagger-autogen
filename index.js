const app = require('express')()
const http = require('http')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
const bodyParser = require('body-parser')

/* Server */
const httpPort = 3000
http.createServer(app).listen(httpPort)
console.log("Listening at:// port:%s (HTTP)", httpPort)

/* Middlewares */
app.use(bodyParser.json())
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

/* Endpoints */
require('./src/endpoints')(app)