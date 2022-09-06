import React,{useState} from 'react'
import logo from '../../assets/logo-sbize.png'
import {Link} from 'react-router-dom'
import './navbar.scss'
import Button from '@mui/material/Button'

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        <img src={logo} alt="S-Bize" />
      </a>
      <button onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }} className="hamburger">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "expanded" : "navigation-menu"
        }>
        <ul>
          <li>
            <Link className='link' to='/'>Home</Link>
          </li>
          <li>
            <Link className='link' to='/cohorts'>Meet the Cohorts</Link>
          </li>
          <li>
            <Link className='link' to='/cohorts'>Meet the Cohorts</Link>
          </li>
          <li>
            <Link className='link' to='/cohorts'>
              <Button variant="contained">Apply</Button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar