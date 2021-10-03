const axios = require("axios");

const getPointClimatologySimple = async (req, res) => {

    try {

        const { longitude, latitude, parameters } = req.body;

        //const urlBase = `https://power.larc.nasa.gov/api/temporal/daily/point?parameters=${parameters}&community=sb&`
        //const urlComplete = `${urlBase}longitude=${longitude}&latitude=${latitude}&start=${start}&end=${end}&format=JSON`

        const urlBase = `https://power.larc.nasa.gov/api/temporal/climatology/point?parameters=T2M,ALLSKY_SFC_SW_DWN&community=sb&`
        const urlComplete = `${urlBase}longitude=${longitude}&latitude=${latitude}&format=JSON`

        const { data } = await axios.get(urlComplete, { crossdomain: true });

        res.status(201).send(data.properties.parameter);
    } catch (error) {
        return res.status(404).send(error.message);
    }

}

const getPointClimatologyCustom = async (req, res) => {

    try {

        const { longitude, latitude, start, end } = req.body;


        //const urlBase = `https://power.larc.nasa.gov/api/temporal/daily/point?parameters=${parameters}&community=sb&`
        //const urlComplete = `${urlBase}longitude=${longitude}&latitude=${latitude}&start=${start}&end=${end}&format=JSON`

        const urlBase = "https://power.larc.nasa.gov/api/temporal/monthly/climatology/point?parameters=T2M&community=sb&"
        const urlComplete = `${urlBase}longitude=${longitude}&latitude=${latitude}&start=${start}&end=${end}&format=JSON`

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