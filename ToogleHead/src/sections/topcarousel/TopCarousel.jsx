import React from "react";
import styles from "./TopCarousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import firstImage from "../../images/TopCarouselOne.jpg";
import secondImage from "../../images/TopCarouselTwo.jpeg";
import thirdImage from "../../images/TopCarouselThree.jpeg";
import fourthImage from "../../images/TopCarouselFour.jpeg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import { IoMdArrowDropright } from "react-icons/io";

import "swiper/css";

export default function TopCarousel() {
  return (
    <div className={styles.mainContainer}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={styles.imageOneContainer}>
            <div className={styles.leftContainer}>
              <h1 className={styles.heading}>Lorem Ipsum</h1>
              <p className={styles.imagePara}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto provident error numquam porro, eos molestiae at
                laudantium non ratione nesciunt quam corrupti amet ipsam
                voluptates commodi officiis et
              </p>
              <button className={styles.knowButton}>
                Know More
                <IoMdArrowDropright />
              </button>
            </div>
            <div className={styles.slide}>
              <img className={styles.images} src={firstImage} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imageOneContainer}>
            <div className={styles.leftContainer}>
              <h1 className={styles.heading}>Lorem Ipsum</h1>
              <p className={styles.imagePara}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto provident error numquam porro, eos molestiae at
                laudantium non ratione nesciunt quam corrupti amet ipsam
                voluptates commodi officiis et
              </p>
              <button className={styles.knowButton}>
                Know More
                <IoMdArrowDropright />
              </button>
            </div>
            <div className={styles.slide}>
              <img className={styles.images} src={secondImage} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imageOneContainer}>
            <div className={styles.leftContainer}>
              <h1 className={styles.heading}>Lorem Ipsum</h1>
              <p className={styles.imagePara}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto provident error numquam porro, eos molestiae at
                laudantium non ratione nesciunt quam corrupti amet ipsam
                voluptates commodi officiis et
              </p>
              <button className={styles.knowButton}>
                Know More
                <IoMdArrowDropright />
              </button>
            </div>
            <div className={styles.slide}>
              <img className={styles.images} src={thirdImage} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imageOneContainer}>
            <div className={styles.leftContainer}>
              <h1 className={styles.heading}>Lorem Ipsum</h1>
              <p className={styles.imagePara}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto provident error numquam porro, eos molestiae at
                laudantium non ratione nesciunt quam corrupti amet ipsam
                voluptates commodi officiis et
              </p>
              <button className={styles.knowButton}>
                Know More
                <IoMdArrowDropright />
              </button>
            </div>
            <div className={styles.slide}>
              <img className={styles.images} src={fourthImage} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
