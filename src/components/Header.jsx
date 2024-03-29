import React from 'react';
import {Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';

import logo from '../images/logo.png'

const Header = () => {
  return (
   <nav>
    <div className='container nav__container'>
      <Link to="/" className='nav_logo'>
        <img src={logo} alt="" />

      </Link>

      <ul className='nav__menu'>
        <li><Link to='/profile/:id'>Kayode</Link></li>
        <li><Link to='/create'>Create</Link></li>
        <li><Link to='/authors'>Authors</Link></li>
        <li><Link to='/logout'>Logout</Link></li>

      </ul>

      <button className='toggleBtn nav_toggle'><AiOutlineClose/></button>


    </div>
   </nav>
  )
}

export default Header