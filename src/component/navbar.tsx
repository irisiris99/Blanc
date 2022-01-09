import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <Link to="/*"><img src={process.env.PUBLIC_URL + '/imgs/logo.png'} /></Link>
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