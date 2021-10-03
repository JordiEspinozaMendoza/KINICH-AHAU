const { Router } = require("express");

const { daily, climatology, hourly, montly, anomalies, windrose, manager } = require("../controller/index");

const router = Router();

/* router
    .route("/")
    .get((req, res) => {
        res.send("Hi");
    }); */

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
    .route("/climatology/simple")
    .post(climatology.getPointClimatologySimple);

router
    .route("/climatology/custom")
    .post(climatology.getPointClimatologyCustom);

router
    .route("/anomalies")
    .post(anomalies.getPointAnomalies);

router
    .route("/windrose")
    .post(windrose.getPointWindrose);

router
    .route("/manager")
    .get(manager.getPointManager);

module.exports = router;