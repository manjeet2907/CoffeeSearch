import Head from "next/head";
import Banner from "../components/Banner";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Banner buttonName={"Find Shops Near You"} />
    </div>
  );
}
