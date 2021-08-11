const axios = require("axios");


class FlyClient {
    constructor(apiKey, apiHost){
        this.apiKey = apiKey;
        this.apiHost = apiHost;
        this.baseUrl = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/",
        this.client = axios.create({
            baseURL: this.baseURL,
            headers: {
                api_Host: this.apiHost,
              api_key: this.apiKey,
            },
          });

    }

 
        async get(endpoint) {
            const data = await this.client
              .get(endpoint)
              .then((res) => res.data)
              .catch(({ response }) => Promise.reject(response));
              console.log(data);
        
            return data;
          }
           
           async getfly(city) {
            const endpoint = `${city}/UK/GBP/en-GB/`;
            return await this.get(endpoint);
          }
}

module.exports = FlyClient;
