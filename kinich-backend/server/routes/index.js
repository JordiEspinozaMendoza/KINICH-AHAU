const { Router } = require("express");
const app = require("../index");
const router = Router();

const { getPointHourly } = require("../controller/hourly");
const { getPointDaily } = require("../controller/daily");
const { getPointMontly } = require("../controller/montly");
const { getPointClimatology } = require("../controller/climatology");

router
    .route("/")
    .get((req, res) => {
        res.send("Hola");
    });

router
    .route("/hourly")
    .get(getPointHourly);

router
    .route("/daily")
    .get(getPointDaily);

router
    .route("/montly")
    .get(getPointMontly);

router
    .route("/climatology")
    .get(getPointClimatology);

module.exports = router;
