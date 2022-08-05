import React from "react";
import styles from "../styles/Banner.module.css";

const Banner = ({ buttonName }) => {
  const onClickHandler = () => {
    console.log("button Clicked");
  };
  return (
    <div className={styles.banner}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee</span>
        <span className={styles.title2}>Locator</span>
      </h1>
      <p className={styles.subTitle}>The Best Coffee finder app for all</p>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={onClickHandler}>
          {buttonName}
        </button>
      </div>
    </div>
  );
};

export default Banner;
