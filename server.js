const express = require('express');
const errorMiddleware = require('./middlewares/error-middleware');
const notFoundMiddleware = require('./middlewares/notFound-middleware');
const { login } = require('./routes/auth-route');

const app = express();

app.use('/login', login);

app.use(errorMiddleware);
app.use(notFoundMiddleware);

const port = 8000;
app.listen(port, () => console.log('server on ', port));
