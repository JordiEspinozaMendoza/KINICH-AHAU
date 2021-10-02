import express from "express";
import cors from "cors";

const app = express();
const port = 5000;

import routes from "./routes/index";

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
})

app.use(cors());
app.use(express.json());

app.use("/", routes);