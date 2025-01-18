import React from 'react';
import logo from "../../assets/homeicon.png";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <div className="flexColStart f-left">
          <img src={logo} width={40} />
          <span className="secondaryText">Our vision is to find all people<br />
            the best place to live for them.</span>
        </div>
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145,Plaza Point</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer