import React from 'react';
import "./Contact.css"
import hero from "../../assets/r3.png";
import { IoMdCall } from "react-icons/io";
import { IoMdChatboxes } from "react-icons/io";
import { MdOutlineVideoCall } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";

const Contact = () => {
  return (
    <section className="c-wrapper" id="contact">
      <div className="paddings innerWIdth flexCenter c-container">
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy way to reach us </span>
          <div className="flexColStart contactModes">
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <IoMdCall size={25} color='blue' />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText"> 0123456789</span>
                  </div>
                </div>
                <div className="flexCenter button">Call us</div>
              </div>
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdOutlineVideoCall size={25} color='blue' />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText"> 0123456789</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call</div>
              </div>
            </div>
          </div>
          <div className="flexColStart contactModes">
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <IoMdChatboxes size={25} color='blue' />
                    {/* <IoMdChatboxes /> */}
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText"> 0123456789</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat now</div>
              </div>
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <RiCustomerService2Fill size={25} color='blue' />
                    {/* <IoMdChatboxes /> */}
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Customer Service</span>
                    <span className="secondaryText"> 0123456789</span>
                  </div>
                </div>
                <div className="flexCenter button">Customer Service</div>
              </div>
            </div>
          </div>
        </div>
        <div className="c-right">
          <div className="image-container">
            <img src={hero} />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Contact