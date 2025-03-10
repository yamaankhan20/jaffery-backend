const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');
const MethodNotAllowed = require('./middlewares/methodNotAllowed');
const AuthMiddleware = require("./middlewares/AuthurizationHandler");
const path = require("path");


app.use(express.json());
app.use(cors());

app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));
console.log("Serving static files from:", path.join(__dirname, "public/uploads"));

app.use(AuthMiddleware);
app.use('/api', routes);
app.use(MethodNotAllowed);



module.exports = app;