import React from "react";
import styles from "./TopCarousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import headImage from "../../images/toggleHeadImg.png";
import headImage1 from "../../images/toggleHeadImg2 (1).png";
import headImage2 from "../../images/toggleHeadImg2 (2).png";
import headImage3 from "../../images/toggleHeadImg2 (3).png";
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
              <img className={styles.images} src={headImage} alt="" />
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
              <img className={styles.images} src={headImage1} alt="" />
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
              <img className={styles.images} src={headImage2} alt="" />
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
              <img className={styles.images} src={headImage3} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
