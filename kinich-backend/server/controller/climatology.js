const axios = require("axios");

const getPointClimatology = async (req, res) => {

    try {

        const { longitude, latitude, start, end } = req.body;

        const urlBase = "https://power.larc.nasa.gov/api/temporal/daily/point?parameters=T2M&community=SB&"
        const urlComplete = `${urlBase}longitude=${longitude}&latitude=${latitude}&start=${start}&end=${end}&format=JSON`

        console.log(urlComplete);

        const { data } = await axios.get(urlComplete, { crossdomain: true });


    } catch (error) {
        return res.status(404).send(error.message);
    }

}

module.exports = {
    getPointClimatology
}