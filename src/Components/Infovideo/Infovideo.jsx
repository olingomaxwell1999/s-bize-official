import React from 'react'

import pvideo from '../../assets/nairobi.mp4'

import Button from '@mui/material/Button'

import './info.scss'

function Infovideo() {
  return (
    <div className='info'>
        <div className="text">
            <h3>Informational Video</h3>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minus quo commodi rem magnam, suscipit reprehenderit asperiores quisquam cupiditate fugit in adipisci incidunt </p>

            <Button variant="contained">Get Notified</Button>
        </div>
        <div className="video">
            <video controls src={pvideo}></video>
        </div>
    </div>
  )
}

export default Infovideo