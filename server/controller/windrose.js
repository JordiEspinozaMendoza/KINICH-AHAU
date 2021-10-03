const axios = require("axios");

const getPointWindrose = async (req, res) => {

    try {

        const { longitude, latitude, start, end } = req.body;

        const urlBase = "https://power.larc.nasa.gov/api/application/windrose/point?"
        const urlComplete = `${urlBase}longitude=${longitude}&latitude=${latitude}&start=${start}&end=${end}&format=JSON`

        //console.log(urlComplete);
        //console.log("https://power.larc.nasa.gov/api/application/windrose/point?longitude=-84.43&latitude=33.64&start=19900101&end=20141231&format=JSON");

        axios.get(urlComplete, { crossdomain: true }).then((data) => res.status(201).send(data)).catch((e) => console.log(e.message));

    } catch (error) {
        return res.status(404).send(error.message);
    }

}

module.exports = {
    getPointWindrose
};