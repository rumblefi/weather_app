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

const AppLayout = ({weatherData}) => {

	const {list} = weatherData
	
	const arr = list.map( (item) => ({
		date: item.dt_txt.slice(0,10),
		temp_max: item.main.temp_max,	
		temp_min: item.main.temp_min,	
	}))

	console.log(arr)
	
	return (
		<div className="app" style={ {backgroundImage: `url(${appBg})`} } >

			<div className="app-inner">

				<div className="app-inner__col app-inner__col--first" style={ {backgroundImage: `url(${cityImg})`} } >

					<Icon iconData = {weatherData.list[0].weather[0].icon} />

					<Description descriptionData = {weatherData.list[0].weather[0].main}  />

					<GeoPanel geoPanelData = {weatherData.city} />

				</div>

				<div className="app-inner__col app-inner__col--last">
				
					<Temperature temperatureData = {weatherData.list[0].main.temp} />

					<img src={graph} alt=""/>

					<Days daysData = {weatherData.list[0].main.temp} />

				</div>


			</div>

		</div>	
	)

}

export default AppLayout