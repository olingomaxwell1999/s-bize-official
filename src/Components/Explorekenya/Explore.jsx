import React from 'react'
import './explore.scss'
import video from '../../assets/nairobi.mp4'

function Explore() {
  return (
    <div className='explore'>
      <div className="text">
        <h1>explore kenya</h1>

        <p>We have identified organizations tha are interested in scaling up the impact they have on the lives pf the people living in low-income areas. it is clear that these entrepreneurs are committed to benefit from your expertise.</p>
      </div>

      <div className="video">
        <div className="text">
          <p>The S-biize proggramm is an innovative program thata connects academic excellence on soccial entrepreneurship to social entrepreneurs in Kenya. The program offers MBA students wuth business knowledge to field experience thhrough a consulting missio in the slums of Kenya.<br/><br/>
          The S-biize proggramm is an innovative program thata connects academic excellence on soccial entrepreneurship to social entrepreneurs in Kenya. The program offers MBA students wuth business knowledge to field experience thhrough a consulting missio in the slums of Kenya.<br/><br/>
          The S-biize proggramm is an innovative program thata connects academic excellence on soccial entrepreneurship to social entrepreneurs in Kenya. The program offers MBA students wuth business knowledge to field experience thhrough a consulting missio in the slums of Kenya.</p>
        </div>

        <div className="video">
          <div className="circle"></div>
          <video src={video} controls></video>
        </div>
      </div>
    </div>
  )
}

export default Explore