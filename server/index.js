const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const port = process.env.PORT || 5000;
const routes = require("./routes/index.js");

const app = express();

app.use(cors());

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));

app.use("/", routes);

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
});

module.exports = app;