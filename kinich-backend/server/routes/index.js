const { Router } = require("express");

const { daily, climatology, hourly, montly } = require("../controller/index");

//import { getPointHourly } from "../controller/hourly.js";

const router = Router();

router
    .route("/")
    .get((req, res) => {
        res.send("Holaaaxxa");
    });

router
    .route("/hourly")
    .get(hourly.getPointHourly);

router
    .route("/daily")
    .get(daily.getPointDaily);

router
    .route("/montly")
    .get(montly.getPointMontly);

router
    .route("/climatology")
    .get(climatology.getPointClimatology);

module.exports = router;