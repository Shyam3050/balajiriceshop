// import React from "react";
import styles from "./css/TopNavbar.module.css";
import { IoIosCall } from "react-icons/io";
const TopNavbar = () => {
  return (
    <div className={styles.topnavbar}>
      <p>Mojhi Dera Sahi, PATRAPUR</p>
      <p className={styles.num}>
        <IoIosCall />
        9668221451
      </p>
    </div>
  );
};

export default TopNavbar;
