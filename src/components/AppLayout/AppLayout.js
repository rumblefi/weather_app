import React from 'react'
import './AppLayout.css'
import appBg from './img/appBg.jpg'
import graph from './img/graph.png'
import GeoPanel from '../GeoPanel/GeoPanel'
import cityImg from './img/cityImg.jpg'
import Description from '../Description/Description'
import Icon from '../Icon/Icon'
import Temperature from '../Temperature/Temperature'
import Days from '../Days/Days'

const AppLayout = ({weatherData,icons}) => {

	return (
		<div className="app" style={ {backgroundImage: `url(${appBg})`} } >

			<div className="app-inner">

				<div className="app-inner__col app-inner__col--first" style={ {backgroundImage: `url(${cityImg})`} } >

					<Icon iconData = {weatherData.current.condition.code} icons = {icons} />

					<Description descriptionData = {weatherData.current.condition.text}  />

					<GeoPanel geoPanelData = {weatherData.location.name}/>

				</div>

				<div className="app-inner__col app-inner__col--last">
				
					<Temperature temperatureData = {weatherData.current.temp_c} />

					<img src={graph} alt=""/>

					<Days daysData = {weatherData.forecast.forecastday.slice(1)} icons = {icons} />

				</div>


			</div>

		</div>	
	)

}

export default AppLayout