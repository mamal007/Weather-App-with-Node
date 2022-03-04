const request = require("request");

const weatherUrl =
  "http://api.weatherstack.com/current?access_key=e9364799702857aa610fdd511a9a1995&query=37.8267,-122.4233&units=f";

request({ url: weatherUrl, json: true }, (error, response) => {
if (error) {
  console.log ("Unable to connect to weather service!")

} else if (response.body.error) {
  console.log("Unable to find the location!")

} else {
  const temperature = response.body.current.temperature;
  const feelsLike = response.body.current.feelslike;
  const weatherDescription = response.body.current.weather_descriptions[0];

  console.log(
      `${weatherDescription}! It's ${temperature} degrees out, but it feels like ${feelsLike} degrees out.`
    );
}
});

const mapUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/new%20york.json?access_token=pk.eyJ1IjoibXJhc2dhcmkiLCJhIjoiY2wwY201ZG83MDBqZzNrbTh4M2Jna2V2ZiJ9.KOkjZW3tfPI5ZmHp7wtxnw&limit=1";

request({ url: mapUrl, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to mapbox service!");
  } else if (response.body.features.length === 0) {
    console.log("Unable to find the location!");
  } else {
    const coordinates = response.body.features[0].center;
    console.log(coordinates);
  }
});
