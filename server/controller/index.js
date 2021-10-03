
const hourly = require("./hourly");
const daily = require('./daily');
const montly = require('./montly');
const climatology = require('./climatology');
const anomalies = require("./anomalies");
const windrose = require("./windrose");
const manager = require("./manager");

module.exports = {
    hourly,
    daily,
    montly,
    climatology,
    anomalies,
    windrose,
    manager
}