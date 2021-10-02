const { Router } = require("express");

const { daily, climatology, hourly, montly } = require("../controller/index");

const router = Router();

router
    .route("/")
    .get((req, res) => {
        res.send("Holaaaxxa");
    });

router
    .route("/hourly")
    .post(hourly.getPointHourly);

router
    .route("/daily")
    .post(daily.getPointDaily);

router
    .route("/montly")
    .post(montly.getPointMontly);

router
    .route("/climatology")
    .post(climatology.getPointClimatology);

module.exports = router;