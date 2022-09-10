import React from 'react'
import img from '../../assets/banner2.JPG'
import './galleryimg.scss'

function Galleryitem() {
  return (
    <div className='galimg'>
        <img src={img} alt="gal" />
    </div>
  )
}

export default Galleryitem