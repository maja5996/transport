import Head from "next/head";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Services from "../components/Services";
import Line from "../components/LineBreak";
import Cities from "../components/Cities";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Evropa Kombi Prevoz</title>
        <meta name="description" content="Evropa Kombi Prevoz" />
      </Head>
      <Nav />
      <Main />
      <Line />
      <Services />
      <Cities />
      <Footer />
    </div>
  );
}
