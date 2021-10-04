const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const port = process.env.PORT || 8000;

const app = express();

app.use(cors());

app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.json());

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

module.exports = app;
