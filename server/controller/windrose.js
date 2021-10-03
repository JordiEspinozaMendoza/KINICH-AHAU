const axios = require("axios");

const getPointWindrose = async (req, res) => {

    try {

        const { longitude, latitude, start, end } = req.body;

        const urlBase = "https://power.larc.nasa.gov/api/application/windrose/point?"
        const urlComplete = `${urlBase}start=${start}&end=${end}&latitude=${latitude}&longitude=${longitude}&format=JSON`

        axios.get(urlComplete,
            {
                crossdomain: true,
                headers: { 'Content-Type': 'application/json' },
            }).then((data) => res.status(201).send(data)).catch((e) => res.status(404).send(e));

    } catch (error) {
        return res.status(404).send(error.message);
    }

}

module.exports = {
    getPointWindrose
};