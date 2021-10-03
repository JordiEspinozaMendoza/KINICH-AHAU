const axios = require("axios");

const getPointDaily = async (req, res) => {

    try {

        const { longitude, latitude, start, end, parameters } = req.body;

        //resolution

        //const urlBaseT2M = "https://power.larc.nasa.gov/api/temporal/hourly/point?parameters=T2M&community=SB&"
        //const urlBaseRadiac = "https://power.larc.nasa.gov/api/temporal/daily/point?parameters=ALLSKY_SFC_SW_DWN&community=sb&"
        //ALLSKY_SFC_SW_DWN

        const urlBase = `https://power.larc.nasa.gov/api/temporal/daily/point?parameters=T2M,ALLSKY_SFC_SW_DWN&community=sb&`
        const urlComplete = `${urlBase}longitude=${longitude}&latitude=${latitude}&start=${start}&end=${end}&format=JSON`

        const { data } = await axios.get(urlComplete, { crossdomain: true });

        res.status(201).send(data);
    } catch (error) {
        return res.status(404).send(error.message);
    }

}

module.exports = {
    getPointDaily
}