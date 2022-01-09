import React from "react";
import Navbar from "../component/navbar";

const Villa = () => {
  return (
    <div>
      <Navbar />
      <VillaContent />
    </div>
  );
};


function VillaContent () {
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
        <div>
          <img src='https://irisiris99.github.io/blanc/imgs/Villaimg1.jpg' />
        </div>
        <div className="house_content_font">
          <h3>The project of this house of more than 669 m2 was born from the restructuration of a house build in 1989.</h3>
          <p>After adapting the structure to the new interior’s program and the need to have a swimming pool on the main terrace of the second floor, the aesthetic and strong character of this contemporary villa take place in the antagonism of a hermetic aspect from the exterior and an oasis of light and nature in its interior.</p>
        </div>
      </div>
      <div className="house_content2">
        <img src='https://irisiris99.github.io/blanc/imgs/Villaimg2.jpg' />
      </div>
      <div className="rooms">
        <div>
          <p>Entertainment</p>
          <img src='https://irisiris99.github.io/blanc/imgs/room1.jpg' />
        </div>
        <div>
          <p>Kitchen</p>
          <img src='https://irisiris99.github.io/blanc/imgs/room2.jpg' />
        </div>
        <div>
          <p>Bed Room</p>
          <img src='https://irisiris99.github.io/blanc/imgs/room3.jpg' />
        </div>
      </div>
      <div className="rooms2">
        <div>
          <p>Fitness Room</p>
          <img src='https://irisiris99.github.io/blanc/imgs/room4.jpg' />
        </div>
        <div>
          <p>Dress Room</p>
          <img src='https://irisiris99.github.io/blanc/imgs/room5.jpg' />
        </div>
      </div>
    </div>
  )
}

export default Villa;