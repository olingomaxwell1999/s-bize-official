import React from 'react'
import { Link } from 'react-router-dom'
import Video from '../Video/Video'

import './info.scss'

function Infovideo(props) {
  return (
    <div className="info">
      <div className="text">
        <h1>Informational Video</h1>

        <p>
          Learn about the tactics of the S-Bize program and the organizations that we engage. <br/><br/>

          Applications for 2022/23 S-Bize organizations are closed. Check back in July 2023 to join as a client organization
        </p>

        <button className="btn">
          <Link style={{color: '#fff'}} target='_blank ' to='https://mailchi.mp/nairobits/the-nairobits-way-still-rising?e=[UNIQID]'>get notified</Link>
        </button>
      </div>
      <div className="video">
        <Video embedId="jjQlMpOm-Us" />
      </div>
    </div>
  )
}

export default Infovideo