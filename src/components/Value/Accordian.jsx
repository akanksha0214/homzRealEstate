import React, { useState } from 'react';
import "./Valuse.css";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Accordian = ({ question, answer, icon }) => {
    const [show, setShow] = useState(false);
    return (
        <div className="accordion-container">
            <div className="accordion-item">
                <div className="accordion-header" onClick={() => setShow(!show)}>
                    <span className="accordion-icon">{icon}</span>
                    <h4 className="accordion-question">{question}</h4>
                    <span className="accordion-toggle">{show ? '-' : <MdOutlineArrowDropDown />}</span>
                </div>
                <div className={`accordion-answer ${show ? "show" : ""}`}>
                    {answer}
                </div>
            </div>
        </div>
    );
}

export default Accordian;
