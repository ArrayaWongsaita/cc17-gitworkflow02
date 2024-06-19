
const express = require('express');
const errorMiddleware = require('./middlewares/error-middleware');
const notFoundMiddleware = require('./middlewares/notFound-middleware');
const { register } = require('module');


const app = express();


app.use('/register',register)


app.use(errorMiddleware);
app.use(notFoundMiddleware)

const port = 8000
app.listen(port, ()=>console.log('server on ',port))

