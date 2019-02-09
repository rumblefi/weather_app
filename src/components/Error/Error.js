import React from 'react'
import './Error.css'

const Error = ({errorMessage}) => {

    return (
        <div className="error">{errorMessage}</div>
    )

}

export default Error