import React from "react";
import Navbar from "../component/navbar";


const Floor = () => {
  return (
    <div>
      <Navbar />
      <FloorContent />
    </div>
  );
};

function FloorContent () {
  return (
    <div className="Floor">
      <div className="Floor_back" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/imgs/background_2.jpg'})`
    }}>
        <p>The house consists of three floors: parking and leisure, first floor (bedroom floor), and second floor (living space and swimming pool).</p>
      </div>
      <div className="Ent_Floor">
        <div className="Ent_FloorFont">
          <ul>
            <li><a href="#">── ENTRANCE FLOOR</a></li>
            <li><a href="#">── FIRST FLOOR</a></li>
            <li><a href="#">── SECOUND FLOOR</a></li>
          </ul>
        </div>
        <div className="Ent_FloorImg"> 
          <div className="floor_img_box">
            <img src={process.env.PUBLIC_URL + '/imgs/ent_floor_img1.jpg'} />
          </div>
          <div className="Floor_font">
            <div>
              <h1>Enterance Floor</h1>
            </div>
            <div>
              <p>Main entrance of the house.</p>
              <p>A big open space where functions like parking, cinema, bar, wine cellar, gym, sauna, hammam are mixed and put in scene with luxury materials and transparency.</p>
              <p>Constructed area: 255 m2</p>
            </div>
          </div>
          <div className="Floor_img">
            <img src={process.env.PUBLIC_URL + '/imgs/ent_floor_img2.jpg'} />
            <img src={process.env.PUBLIC_URL + '/imgs/ent_floor_img3.jpg'} />
            <img className="floor" src={process.env.PUBLIC_URL + '/imgs/ent_floor_img4.jpg'} />
            <img src={process.env.PUBLIC_URL + '/imgs/ent_floor_img5.jpg'} />
          </div>
          <img src={process.env.PUBLIC_URL + '/imgs/first_floor_img1.jpg'} />
          <div className="Floor_font">
            <div>
              <h1>First Floor</h1>
            </div>
            <div>
              <p>The private area of the house, where four master bedrooms in suite are organized around the central patio. Each master bedroom is highlight with luxury materials, furniture, decoration and all the high standard elements.</p>
              <p>Constructed area: 239.26 m2</p>
            </div>
          </div>
          <div className="Floor_img">
            <img id="floor2"src={process.env.PUBLIC_URL + '/imgs/first_floor_img2.jpg'} />
            <img src={process.env.PUBLIC_URL + '/imgs/first_floor_img3.jpg'} />
            <img src={process.env.PUBLIC_URL + '/imgs/first_floor_img4.jpg'} />
            <img src={process.env.PUBLIC_URL + '/imgs/first_floor_img5.jpg'} />
          </div>
          <div className="Floor_font">
            <div>
              <h1>Second Floor</h1>
            </div>
            <div>
              <p>The living area. With a fantastic see sight view through a twelve meter long opening, this bright space is composed by a large open kitchen, office kitchen, dining area and lounge areas.</p>
              <p>Constructed area: 156.60 m2</p>
            </div>
          </div>
          <div className="Floor_img">
            <img src={process.env.PUBLIC_URL + '/imgs/sec_floor_img2.jpg'} />
            <img className="floor" src={process.env.PUBLIC_URL + '/imgs/sec_floor_img3.jpg'} />
            <img src={process.env.PUBLIC_URL + '/imgs/sec_floor_img4.jpg'} />
          </div>
        </div>
      </div>
      <div className="Features">
        <div>
          <h1>High Notch Features.</h1>
        </div>
        <div className="floor_icons">
          <div>
            <img src={process.env.PUBLIC_URL + '/imgs/floor_icon1.png'} />
            <p>Aerotermal system for clima and heating</p>
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + '/imgs/floor_icon2.png'} />
            <p>Floor heating in all the spaces of the house</p>
            <h5>(including parking area)</h5>
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + '/imgs/floor_icon3.png'} />
            <p>Dali and KNX Domotic systems</p>
          </div>
        </div>
        <img src={process.env.PUBLIC_URL + '/imgs/features_img.jpg'} />
      </div>
    </div>
  )
}


export default Floor;