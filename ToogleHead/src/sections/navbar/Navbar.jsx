import React, { useContext, useState } from "react";
import styles from "./Navbar.module.css";
import NavbarList from "../../components/navbarList/NavbarList";
import Button from "../../components/Button/Button";
import { MdMenu } from "react-icons/md";
import { MenuContext } from "../../context/Context";
import DropDown from "../../components/dropdown/DropDown";
import { ImCross } from "react-icons/im";

function Navbar() {
  const { menu, setMenu } = useContext(MenuContext);
  const menuButton = () => {
    setMenu(!menu);
  };
  return (
    <nav className={styles.navbarContainer}>
      <h1 className={styles.logo}>LOGO</h1>
      {menu ? <DropDown /> : <NavbarList />}
      <Button btnText={"Enrolment"} />
      {menu ? (
        <ImCross onClick={menuButton} className={styles.menuBtn} />
      ) : (
        <MdMenu onClick={menuButton} className={styles.menuBtn} />
      )}
    </nav>
  );
}

export default Navbar;
