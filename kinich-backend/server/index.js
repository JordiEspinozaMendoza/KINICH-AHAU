const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

const routes = require("./routes/index");

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
})

app.use(cors());
app.use(express.json());

app.use("/", routes);

module.exports = app;