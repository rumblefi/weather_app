import React from 'react'
import {getDayName} from '../../helpers'

const Day = ({
    dayData: {
        day,
        date
    },
    icons
}) => {

    return (

        <div className="days__item">

            <i className={`wi ${icons[day.condition.code]} days__icon`}></i>

            <div className="days__week-day">{getDayName(date)}</div>

            <ul className="days-list">

                <li className="days-list__item">{day.maxtemp_c}°C</li>

                <li className="days-list__item">{day.mintemp_c}°C</li>

            </ul>

        </div>

    )

}

export default Day