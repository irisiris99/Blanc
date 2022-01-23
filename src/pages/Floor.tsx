import React, { Component, useEffect, useRef, useState } from 'react';
import Navbar from "../component/navbar";
import AnimatedPage from '../component/AnimatedPage';
const Fade = require('react-reveal/Fade');


const Floor = () => {
  return (
    <AnimatedPage>
      <div>
        <Navbar />
        <FloorContent />
      </div>
    </AnimatedPage>
  );
};

function FloorContent () {
  const entRef = useRef<HTMLDivElement>(null);
  const onEntClick = () => {
    entRef.current?.scrollIntoView({ behavior: 'smooth' });
      };
  
  const FirstRef = useRef<HTMLDivElement>(null);
  const onFirstClick = () => {
    FirstRef.current?.scrollIntoView({ behavior: 'smooth' });
      };

  const SecRef = useRef<HTMLDivElement>(null);
  const onSecClick = () => {
    SecRef.current?.scrollIntoView({ behavior: 'smooth' });
      };

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
    <div className="Floor">
      <div className="spaces">
        <h2 style={{
            transform : `translateX(${position / 5}px)` ,
          }}>All About</h2>
        <h1 style={{
            transform : `translateX(-${position / 5}px)` ,
          }}>s p a c e s</h1>
      </div>
      <div className="Floor_back">
        <p>The house consists of three floors: parking and leisure, first floor (bedroom floor), and second floor (living space and swimming pool).</p>
      </div>
      <div className="Ent_Floor">
        <div className="Ent_FloorFont">
          <ul>
            <Fade left>
              <button onClick={onEntClick}><p>ㅡENTERANCE FLOOR</p></button>
              <button onClick={onFirstClick}><p>ㅡFIRST FLOOR</p></button>
              <button onClick={onSecClick}><p>ㅡSECOUND FLOOR</p></button>
            </Fade>
          </ul>
        </div>
        <div className="Ent_FloorImg">
          <Fade right>
          <div className="floor_img_box">
            <img src='https://irisiris99.github.io/blanc/imgs/ent_floor_img1.jpg' />
          </div>
          </Fade>
          <div className="Floor_font" ref={entRef}>
            <Fade bottom>
            <div>
              <h1>Enterance Floor</h1>
            </div>
            </Fade>
            <Fade right>
            <div className="del">
              <p>Main entrance of the house.</p>
              <p>A big open space where functions like parking, cinema, bar, wine cellar, gym, sauna, hammam are mixed and put in scene with luxury materials and transparency.</p>
              <p>Constructed area: OOO m2</p>
            </div>
            </Fade>
          </div>
          <div className="Floor_img">
            <Fade>
            <img src='https://irisiris99.github.io/blanc/imgs/ent_floor_img2.jpg' />
            <img src='https://irisiris99.github.io/blanc/imgs/ent_floor_img3.jpg' />
            <img className="floor" src='https://irisiris99.github.io/blanc/imgs/ent_floor_img4.jpg' />
            <img src='https://irisiris99.github.io/blanc/imgs/ent_floor_img5.jpg' />
            </Fade>
          </div>
          <Fade>
          <img src='https://irisiris99.github.io/blanc/imgs/first_floor_img1.jpg' />
          </Fade>
          <div className="Floor_font" ref={FirstRef}>
            <div>
              <Fade bottom>
              <h1>First Floor</h1>
              </Fade>
            </div>
            <div className="del">
              <Fade right>
              <p>The private area of the house, where four master bedrooms in suite are organized around the central patio. Each master bedroom is highlight with luxury materials, furniture, decoration and all the high standard elements.</p>
              <p>Constructed area: OOO m2</p>
              </Fade>
            </div>
          </div>
          <div className="Floor_img">
            <Fade>
            <img id="floor2" src='https://irisiris99.github.io/blanc/imgs/first_floor_img2.jpg' />
            <img src='https://irisiris99.github.io/blanc/imgs/first_floor_img3.jpg' />
            <img src='https://irisiris99.github.io/blanc/imgs/first_floor_img4.jpg' />
            <img src='https://irisiris99.github.io/blanc/imgs/first_floor_img5.jpg' />
            </Fade>
          </div>
          <div className="Floor_font" ref={SecRef}>
            <div>
              <Fade bottom>
              <h1>Second Floor</h1>
              </Fade>
            </div>
            <div className="del">
              <Fade right>
              <p>The living area. With a fantastic see sight view through a twelve meter long opening, this bright space is composed by a large open kitchen, office kitchen, dining area and lounge areas.</p>
              <p>Constructed area: OOO m2</p>
              </Fade>
            </div>
          </div>
          <div className="Floor_img">
            <Fade>
            <img src='https://irisiris99.github.io/blanc/imgs/sec_floor_img2.jpg' />
            <img className="floor" src='https://irisiris99.github.io/blanc/imgs/sec_floor_img3.jpg' />
            <img src='https://irisiris99.github.io/blanc/imgs/sec_floor_img4.jpg' />
            </Fade>
          </div>
        </div>
      </div>
      <Fade bottom>
      <div className="Features">
        <div>
          <h1>High Notch Features.</h1>
        </div>
        <div className="floor_icons">
          <div>
            <img src='https://irisiris99.github.io/blanc/imgs/floor_icon1.png' />
            <p>Aerotermal system for clima and heating</p>
          </div>
          <div>
            <img src='https://irisiris99.github.io/blanc/imgs/floor_icon2.png'/>
            <p>Floor heating in all the spaces of the house</p>
            <h5>(including parking area)</h5>
          </div>
          <div>
            <img src='https://irisiris99.github.io/blanc/imgs/floor_icon3.png' />
            <p>Dali and KNX Domotic systems</p>
          </div>
        </div>
        <img src='https://irisiris99.github.io/blanc/imgs/features_img.jpg' />
      </div>
      </Fade>
    </div>
  )
}


export default Floor;