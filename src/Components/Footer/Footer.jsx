import React from 'react'
import './footer.scss'
import logo from '../../assets/logo-sbize.png'
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import {GrLinkedinOption} from 'react-icons/gr'
import {AiFillYoutube} from 'react-icons/ai'

function Footer() {
  return (
    <div className='footer'>
      <div className="icons">
        <a href="https://www.facebook.com">
          <FaFacebookF/>
        </a>
        <a href="https://www.facebook.com">
          <BsInstagram/>
        </a>
        <a href="https://www.facebook.com">
          <img src={logo} alt="S-Bize Logo" />
        </a>
        <a href="https://www.facebook.com">
          <GrLinkedinOption/>
        </a>
        <a href="https://www.facebook.com">
          <AiFillYoutube/>
        </a>
      </div>

      <div className="cols"></div>
    </div>
  )
}

export default Footer