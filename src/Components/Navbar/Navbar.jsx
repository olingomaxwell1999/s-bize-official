import React,{useState} from 'react'
import logo from '../../assets/logo-sbize.png'
import {Link} from 'react-router-dom'
import './navbar.css'
import Dropdown from './Dropdown'
import Buttonapply from './Buttonapply'
import Button from './Button'

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='nav'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={logo} alt="S-Bize Logo" />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/cohorts'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Meet The Cohorts <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/explorekenya'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Explore Kenya
            </Link>
          </li> 
          <li>
            <a href="https://www.nairobits.com" onClick={closeMobileMenu} className='nav-links-mobile btn' target='_blank' rel='noreferrer'>
              Nairobits
            </a>
          </li>
          <li>
            <a href="https://www.nairobits.com/apply" target='_blank' className='nav-links-mobile btn'
              onClick={closeMobileMenu} rel='noreferrer'>Apply</a>
          </li>
        </ul>

        <Button/>

        <Buttonapply/>
        
      </nav>
    </>
  )
}

export default Navbar;
