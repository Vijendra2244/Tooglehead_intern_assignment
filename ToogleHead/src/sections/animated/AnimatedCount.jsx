import React from "react";
import styles from "./AnimatedCount.module.css";
import NumberTicker from "../../components/numberAnimated/NumberTicker";

function AnimatedCount() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.Container}>
        <p className={styles.loremIpsumFirst}>Lorem ipsum</p>
        <h1 className={styles.tickerHeading}>
          <NumberTicker num={123} />
        </h1>
        <p className={styles.secondLorem}>Lorem ipsum</p>
        <p className={styles.loremParagraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quidem
          architecto suscipit quia animi quibusdam saepe laboriosam dolore rem
          fugiat?
        </p>
      </div>
      <div className={styles.Container}>
        <p className={styles.loremIpsumFirst}>Lorem ipsum</p>
        <h1 className={styles.tickerHeading}>
          <NumberTicker num={12} />
        </h1>
        <p className={styles.secondLorem}>Lorem ipsum</p>
        <p className={styles.loremParagraph}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
          corrupti beatae, eius pariatur laudantium magni, tempore rerum
          eligendi sit fuga voluptas recusandae iusto quisquam enim incidunt
          nisi. Culpa, odit impedit!
        </p>
      </div>
      <div className={styles.Container}>
        <p className={styles.loremIpsumFirst}>Lorem ipsum</p>
        <h1 className={styles.tickerHeading}>
          <NumberTicker num={12} />
        </h1>
        <p className={styles.secondLorem}>Lorem ipsum</p>
        <p className={styles.loremParagraph}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
          doloribus nam odio molestias error expedita similique ex, aperiam
          illum corrupti libero, dolor veritatis! Corporis, cumque!
        </p>
      </div>
      <div className={styles.Container}>
        <p className={styles.loremIpsumFirst}>Lorem ipsum</p>
        <h1 className={styles.tickerHeading}>
          <NumberTicker num={123} />
        </h1>
        <p className={styles.secondLorem}>Lorem ipsum</p>
        <p className={styles.loremParagraph}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In veritatis
          deleniti aut dolores at libero.
        </p>
      </div>
    </div>
  );
}

export default AnimatedCount;
