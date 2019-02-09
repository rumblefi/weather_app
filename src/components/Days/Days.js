import React from 'react'
import './Days.css'
import {getDayName,getMonthName,getDate} from '../../helpers'

const Days = ({daysData,icons}) => {

	const daysItems = daysData.map( ({ date_epoch, date, day:{maxtemp_c,mintemp_c,condition} }) => {

		return(
			<div key = {date} className="days__item">
			
				<i className={`wi ${icons[condition.code]} days__icon`}></i>
				
				<div className="days__week-day">{getDayName()}</div>

				<ul className="days-list">
				
					<li className="days-list__item">{maxtemp_c}°C</li>

					<li className="days-list__item">{mintemp_c}°C</li>

				</ul>

			</div>
		)

	}) 

	return (

		<div className="days">

			{daysItems}

		</div>

	)

}

export default Days