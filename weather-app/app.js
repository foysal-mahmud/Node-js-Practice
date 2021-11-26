const http = require("http");
const geocode = require("./utils/geocode");

// geocode("Germany", (error, data) => {
//   console.log("Error: ", error);
//   console.log("Date: ", data);
// });

/// http request - core node module
const url =
  "http://api.weatherstack.com/current?access_key=9493670eab2987265927ec51357e61a8&query=Dhaka&units=f";

const request = http.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("Error: ", error);
});

request.end();

// const url =
//   "http://api.weatherstack.com/current?access_key=9493670eab2987265927ec51357e61a8&query=Dhaka&units=f";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather service!");
//   } else if (response.body.error) {
//     console.log("Unable to find location");
//   } else {
//     console.log(
//       "Current temparature is " +
//         response.body.current.temperature +
//         "fahrenheit And it will be " +
//         response.body.current.weather_descriptions
//     );
//   }
// });

// const geocode = (address, callback) => {
//   const url =
//     "http://api.weatherstack.com/current?access_key=9493670eab2987265927ec51357e61a8&query=" +
//     encodeURIComponent(address) +
//     "&units=f";

//   request({ url: url, json: true }, (error, response) => {
//     if (error) {
//       callback("Unable to connect to weather service!", undefined);
//     } else if (response.body.error) {
//       callback("Unable to find location", undefined);
//     } else {
//       callback(undefined, {
//         temperature: response.body.current.temperature,
//         description: response.body.current.weather_descriptions,
//       });
//     }
//   });
// };

// geocode("Japan", (error, data) => {
//   console.log("Error: ", error);
//   console.log("Date: ", data);
// });
