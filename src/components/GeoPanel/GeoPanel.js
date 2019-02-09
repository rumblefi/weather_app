import React from 'react'
import './GeoPanel.css'
import {getDayName,getMonthName,getDate} from '../../helpers'

const GeoPanel = ({cityName}) => {

	return(
		<div className="geo-panel">{cityName} - {getDayName()}, {getDate()} {getMonthName()}</div>
	)	
	
}

export default GeoPanel