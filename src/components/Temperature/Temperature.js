import React from 'react'
import './Temperature.css'

const WeatherTemperature = ({temperatureData}) => {

	return <div className="temperature">{temperatureData} °C</div>

}

export default WeatherTemperature