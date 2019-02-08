import React from 'react'
import './GeoPanel.css'
import {getDayName,getMonthName,getDate} from '../../helpers'

const GeoPanel = ({geoPanelData}) => {

	return(
		<div className="geo-panel">{geoPanelData} - {getDayName( new Date() )}, {getMonthName( new Date() )} {getDate( new Date() )}</div>
	)	
	
}

export default GeoPanel