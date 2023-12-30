import React from "react";
import styles from "./Button.module.css"

function Button({ btnText }) {
  return (
    <div>
      <button className={styles.button}>{btnText}</button>
    </div>
  );
}

export default Button;
