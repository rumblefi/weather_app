import React from 'react'
import './WeatherDescription.css'

const WeatherDescription = ({WeatherDescriptionData}) => {

	return <div className="weather-description">{WeatherDescriptionData}</div>
	
}

export default WeatherDescription