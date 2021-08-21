import React from 'react'
import './main.css'

const Title = ({activeStyle}) => {
    return (
        <div>
           <h1 className = {activeStyle}> Hi, how was your day? </h1> 
        </div>
    )
}

export default Title
