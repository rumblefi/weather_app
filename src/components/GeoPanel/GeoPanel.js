import React from 'react'
import './GeoPanel.css'
import {getDayName,getMonthName,getCurrentDate} from '../../helpers'

const GeoPanel = ({geoPanelData}) => {

	return(
		<div className="geo-panel">{geoPanelData.name} - {getDayName()}, {getMonthName()} {getCurrentDate()}</div>
	)	
	
}

export default GeoPanel