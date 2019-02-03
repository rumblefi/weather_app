import React from 'react'
import './WeatherIcon.css'
import 'open-weather-icons/dist/css/open-weather-icons.css'
import 'open-weather-icons/dist/fonts/OpenWeatherIcons.woff'
import 'open-weather-icons/dist/fonts/OpenWeatherIcons.woff2'

const WeatherIcon = ({WeatherIconData}) => {

	return(
		<div className="weather-icon" >

			<i className={`owi owi-${WeatherIconData}`}></i>

		</div>
	)

}

export default WeatherIcon