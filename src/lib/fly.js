const FlyClient = require("./fly-client");
const { APP_KEY, APP_HOST } = require("../../confing");


module.exports = async function fly(city) {
    const flight = new FlyClient(APP_KEY, APP_HOST);
    const data = await flight.getfly(city);
    console.log(data);
  
    return (
      formatResults(data.results) +
      "\n\n" +
      `Provided by: ${data.metadata.provider}`
    );
  };

