const axios = require("axios");

const getPointAnomalies = async (req, res) => {

    try {

        // const { longitude, latitude, start, end } = req.body;
        let longitude = -84;
        let latitude = 33.64;
        let start = 1990;
        let end = 2014

        const urlBase = "https://power.larc.nasa.gov/api/temporal/daily/point?parameters=T2M&community=SB&"
        const urlComplete = `${urlBase}longitude=${longitude}&latitude=${latitude}&start=${start}&end=${end}&format=JSON`

        const { data } = await axios.get(urlComplete, { crossdomain: true });

        res.status(201).send(data);
    } catch (error) {
        return res.status(404).send(error.message);
    }

}

module.exports = {
    getPointAnomalies
}