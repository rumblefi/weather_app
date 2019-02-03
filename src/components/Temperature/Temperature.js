import React from 'react'
import './Temperature.css'

const WeatherTemperature = ({temperatureData}) => {

	return <div className="temperature">{temperatureData.toFixed(1)} °C</div>

}

export default WeatherTemperature