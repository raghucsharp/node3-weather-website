const request = require('request');
const access_key = '4f5c3c5869bbefdc04a9a6263d3bd84e'
const base_url = 'http://api.weatherstack.com/';
const url = base_url + 'current?access_key=' + access_key +
    '&units=f&query=';
const forecast = (lat, long, callback) => {
    const forecastUrl = url + lat + ',' + long;
    request({ url: forecastUrl, json: true }, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect weather service');
        } else if (body.error) {
            callback('Unable to find location');
        } else {
            const current = body.current;
            callback(undefined, current.weather_descriptions[0] + '. It is currently ' + current.temperature +
                ' degrees out. It feels like ' + current.feelslike + ' degrees out.');
        }
    });
}
module.exports = forecast;