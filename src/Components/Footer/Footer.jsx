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
            <a href="https://www.facebook.com/NairobitsTrust/" target="_blank" rel="noreferrer">
              <FaFacebookF className='icon'/>
            </a>
            <a href="https://www.instagram.com/nairobitstrust/" target="_blank" rel="noreferrer">
              <BsInstagram className='icon'/>
            </a>
            <a href="https://www.linkedin.com/in/nairobits-trust-5b1218204/" target="_blank" rel="noreferrer">
              <GrLinkedinOption className='icon'/>
            </a>
            <a href="https://www.youtube.com/channel/UCHS3iDHMmIvhI8XrKlyykDg" target="_blank" rel="noreferrer">
              <AiFillYoutube className='icon'/>
            </a>
          </div>
        </div>
        
        <div className="col bs">
          <button className="btn-green">
            <a href="https://www.iaccess.co.ke/" target="_blank" rel="noreferrer">iaccess</a>
          </button>
          <button className="btn">
            <a href="https://www.nairobits.com/donate" target="_blank" rel="noreferrer">donate</a>
          </button>
          <button className="btn-transparent">
            <a href="https://www.nairobits.com/apply" target="_blank" rel="noreferrer">apply</a>
          </button>
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