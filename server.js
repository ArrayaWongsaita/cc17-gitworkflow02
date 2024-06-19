const express = require('express')
const notFoundMiddleware = require('./middlewares/notFound-middleware')

const app = express()


app.use(notFoundMiddleware)

const port = 8000
app.listen(port, ()=>console.log('server on ',port))