import React, {Component} from 'react'
import '../../css/weather-icons.css'
import '../../css/main.css'
import './App.css'
import AppLayout from '../AppLayout/AppLayout';
import {icons} from '../../icons.js'
import Loader from '../Loader/Loader'


const urlBase = 'https://api.apixu.com/v1/forecast.json?key=27577e64fe6e49389d7202224190702&days=4&lang=ru'


export default class App extends Component{
	
	state = {
		weatherData: null,
		cityName: null
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
			.then( ( {status,results} ) => {

				if (status === 'OK') {
					if (results[1]) {
						var country = null,
							countryCode = null,
							city = null,
							cityAlt = null;
						var c, lc, component;
						for (var r = 0, rl = results.length; r < rl; r += 1) {
							var result = results[r];

							if (!city && result.types[0] === 'locality') {
								for (c = 0, lc = result.address_components.length; c < lc; c += 1) {
									component = result.address_components[c];

									if (component.types[0] === 'locality') {
										city = component.long_name;
										break;
									}
								}
							} else if (!city && !cityAlt && result.types[0] === 'administrative_area_level_1') {
								for (c = 0, lc = result.address_components.length; c < lc; c += 1) {
									component = result.address_components[c];

									if (component.types[0] === 'administrative_area_level_1') {
										cityAlt = component.long_name;
										break;
									}
								}
							} else if (!country && result.types[0] === 'country') {
								country = result.address_components[0].long_name;
								countryCode = result.address_components[0].short_name;
							}

							if (city && country) {
								break;
							}
						}

						
						this.setState({
							cityName: city
						})

						// console.log("City: " + city + ", City2: " + cityAlt + ", Country: " + country + ", Country Code: " +
						// 	countryCode);
					}
				}

			})
	}

	getLocation = () => {

		if (navigator.geolocation) {

			navigator.geolocation.getCurrentPosition( (position) => {

				const {coords: {latitude,longitude}} = position

				this.fetchWeatherData(`${urlBase}&q=${latitude},${longitude}`)

				this.fetchCityName(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBU05kbFWxihsarp2xTdE4j4OHqVmUNDaI`)
				
			})
			
		} 
		
	}
	
	componentDidMount() {

		this.getLocation()

	}

	render() {
		
		const {weatherData,cityName} = this.state
		
		return(
			<div>
				<Loader/>
				{weatherData ? <AppLayout weatherData = {weatherData} icons = {icons} cityName = {cityName} /> : null }
			</div>
		)

	}

}