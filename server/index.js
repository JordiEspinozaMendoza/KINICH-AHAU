const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const routes = require("./routes/index.js");

const app = express();

app.use(cors());

app.use(morgan("dev"));
app.use(express.json());

app.use("/", routes);
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
});

module.exports = app;