import React from 'react'
import './GeoPanel.css'
import {getDayName,getMonthName,getDate} from '../../helpers'

const GeoPanel = ({cityName}) => {

	return(
		<div className="geo-panel">{cityName} - {getDayName( new Date() )}, {getMonthName( new Date() )} {getDate( new Date() )}</div>
	)	
	
}

export default GeoPanel