import React, {Component} from 'react'
import '../../css/weather-icons.css'
import '../../css/main.css'
import './App.css'
import AppLayout from '../AppLayout/AppLayout';
import {icons} from '../../icons.js'
import Loader from '../Loader/Loader'
import Error from '../Error/Error'


const apiUrlBase = 'https://api.apixu.com/v1/forecast.json?key=27577e64fe6e49389d7202224190702&days=4&lang=ru'


export default class App extends Component{
	
	state = {
		isLoading: true,
		error: null,
		weatherData: null,
		cityName: null
	}

	fetchWeatherData = (url) => {
		fetch(url)
			.then( (response) => {
				if(response.ok) {
					return response.json()
				}
				else{
					throw new Error('Something went wrong...')
				}
			})
			.then( (weatherData) => this.setState({
				weatherData,
				isLoading: false
			}))
			.catch( (error) => this.setState({
				error,
				isLoading: false
			}))
	}

	handleCityResponse = (results) => {
		if (results[1]) {
			let country = null,
				countryCode = null,
				city = null,
				cityAlt = null;
			let c, lc, component;
			for (let r = 0, rl = results.length; r < rl; r += 1) {
				let result = results[r];

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
			return this.setState({
				cityName: city
			})
		}
	}

	fetchCityName = (url) => {
		fetch(url)
			.then( (response) => {
				if(response.ok) {
					return response.json()
				}
				else{
					throw new Error('Something went wrong...')
				}
			})
			.then( ( {results} ) => {

				this.handleCityResponse(results)

			})
			.catch( (error) => this.setState({
				error,
				isLoading: false
			}))
	}
	
	handleSuccessLocation = (position) => {

		const {coords: {latitude,longitude}} = position

		this.fetchWeatherData(`${apiUrlBase}&q=${latitude},${longitude}`)

		this.fetchCityName(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBU05kbFWxihsarp2xTdE4j4OHqVmUNDaI`)

	}

	handleErrorLocation = (error) => {
		switch(error.code) {
			case error.PERMISSION_DENIED:
			  alert('Вы запретили использовать ваши данные геолокации. Работа приложения невозможна. Пожалуйста, разрешите доступ к вашим данным геолокации')
			  break;
			case error.POSITION_UNAVAILABLE:
			  alert("Информация о геолокации недоступна")
			  break;
			case error.TIMEOUT:
			  alert('Время запроса вышло')
			  break;
			case error.UNKNOWN_ERROR:
			  alert("Неизвестная ошибка")
			  break;
		  }
	}

	getLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(this.handleSuccessLocation,this.handleErrorLocation)
		} 
		else{
			alert('Геолокация не поддерживается Вашим браузером. Просьба обновить браузер до самой последней версии для просмотра приложения')
		}
	}
	
	componentDidMount() {

		setTimeout(() => {

			this.getLocation()
			
		}, 1000);

	}


	render() {
		
		const {isLoading,error,weatherData,cityName} = this.state

		if(error) {
			return <Error errorMessage = {error.message} />
		}

		else{
			return(
				<div className="app-wrapper" >
					{isLoading ? <Loader clazz = '' /> : <Loader clazz = 'is-loaded' /> }
					{weatherData ? <AppLayout weatherData = {weatherData} icons = {icons} cityName = {cityName} /> : null}
				</div>
			)	
		}

	}

}