const axios = require("axios");

const getPointManager = async (req, res) => {

    try {

        //const urlBase = "https://power.larc.nasa.gov/api/system/manager/parameters?community=sb&temporal=daily"
        const urlBase = "https://power.larc.nasa.gov/api/system/manager/parameters?community=sb&temporal=monthly"

        const data = await axios.get(urlBase);

        res.status(201).send(data);
    } catch (error) {
        return res.status(404).send(error.message);
    }

}

module.exports = {
    getPointManager
};
