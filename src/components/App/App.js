import React, {Component} from 'react'
//импортируем константы для работы с API (это базовые URL различных API)
import {weatherAPIBaseUrl,geocodeAPIBaseURL,geocodeAPIKey} from '../../contants'
//css для работы с погодными иконками
import '../../css/weather-icons.css'
//сброс некоторых стандартных стилей
import '../../css/main.css'
import './App.css'
import AppLayout from '../AppLayout/AppLayout';
// обьект с кодами и классами для иконок. Например, API нам отдает код погоды 1000. Берем этот код и по нему достаем нужный нам класс для иконки
import {icons} from '../../icons.js'
import Loader from '../Loader/Loader'
import Error from '../Error/Error'
import appBg from './img/appBg.jpg'

export default class App extends Component{
	
	state = {
		isLoading: true,
		error: null,
		weatherData: null,
		cityName: null
	}

	//берем дату из погодного Apixu API, ну тут все понятно
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

	// получаем город проживания пользователя с помощью Google Geolocation API. Я использовал это API потому, что погодное API возвращает название города проживания только латиницей и не совсем точно 
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

	//обрабатываем запрос на получение названия города (Google Geocode API). API возвращает разные данные, а нам нужно быть уверенными, что мы точно получим город пользователя, а не, например, область его проживания/округ. Эту функцию, я конечно же, скопировал
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
	
	//для работы приложения нам нужно узнать координаты пользователя с помощью Geolocation API
	getLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(this.handleSuccessLocation,this.handleErrorLocation)
		} 
		else{
			alert('Геолокация не поддерживается Вашим браузером. Просьба обновить браузер до самой последней версии для просмотра приложения')
		}
	}

	//для работы погодного API и API, что возвращает название города пользователя, нужны координаты пользователя (полученные с помощью Geolocation API)
	handleSuccessLocation = (position) => {

		const {coords: {latitude,longitude}} = position

		//получаем данные с погодного API
		this.fetchWeatherData(`${weatherAPIBaseUrl}&q=${latitude},${longitude}`)

		//получаем данные о названии города пользователя 
		this.fetchCityName(`${geocodeAPIBaseURL}=${latitude},${longitude}${geocodeAPIKey}`)

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
	

	componentDidMount() {

		//это для загрузки лоадера
		setTimeout(() => {

			this.getLocation()
			
		}, 1000);

	}


	render() {
		
		const {isLoading,error,weatherData,cityName} = this.state

		//если ошибка - просто выводим на экран ошибку
		if(error) {
			return <Error errorMessage = {error.message} />
		}

		else{
			return(
				<div className="app" style={ {backgroundImage: `url(${appBg})`} }  >
					{isLoading ? <Loader clazz = '' /> : <Loader clazz = 'is-loaded' /> }
					{weatherData ? <AppLayout weatherData = {weatherData} icons = {icons} cityName = {cityName} /> : null}
				</div>
			)	
		}

	}

}