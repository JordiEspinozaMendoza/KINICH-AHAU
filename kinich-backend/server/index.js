const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const routes = require("./routes/index.js");

const app = express();
const port = 5000;

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
})

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/", routes);

module.exports = app;