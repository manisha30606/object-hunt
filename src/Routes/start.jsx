// start.jsx
import React from 'react';
import logo from "../Images/logo.png";
import Front from "../assests/front";
import "../App.css"
const Start = () => {
  return (
    <section className="main">
      <div className="start_container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="start_data">
          <Front />
        </div>
      </div>
    </section>
  );
};

export default Start;
