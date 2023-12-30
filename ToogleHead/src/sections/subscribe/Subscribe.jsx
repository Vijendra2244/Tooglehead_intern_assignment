import React from "react";
import styles from "./Subscribe.module.css";
import mobileImage from "../../images/MobileImage.svg";
import { IoMdArrowDropright } from "react-icons/io";

function Subscribe() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <h1 className={styles.heading}>Subscribe</h1>
        <p className={styles.paraSubscribe}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eaque
          amet recusandae porro a voluptates alias necessitatibus architecto.
        </p>
        <div className={styles.inputBtn}>
          <input
            className={styles.emailInput}
            type="text"
            placeholder="Enter your email address"
          />
          <button className={styles.subscribeButton}>
            <span className={styles.Subscribe}>Subscribe Now</span>
            <IoMdArrowDropright />
          </button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={mobileImage} alt="mobile" />
      </div>
    </div>
  );
}

export default Subscribe;
