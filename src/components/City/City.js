import React from 'react'
import './City.css'
import {getDayName,getMonthName,getCurrentDate} from '../../helpers'

const City = ({cityData}) => {

	return(
		<div className="city">{cityData.name} - {getDayName()}, {getMonthName()} {getCurrentDate()}</div>
	)	
	
}

export default City