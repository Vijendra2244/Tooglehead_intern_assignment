import React from "react";
import styles from "./Footer.module.css";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaQuora,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { FaLocationDot, FaTrainSubway } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";

function Footer() {
  return (
    <>
    <div className={styles.mainContainer}>
      <div className={styles.mainFooter}>
        <div>
          <h1 className={styles.heading}>Contact Us</h1>
          <p className={styles.contactInfo}>
            Address : Lorem ipsum dolor sit amet.
          </p>
          <p className={styles.contactInfo}>
            EmailId : Lorem ipsum dolor sit amet.
          </p>
          <p className={styles.contactInfo}>Phone No.: 123456789</p>
        </div>
        <div>
          <h1 className={styles.Followheading}>Follow Us</h1>
          <div className={styles.socialMediaIcon}>
            <FaLinkedin />
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
            <FaQuora />
          </div>
        </div>
        <div className={styles.rigth}>
          <h1 className={styles.heading}>Head Office</h1>

          <p className={styles.paraTag}>
            <FaLocationDot />
            Lorem ipsum dolor sit, amet consectetur
          </p>
          <p  className={styles.paraTag}>
            <CiClock2 />
            Lorem ipsum dolor sit amet consectetur
          </p>
          <p  className={styles.paraTag}>
            <CiClock2 />
            Lorem ipsum dolor sit amet consectetur
          </p>
          <p  className={styles.paraTag}> 
            <FaTrainSubway />
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
      </div>
    </div>
      <p className={styles.copyRight}>&copy; 2021 All Right Reserved .Privacy Policy</p>
      </>
  );
}

export default Footer;
