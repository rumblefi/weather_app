import React from 'react'
import './Icon.css'
import 'open-weather-icons/dist/css/open-weather-icons.css'
import 'open-weather-icons/dist/fonts/OpenWeatherIcons.woff'
import 'open-weather-icons/dist/fonts/OpenWeatherIcons.woff2'

const Icon = ({iconData,icons}) => {

	return(
		<div className="icon" >

			<i className={`wi ${icons[iconData]}`}></i>

			<i className={`owi owi-${iconData}`}></i>

		</div>
	)

}

export default Icon