const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');
const MethodNotAllowed = require('./middlewares/methodNotAllowed');
const AuthMiddleware = require("./middlewares/AuthurizationHandler");
const path = require("path");


app.use(express.json());
app.use(cors());

const uploadPath = path.join(__dirname, "src/public/uploads");
console.log("Serving static files from:", uploadPath);
app.use("/src/public/uploads", express.static(uploadPath));

app.use(AuthMiddleware);
app.use('/api', routes);
app.use(MethodNotAllowed);



module.exports = app;