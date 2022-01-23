import React, { Component, useEffect, useState } from 'react';
import Navbar from "../component/navbar";
import AnimatedPage from '../component/AnimatedPage';
const Fade = require('react-reveal/Fade');

const Villa = () => {
  return (
    <AnimatedPage>
      <div>
        <Navbar />
        <VillaContent />
      </div>
    </AnimatedPage>
  );
};


function VillaContent () {
  const [position, setPosition] = useState(0);
	function onScroll() {
		setPosition(window.scrollY);
	}
	useEffect(() => {
		window.addEventListener("scroll", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);
  return (
    <div className="Villa">
      <h1>LUXURY VACATION HOUSE</h1>
      <div className="sublist">
        <p>ENTERTAINMENT</p>
        <p>KITCHEN</p>
        <p>BED ROOM</p>
        <p>DRESS ROOM</p>
        <p>FITNESS</p>
        <p>TERAS</p>
        <p>SPA</p>
      </div>
      <div className="house_content">
        <div className="Villaimg" style={{
          backgroundPositionY: position / 10,
        }}>
          <img src='https://irisiris99.github.io/blanc/imgs/Villaimg1.jpg' / >
        </div>
        <div className="house_content_font">
          <Fade>
            <h3>It's roughly where the contents of when this building was built will be included.</h3>
            <p>It roughly contains the concept and design of this building and the explanation of the swimming pool and terrace on the second floor It roughly contains the concept and design of this building and the explanation of the swimming pool and terrace on the second floor.</p>
          </Fade>
        </div>
      </div>
      <Fade Bottom>
        <div className="house_content2" style={{
            backgroundPositionY: position / 6,
          }}>
          <img src='https://irisiris99.github.io/blanc/imgs/Villaimg2.jpg' />
        </div>
      </Fade>
        <div className="metro" style={{
            backgroundPositionX: position / -3,
          }}>
          <Fade left>
          <h1>Planteria Style</h1>
          </Fade>
          <Fade right>
          <h1> luxury house.</h1>
          </Fade>
        </div>
      <Fade bottom>
        <div className="full_back">
          <img src='https://irisiris99.github.io/blanc/imgs/background_4.jpg' />
        </div>
        <div className="full_back_font">
          <p>Few windows seen from the street because of the impact of the swimming pool in the whole house’s layout. This particular programmatic need is one of the starting points of architectural concept of the house, keeping like this all the mystery of what is happening inside.</p>
        </div>
        <Fade right>
          <div className="full_back2">

          </div>
        </Fade>
        <div className="full_back3and4">
          <Fade left>
            <div className="full_back3">

            </div>
          </Fade>
          <Fade right>
            <div className="full_back4">

            </div>
          </Fade>
        </div>
      </Fade>
        <div className="rooms">
          <Fade left>
            <div>
              <div>
                <p>Entertainment</p>
              </div>
              <div className="hidden_box">
                <img src='https://irisiris99.github.io/blanc/imgs/room1.jpg' />
              </div>
            </div>
          </Fade>
          <Fade right>
            <div>
              <div>
                <p>Kitchen</p>
              </div>
              <div className="hidden_box">
                <img src='https://irisiris99.github.io/blanc/imgs/room2.jpg' />
              </div>
            </div>
            <div>
              <div>
                <p>Bed Room</p>
              </div>
              <div className="hidden_box">
                <img src='https://irisiris99.github.io/blanc/imgs/room3.jpg' />
              </div>
            </div>
          </Fade>
        </div>
        <div className="rooms2">
            <div>
              <div>
                <p>Fitness Room</p>
              </div>
              <div className="hidden_box">
                <Fade left>
                <img src='https://irisiris99.github.io/blanc/imgs/room4.jpg' />
                </Fade>
              </div>
            </div>
            <div>
              <div>
                <p>Dress Room</p>
              </div>
              <div className="hidden_box">
                <Fade right>
                <img src='https://irisiris99.github.io/blanc/imgs/room5.jpg' />
                </Fade>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Villa;