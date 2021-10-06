const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=9493670eab2987265927ec51357e61a8&query=Dhaka";

request({ url: url, json: true }, (error, response) => {
  console.log(response.body.current);
});
