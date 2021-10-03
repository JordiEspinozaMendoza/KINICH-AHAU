const axios = require("axios");

//import axios from 'axios';

//'http://localhost:5000'

class Api {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://192.168.1.69:5000'
        });
    }

    async apiCall(request) {
        try {
            return (await request()).data;
        } catch (e) {
            console.log(e);
            return e.response.data;
        }
    }

    async getPointMontly(url) {
        return await this.apiCall(() => this.api.get(url));
    }


}

const api = new Api();
export default api;
