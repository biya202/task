import React from 'react';
import './navbar.css'
import logo from '../SS/logo.png'


const Navbar = () => {
  return (  
      <header class="navbar">
        <div className='logo'>
        <img src={logo} alt='logo'/>
        </div>
      <ul class="menu">
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Our Services</a></li>
        <li><a href='#'>FAQ</a></li>
        <li><a href='#'>News & Updates</a></li>
        <li><a href='#'>Testimonial</a></li>
        <li className='button'><a href='#'>Contact Us</a></li>
      </ul>
    </header>
  )
}

export default Navbar
