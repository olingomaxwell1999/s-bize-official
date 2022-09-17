import React from 'react'
import './footer.scss'

// import logo from '../../assets/logo-sbize.png'
import { FaFacebookF } from "react-icons/fa";
import { BsFillArrowUpCircleFill, BsInstagram } from "react-icons/bs";
import {GrLinkedinOption} from 'react-icons/gr'
import {AiFillYoutube} from 'react-icons/ai'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
      <a href="#banner">
        <BsFillArrowUpCircleFill className='up'/>
      </a>
      

      <div className="cols">
        
        <div className="col">
          <h3>quick links</h3>

          <ul className="footer__links">
            <li className="footer__link">
              <Link className='white' to='/'>Home</Link>
            </li>
            <li className="footer__link">
              <Link className='white' to='/cohorts'>meet the cohorts</Link>
            </li>
            <li className="footer__link">
              <Link className='white' to='/explorekenya'>explore kenya</Link>
            </li>
            <li className="footer__link">
              <Link className='white' to='/contactus'>contact us</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3>contact us</h3>

          <a href="mailto:info@nairobits.com">info@nairobits.com</a>
          <p>+254(020)6557635</p>
          <p>53 Park, Ring Road <br/> Kilimani</p>

          <div className="icons">
            <a href="https://www.facebook.com">
              <FaFacebookF className='icon'/>
            </a>
            <a href="https://www.facebook.com">
              <BsInstagram className='icon'/>
            </a>
            <a href="https://www.facebook.com">
              <GrLinkedinOption className='icon'/>
            </a>
            <a href="https://www.facebook.com">
              <AiFillYoutube className='icon'/>
            </a>
          </div>
        </div>
        
        <div className="col bs">
          <button className="btn-green">iaccess</button>
          <button className="btn">apply</button>
          <button className="btn">donate</button>
        </div>

        <div className="col">
          <h3>newsletter</h3>
          <p>Subscribe to our newsletter & stay updated</p>
          <input className='input' type="text" placeholder='Email Address' />
        </div>
      </div>
    </div>
  )
}

export default Footer