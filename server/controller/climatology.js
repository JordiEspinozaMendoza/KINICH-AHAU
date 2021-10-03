const axios = require("axios");

const getPointClimatologySimple = async (req, res) => {

    try {

        const { longitude, latitude } = req.body;

        const urlBase = "https://power.larc.nasa.gov/api/temporal/climatology/point?parameters=T2M&community=SB&"
        const urlComplete = `${urlBase}longitude=${longitude}&latitude=${latitude}&format=JSON`

        const { data } = await axios.get(urlComplete, { crossdomain: true });

        res.status(201).send(data.properties);
    } catch (error) {
        return res.status(404).send(error.message);
    }

}

const getPointClimatologyCustom = async (req, res) => {

    try {

        const { longitude, latitude, start, end } = req.body;

        const urlBase = "https://power.larc.nasa.gov/api/temporal/monthly/climatology/point?parameters=T2M&community=SB&"
        const urlComplete = `${urlBase}longitude=${longitude}&latitude=${latitude}&format=JSON&start=${start}&end=${end}`

        const { data } = await axios.get(urlComplete, { crossdomain: true });

        res.status(201).send(data);
    } catch (error) {
        return res.status(404).send(error.message);
    }

}

module.exports = {
    getPointClimatologySimple,
    getPointClimatologyCustom
}