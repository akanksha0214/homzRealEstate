import React from 'react';
import hero from "../../assets/hero-image.png";
import { FaLocationDot } from "react-icons/fa6";
import "./Home.css";
import CountUp from "react-countup";

const Home = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle" />
                        <h1> Dream Dwellings: <br /> Find Your Perfect Home</h1>
                    </div>
                    <div className="flexColStart hero-des">
                        <span className="secondaryText">Discover homes that match your dreams and lifestyle effortlessly</span>
                    </div>
                    <div className=" search-bar">
                        <FaLocationDot color="var(--blue)" />
                        <input type="text" />
                        <button className='button'>Search</button>
                    </div>
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={1000} end={5000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Premium Customers</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={5000} end={9000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Happy Customers</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={3000} end={8000} duration={4} />
                                <span className="secondaryText">+</span>
                            </span>
                            <span className="secondaryText">Partners </span>
                        </div>
                    </div>
                </div>

                <div className="hero-right">
                    <div className="image-container">
                        <img src={hero} alt="hero" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home