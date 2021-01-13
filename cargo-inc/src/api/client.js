const axios = require('axios');

const BASE_URL = 'http://localhost:9999'

const client = (app = null) => {
  baseURL = app ? `${BASE_URL}/${app}/` : BASE_URL;

  return axios.Axios({
    baseURL,
    responseType: 'json'
  });
}

module.exports = client;