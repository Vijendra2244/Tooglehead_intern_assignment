import React, { useRef, useState } from "react";
import styles from "./CardCarousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { IoMdArrowDropright } from "react-icons/io";

export default function CardCarousel() {
  const breakpoints = {
    1321: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  };

  return (
    <div className={styles.mainContainer}>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        freeMode={true}
        pagination={{
          clickable: false,
        }}
        modules={[FreeMode]}
        breakpoints={breakpoints}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={styles.card}>
            <h1 className={styles.cardHeading}>Lorem ipsum</h1>
            <p className={styles.cardPara}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className={styles.button}>
              Know More
              <IoMdArrowDropright className={styles.arrowButton} />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <h1 className={styles.cardHeading}>Lorem ipsum</h1>
            <p className={styles.cardPara}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className={styles.button}>
              Know More
              <IoMdArrowDropright className={styles.arrowButton} />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <h1 className={styles.cardHeading}>Lorem ipsum</h1>
            <p className={styles.cardPara}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className={styles.button}>
              Know More
              <IoMdArrowDropright className={styles.arrowButton} />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <h1 className={styles.cardHeading}>Lorem ipsum</h1>
            <p className={styles.cardPara}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className={styles.button}>
              Know More
              <IoMdArrowDropright className={styles.arrowButton} />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <h1 className={styles.cardHeading}>Lorem ipsum</h1>
            <p className={styles.cardPara}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className={styles.button}>
              Know More
              <IoMdArrowDropright className={styles.arrowButton} />
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
