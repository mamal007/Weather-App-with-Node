const request = require("request");
const geoCode = require("./utils/geoCode");
const forecast = require("./utils/forecast");

geoCode("london", (error, response) => {
  console.log(response);
  console.log(error);
});

forecast(37.8267, -122.4233, (error, response) => {
  console.log(response);
  console.log(error);
});
