import React from "react";
import styles from "./NumberTicker.module.css";
import { useSpring, animated } from "react-spring";

function NumberTicker({ num }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: num,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div className={styles.number}>{number.to((num) => num.toFixed(0))}</animated.div>;
}

export default NumberTicker;
