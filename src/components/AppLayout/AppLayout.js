import React from 'react'
import './AppLayout.css'
import cityImg from './img/cityImg.jpg'
import GeoPanel from '../GeoPanel/GeoPanel'
import Description from '../Description/Description'
import Icon from '../Icon/Icon'
import Temperature from '../Temperature/Temperature'
import Days from '../Days/Days'
import Graph from '../Graph/Graph'

const AppLayout = ({weatherData,icons,cityName}) => {

	const {current:currentWeather, forecast:forecastWeather} = weatherData

	return (

		<div className="app__container">
		
			<div className="app-content">

				<div className="app-content__col app-content__col--first" style={ {backgroundImage: `url(${cityImg})`} } >

					<Icon iconData = {currentWeather.condition.code} icons = {icons} />

					<Description descriptionData = {currentWeather.condition.text}  />

					<GeoPanel cityName = {cityName}/>

				</div>

				<div className="app-content__col app-content__col--last">

					<Temperature temperatureData = {currentWeather.temp_c} />

					<Graph />

					<Days daysData = {forecastWeather.forecastday.slice(1)} icons = {icons} />

				</div>

			</div>

		</div>		

	)

}

export default AppLayout