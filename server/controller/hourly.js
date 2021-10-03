const axios = require("axios");

const getPointHourly = async (req, res) => {

    try {

        const { longitude, latitude, start, end } = req.body;

        const urlBase = "https://power.larc.nasa.gov/api/temporal/hourly/point?parameters=T2M,ALLSKY_SFC_SW_DWN&community=SB&"
        const urlComplete = `${urlBase}longitude=${longitude}&latitude=${latitude}&start=${start}&end=${end}&format=JSON`

        const { data } = await axios.get(urlComplete, { crossdomain: true });

        res.status(201).send(data.properties.parameter.T2M);
    } catch (error) {
        return res.status(404).send(error.message);
    }

}

module.exports = {
    getPointHourly
};
