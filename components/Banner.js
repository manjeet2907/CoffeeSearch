import React from "react";
import styles from "../styles/Banner.module.css";

const Banner = ({ buttonName }) => {
  return (
    <div className={styles.banner}>
      <h1>
        <span>Coffee</span> <span>Locator</span>
      </h1>
      <p>The Best Coffee finder app for all</p>
      <button>{buttonName}</button>
    </div>
  );
};

export default Banner;
