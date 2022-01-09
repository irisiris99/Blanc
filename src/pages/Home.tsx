import React, { Component, useState } from 'react';
import Navbar from "../component/navbar";

function Home() {
  return (
    <div>
			<Header />
    </div>
  );
}

function Header() {
  return (
    <div className="header" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + 'http//irisiris99.github.io/Blanc/imgs/background_1.jpg'})`
    }}>
      <Navbar />
      <HeaderContent />
    </div>
  )
}

function HeaderContent() {
  return (
    <div className="header_content">
      <div>
        <h1 id="Blacnhe">Blanche</h1>
        <img id="logo360" className="infinite_rotating_logo" src={process.env.PUBLIC_URL + 'http//irisiris99.github.io/Blanc/imgs/logo360.png'} />
      </div>
      <div>
        <h2 id="Make">Made by</h2>
      </div>
      <div>
        <h1 id="iris">iris99</h1>
      </div>
      <div id="house" >
        <h3>- - Luxury Vacation House - -</h3>
      </div>
    </div>
  )
}


export default Home;