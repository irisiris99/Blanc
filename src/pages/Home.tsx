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
      backgroundImage: `url(https://irisiris99.github.io/blanc/imgs/background_1.jpg)`
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
        <h1 id="Blanche">Blanche</h1>
      </div>
      <div className="madeby">
        <h2 id="Make">Made by</h2>
        <img id="logo360" className="infinite_rotating_logo" src='https://irisiris99.github.io/blanc/imgs/logo360.png' />
      </div>
      <div>
        <h1 id="iris">iris99</h1>
      </div>
    </div>
  )
}


export default Home;