import styles from "../styles/Home.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <div className={styles.column}>
          <h3>EVROPA KOMBI PREVOZ</h3>
          <p>Mi smo specijalisti u oblasti međunarodnog prevoza.</p>
          <p>
            Ponosni smo na kvalitet našeg rada i zadovoljstvo naših klijenata.
          </p>
          <p>Bićemo ponosni da putujete sa nama!</p>
        </div>
        <div className={styles.column}>
          <h3>KONTAKT INFORMACIJE</h3>
          <p>+38165/65-95-960</p>
          <p>
            <a href="mailto:evropakombiprevoz@gmail.com">
              evropakombiprevoz@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
