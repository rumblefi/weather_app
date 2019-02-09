import React from 'react'
import './Icon.css'

const Icon = ({icons, iconData}) => {

    return (
        <div className="icon">

            <i className={`wi ${icons[iconData]}`}></i>

        </div>
    )

}

export default Icon