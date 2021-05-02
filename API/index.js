const express = require("express");
const app = express();
const cors = require('cors');

const routes = require('./routes/api');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(4343, () => {
  console.log("corriendo en el puerto 4343");
});


