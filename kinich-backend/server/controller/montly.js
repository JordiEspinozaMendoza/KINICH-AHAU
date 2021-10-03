const axios = require("axios");

const getPointMontly = async (req, res) => {

    try {

        const { longitude, latitude, start, end } = req.body;

        const urlBase = "https://power.larc.nasa.gov/api/temporal/monthly/point?parameters=T2M,T2M_MAX&community=SB&"

        const urlComplete = `${urlBase}longitude=${longitude}&latitude=${latitude}&format=JSON&start=${start}&end=${end}`;

        const { data } = await axios.get(urlComplete, { crossdomain: true });

        res.status(201).send(data);
    } catch (error) {
        return res.status(404).send(error.message);
    }

}

module.exports = {
    getPointMontly
}