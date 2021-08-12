import styles from "../styles/home.module.scss";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ignews</title>
      </Head>
      <h1 className={styles.title}> Testando</h1>
    </>
  );
}
