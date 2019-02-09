import React from 'react'
import './Days.css'
import Day from '../Day/Day'

const Days = ({daysData, icons}) => {

    const daysItems = daysData.map((dayData) => {

        console.log(dayData)

        return (<Day key={dayData.date} dayData={dayData} icons={icons}/>)

    })

    return (

        <div className="days">

            {daysItems}

        </div>

    )

}

export default Days