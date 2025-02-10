const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');
const MethodNotAllowed = require('./middlewares/methodNotAllowed');
const AuthMiddleware = require("./middlewares/AuthurizationHandler");


app.use(express.json());
app.use(cors());

app.use(AuthMiddleware);
app.use('/api', routes);

app.use(MethodNotAllowed);


module.exports = app;