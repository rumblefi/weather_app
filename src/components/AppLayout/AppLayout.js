import React from 'react'
import './AppLayout.css'
import appBg from './img/appBg.jpg'
import graph from './img/graph.png'
import cityImg from './img/cityImg.jpg'
import GeoPanel from '../GeoPanel/GeoPanel'
import Description from '../Description/Description'
import Icon from '../Icon/Icon'
import Temperature from '../Temperature/Temperature'
import Days from '../Days/Days'

const AppLayout = ({weatherData,icons,cityName}) => {

	const {current:currentWeather, forecast:forecastWeather} = weatherData

	return (
		<div className="app" style={ {backgroundImage: `url(${appBg})`} } >

			<div className="app-inner">

				<div className="app-inner__col app-inner__col--first" style={ {backgroundImage: `url(${cityImg})`} } >

					<Icon iconData = {currentWeather.condition.code} icons = {icons} />

					<Description descriptionData = {currentWeather.condition.text}  />

					<GeoPanel cityName = {cityName}/>

				</div>

				<div className="app-inner__col app-inner__col--last">
				
					<Temperature temperatureData = {currentWeather.temp_c} />

					<img src={graph} alt=""/>

					<Days daysData = {forecastWeather.forecastday.slice(1)} icons = {icons} />

				</div>


			</div>

		</div>	
	)

}

export default AppLayout