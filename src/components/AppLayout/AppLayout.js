import React from 'react'
import './AppLayout.css'
import appBg from '../../img/appBg.jpg'
import City from '../City/City'
import cityImg from '../../img/cityImg.jpg'
import WeatherDescription from '../WeatherDescription/WeatherDescription'
import WeatherIcon from '../WeatherIcon/WeatherIcon'

const AppLayout = ({weatherData}) => {

	return (
		<div className="app" style={ {backgroundImage: `url(${appBg})`} } >

			<div className="app-inner">

				<div className="app-inner__col app-inner__col--first" style={ {backgroundImage: `url(${cityImg})`} } >

					<WeatherIcon WeatherIconData = {weatherData.list[0].weather[0].icon} />

					<WeatherDescription WeatherDescriptionData = {weatherData.list[0].weather[0].description}  />

					<City cityData = {weatherData.city} />

				</div>

			</div>

		</div>	
	)

}

export default AppLayout