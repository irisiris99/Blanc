import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  useEffect(()=>{
      window.addEventListener('scroll', updateScroll);
  });

  return (
    <div className={scrollPosition < 200 ? "navbar" : "change_navbar"}>
      <div className="navbar_logo">
        <Link to="/*"><img src='https://irisiris99.github.io/blanc/imgs/logo.png' /></Link>
      </div>
      <ul>
        <li><Link to="/Villa">THE VILLA</Link></li>
        <li><Link to="/Floor">FLOORS</Link></li>
        <li id="promotion"><a href="#">PROMOTION</a></li>
        <li><a href="#">CONTECT</a></li>
      </ul>
    </div>
  )
}

export default Navbar;