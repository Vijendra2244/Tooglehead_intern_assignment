import React from "react";
import styles from "./Calendar.module.css";

function Calendar({ calendar, date, text }) {
  return (
    <div className={styles.calendarContainer}>
      <p className={styles.calendar}>{calendar}</p>
      <div>
        <p className={styles.date}>{date}</p>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}

export default Calendar;
