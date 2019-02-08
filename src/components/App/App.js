import React, {Component} from 'react'
import '../../css/weather-icons.css'
import '../../css/main.css'
import './App.css'
import AppLayout from '../AppLayout/AppLayout';
import {icons} from '../../icons.js'



// const urlBase = 'https://api.openweathermap.org/data/2.5/forecast?APPID=822240fd8ac6785298bfe78c207ed59c&units=metric'
// const urlBase = 'https://api.apixu.com/v1/forecast.json?key=27577e64fe6e49389d7202224190702&q=50.3930733,24.242924199999997&days=4&lang=ru'
const urlBase = 'https://api.apixu.com/v1/forecast.json?key=27577e64fe6e49389d7202224190702&days=4&lang=ru'


export default class App extends Component{
	
	state = {
		weatherData: {
			"location": {
				"name": "Kristinopol",
				"region": "L'vivs'ka Oblast'",
				"country": "Ukraine",
				"lat": 50.39,
				"lon": 24.24,
				"tz_id": "Europe/Kiev",
				"localtime_epoch": 1549585752,
				"localtime": "2019-02-08 2:29"
			},
			"current": {
				"last_updated_epoch": 1549584023,
				"last_updated": "2019-02-08 02:00",
				"temp_c": -4,
				"temp_f": 24.8,
				"is_day": 0,
				"condition": {
					"text": "Ясно",
					"icon": "//cdn.apixu.com/weather/64x64/night/113.png",
					"code": 1000
				},
				"wind_mph": 4.3,
				"wind_kph": 6.8,
				"wind_degree": 160,
				"wind_dir": "SSE",
				"pressure_mb": 1018,
				"pressure_in": 30.5,
				"precip_mm": 0,
				"precip_in": 0,
				"humidity": 86,
				"cloud": 0,
				"feelslike_c": -7,
				"feelslike_f": 19.4,
				"vis_km": 10,
				"vis_miles": 6,
				"uv": 0
			},
			"forecast": {
				"forecastday": [
					{
						"date": "2019-02-08",
						"date_epoch": 1549584000,
						"day": {
							"maxtemp_c": 1.8,
							"maxtemp_f": 35.2,
							"mintemp_c": -6,
							"mintemp_f": 21.2,
							"avgtemp_c": -0.5,
							"avgtemp_f": 31,
							"maxwind_mph": 12.8,
							"maxwind_kph": 20.5,
							"totalprecip_mm": 5.4,
							"totalprecip_in": 0.21,
							"avgvis_km": 8.3,
							"avgvis_miles": 5,
							"avghumidity": 82,
							"condition": {
								"text": "Умеренный или сильный снег",
								"icon": "//cdn.apixu.com/weather/64x64/day/371.png",
								"code": 1258
							},
							"uv": 1.3
						},
						"astro": {
							"sunrise": "07:48 AM",
							"sunset": "05:28 PM",
							"moonrise": "09:33 AM",
							"moonset": "09:07 PM"
						}
					},
					{
						"date": "2019-02-09",
						"date_epoch": 1549670400,
						"day": {
							"maxtemp_c": 6.3,
							"maxtemp_f": 43.3,
							"mintemp_c": -2.9,
							"mintemp_f": 26.8,
							"avgtemp_c": 2.8,
							"avgtemp_f": 37,
							"maxwind_mph": 16.6,
							"maxwind_kph": 26.6,
							"totalprecip_mm": 1.4,
							"totalprecip_in": 0.06,
							"avgvis_km": 8.3,
							"avgvis_miles": 5,
							"avghumidity": 78,
							"condition": {
								"text": "Временами сильный дождь",
								"icon": "//cdn.apixu.com/weather/64x64/day/305.png",
								"code": 1192
							},
							"uv": 1
						},
						"astro": {
							"sunrise": "07:46 AM",
							"sunset": "05:30 PM",
							"moonrise": "09:53 AM",
							"moonset": "10:12 PM"
						}
					},
					{
						"date": "2019-02-10",
						"date_epoch": 1549756800,
						"day": {
							"maxtemp_c": 9.4,
							"maxtemp_f": 48.9,
							"mintemp_c": 3.4,
							"mintemp_f": 38.1,
							"avgtemp_c": 5.5,
							"avgtemp_f": 41.8,
							"maxwind_mph": 19,
							"maxwind_kph": 30.6,
							"totalprecip_mm": 0,
							"totalprecip_in": 0,
							"avgvis_km": 10,
							"avgvis_miles": 6,
							"avghumidity": 80,
							"condition": {
								"text": "Переменная облачность",
								"icon": "//cdn.apixu.com/weather/64x64/day/116.png",
								"code": 1003
							},
							"uv": 3
						},
						"astro": {
							"sunrise": "07:44 AM",
							"sunset": "05:31 PM",
							"moonrise": "10:12 AM",
							"moonset": "11:19 PM"
						}
					},
					{
						"date": "2019-02-11",
						"date_epoch": 1549843200,
						"day": {
							"maxtemp_c": 10.8,
							"maxtemp_f": 51.4,
							"mintemp_c": 4.2,
							"mintemp_f": 39.6,
							"avgtemp_c": 6.6,
							"avgtemp_f": 43.9,
							"maxwind_mph": 11.2,
							"maxwind_kph": 18,
							"totalprecip_mm": 0.3,
							"totalprecip_in": 0.01,
							"avgvis_km": 9,
							"avgvis_miles": 5,
							"avghumidity": 82,
							"condition": {
								"text": "Местами дождь",
								"icon": "//cdn.apixu.com/weather/64x64/day/176.png",
								"code": 1063
							},
							"uv": 2
						},
						"astro": {
							"sunrise": "07:43 AM",
							"sunset": "05:33 PM",
							"moonrise": "10:34 AM",
							"moonset": "No moonset"
						}
					}
				]
			}
		},
	}

	fetchWeatherData = (url) => {

		fetch(url)
			.then( (response) => response.json())
			.then( (weatherData) => {

				this.setState({weatherData})

			})
	}

	fetchCityName = (url) => {

		fetch(url)
			.then( (response) => response.json())
			.then( (cityData) => {

				console.log(cityData)

			})
	}

	getLocation = () => {

		if (navigator.geolocation) {

			navigator.geolocation.getCurrentPosition( (position) => {

				const {coords: {latitude,longitude}} = position

				this.fetchWeatherData(`${urlBase}&q=${latitude},${longitude}`)

				this.fetchCityName(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBU05kbFWxihsarp2xTdE4j4OHqVmUNDaI&latlng=${latitude},${longitude}&language=ru`)
				console.log(longitude)

			})

		} 

	}

	componentDidMount() {

		this.getLocation()

	}

	render() {

		const {weatherData} = this.state

		return(
			<div>
				<AppLayout weatherData = {weatherData} icons = {icons} />
			</div>
		)

	}

}