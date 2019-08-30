import WeatherService from "../services/weather-service.js";

var _weatherService = new WeatherService()

//NOTE The weather service and controller are mostly done, 
//		you may wish to check out the model and include some additional data.


//TODO Complete rendering data to the screen
function _drawWeather() {
	let weather = _weatherService.Weather
	document.getElementById('weather').innerHTML = weather.Template

	console.log("THE WEATHER MAN SAYS:", _weatherService.Weather)
}

export default class WeatherController {

	constructor() {
		//NOTE Register all subscribers
		_weatherService.addSubscriber('weather', _drawWeather)

		//NOTE Retrieve Data
		_weatherService.getWeather()
	}

}
