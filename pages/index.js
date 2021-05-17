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
        <meta name="description" content="Munchen" />
        <meta name="description" content="Augsburg" />
        <meta name="description" content="Ulm" />
        <meta name="description" content="Stutgart" />
        <meta name="description" content="Pforzheim" />
        <meta name="description" content="Karlsruhe" />
        <meta name="description" content="Mannheim" />
        <meta name="description" content="Kaiserslautern" />
        <meta name="description" content="Frankfurt" />
        <meta name="description" content="Mainz" />
        <meta name="description" content="Koblenz" />
        <meta name="description" content="Bonn" />
        <meta name="description" content="Koln" />
        <meta name="description" content="Dusseldorf" />
        <meta name="description" content="Wuppertal" />
        <meta name="description" content="Duisburg" />
        <meta name="description" content="Essen" />
        <meta name="description" content="Bochum" />
        <meta name="description" content="Dortmund" />
        <meta name="description" content="Hamm" />
        <meta name="description" content="Munster" />
        <meta name="description" content="Prevoz u Nemačku"></meta>
        <meta name="description" content="Transport putnika u Nemačku" />
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
