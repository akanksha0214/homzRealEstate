import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import "./Residencies.css";
import img1 from "../../assets/r1.png";
import img2 from "../../assets/r2.png";
import img3 from "../../assets/r3.png";


const ResidentData = [
  {
    "name": "Aliva Priva",
    "price": "47,043",
    "detail": "Jakarta Garden City Street",
    "image": img1
  },
  {
    "name": "Asatti Garden",
    "price": "66,353",
    "detail": "Pahlawan Street XVII No.215",
    "image": img2
  },
  {
    "name": "Citralan Puri",
    "price": "35,853",
    "detail": "Ruko Puri Indah Residence Block A7",
    "image": img3
  },
  {
    "name": "Aliva Priva",
    "price": "47,043",
    "detail": "Jakarta Garden City Street",
    "image": img1
  },
  {
    "name": "Asatti Garden",
    "price": "66,353",
    "detail": "Pahlawan Street XVII No.215",
    "image": img2
  },
  {
    "name": "Citralan Puri",
    "price": "35,853",
    "detail": "Ruko Puri Indah Residence Block A7",
    "image": img3
  }
]
const Residencies = () => {
  return (
    <section className="r-wrapper" id="residencies">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            {ResidentData.map((resident, index) => (
              <SwiperSlide key={index}>
                <div className="swiper-slide">
                  <img src={resident.image} alt={resident.name} className="resident-image" />
                  <div className="resident-info">
                    <span className="resident-name">Name - {resident.name}</span>
                    <span className="resident-price">Price - {resident.price}</span>
                    <br/>
                    <span className="resident-detail">{resident.detail}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Residencies