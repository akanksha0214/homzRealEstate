import React, { useState } from 'react';
import "./Valuse.css";
import hero from "../../assets/hero-image.png";
import { questions } from './api';
import Accordian from "./Accordian";

const Value = () => {
  const [data, setData] = useState(questions);
  
  return (
    <section className="v-wrapper" id="our-value">
      <div className="paddings innerWidth flexCenter v-container">
        <div className="v-left">
          <div className="image-container">
            <img src={hero} alt="Hero" />
          </div>
        </div>

        <div className="flexColStart v-right">
          <span className="orangeText">Our Values</span>
          <span className="primaryText">Value We give to our customers</span>
          {data.map((currElem) => {
            const { id } = currElem;
            return <Accordian key={id} {...currElem} />
          })}
        </div>
      </div>
    </section>
  );
}

export default Value;
