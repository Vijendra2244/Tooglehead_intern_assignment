import React, { useContext, useState } from "react";
import styles from "./NavbarList.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";


function NavbarList() {
  
  return (
    <ul className={styles.ulList}>
      <li className={styles.liList}>
        Qualification
        <RiArrowDropDownLine className={styles.dropDownIcon} />
      </li>
      <li className={styles.liList}>
        Oraganization
        <RiArrowDropDownLine className={styles.dropDownIcon} />
      </li>
      <li className={styles.liList}>
        Research
        <RiArrowDropDownLine className={styles.dropDownIcon} />
      </li>
      <li className={styles.liList}>
        Lorem
        <RiArrowDropDownLine className={styles.dropDownIcon} />
      </li>
      <li className={styles.liList}>
        Lorem
        <RiArrowDropDownLine className={styles.dropDownIcon} />
      </li>
      <li className={styles.liList}>
        <IoSearchSharp />
      </li>
    </ul>
  );
}

export default NavbarList;
