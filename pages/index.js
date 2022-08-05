import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Store Loator</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.main}>
        <Banner buttonName={"Find Shops Near You"} />
        <div className={styles.heroImage}>
          <Image
            src='/static/hero-image.png'
            alt='heroImage'
            width={700}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
