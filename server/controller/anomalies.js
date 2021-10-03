const axios = require("axios");

const getPointAnomalies = async (req, res) => {

    try {

        const { longitude, latitude, start, end } = req.body;

        const urlBase = "https://power.larc.nasa.gov/api/application/anomalies/point?"
        const urlComplete = `${urlBase}longitude=${longitude}&latitude=${latitude}&start=${start}&end=${end}&format=HTML`

        //https://power.larc.nasa.gov/api/application/anomalies/point?longitude=-84.43&latitude=33.64&start=2010&end=2014&format=HTML

        axios.get(urlComplete, { crossdomain: true }).then((data) => res.status(201).send(data));

    } catch (error) {
        return res.status(404).send(error.message);
    }

}

module.exports = {
    getPointAnomalies
}