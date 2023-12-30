import React from "react";
import styles from "./Upcoming.module.css";
import Calendar from "../../components/calendar/Calendar";
import { LuCalendarClock } from "react-icons/lu";

function Upcoming() {
  return (
    <div className={styles.upcomingCalendar}>
      <div className={styles.upComing}>
        <div className={styles.cardUpcoming}>
          <h1 className={styles.heading}>Upcoming Examinations</h1>
          <p className={styles.paraTag}>
            Enquite about the examination & register for the exams
          </p>
        </div>
        
      </div>
      <Calendar
        calendar={<LuCalendarClock />}
        date={"02 October 2014"}
        text={"Level 1 exam"}
      />
      <Calendar
        calendar={<LuCalendarClock />}
        date={"Nov-Dec 2016"}
        text={`Level 2 Lorem Ipsum `}
      />
      <Calendar
        calendar={<LuCalendarClock />}
        date={"Ongoing this year"}
        text={"Level 3 (Grad)"}
      />
    </div>
  );
}

export default Upcoming;
