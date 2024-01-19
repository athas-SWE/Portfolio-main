import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from 'swiper/react'; import "swiper/css";
import Resume from "../../img/ResumeHome.png";
import Employee from "../../img/Employee.png";
import Student from "../../img/Student.jpg";
import School from "../../img/download.jpeg";
import Dialysis from "../../img/images.jpeg";
import Hospital from "../../img/hospital.jpg";



const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <span>Recent Projects</span>
      <span>Portfolio</span>


      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href='https://github.com/athas-SWE/Resume_Management--sys' target="_blank" rel="noopener noreferrer">
            <img src={Resume} alt="" />
          </a>

        </SwiperSlide>

        <SwiperSlide>
          <a href='https://github.com/athas-SWE/Employee-Management-React-.Net' target="_blank" rel="noopener noreferrer">
            <img src={Employee} alt="" />
          </a>

        </SwiperSlide>

        <SwiperSlide>
          <a href='hhttps://github.com/athas-SWE/ITPM-Group-86-newttps://github.com/mohamedinfath99/online-shopping-app.git' target="_blank" rel="noopener noreferrer">
            <img src={Student} alt="" />
          </a>
        </SwiperSlide>


      </Swiper>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider">
        <SwiperSlide>
          <a href='https://github.com/athas-SWE/Web-app-Mongo' target="_blank" rel="noopener noreferrer">
            <img src={School} alt="Resume Management " />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href='https://github.com/athas-SWE/Mad-Project-' target="_blank" rel="noopener noreferrer">
            <img src={Dialysis} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://github.com/athas-SWE/itp_-HMS_LMS' target="_blank" rel="noopener noreferrer">
            <img src={Hospital} alt="" />
          </a>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Portfolio;
