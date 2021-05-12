import styles from "../styles/Home.module.css";

const Cities = () => {
  return (
    <div className={styles.triListe}>
      <h4 className={styles.citiesHeading}>
        Ovo su gradovi u kojima vrsimo transport:
      </h4>
      <div className={styles.list}>
        <ul className={styles.citiesList}>
          <li className={styles.city}>Munchen</li>
          <li className={styles.city}>Augsburg</li>
          <li className={styles.city}>Ulm</li>
          <li className={styles.city}>Stutgart</li>
          <li className={styles.city}>Pforzheim</li>
          <li className={styles.city}>Karlsruhe</li>
          <li className={styles.city}>Mannheim</li>
        </ul>
      </div>

      <div className={styles.list}>
        <ul className={styles.citiesList}>
          <li className={styles.city}>Munchen</li>
          <li className={styles.city}>Augsburg</li>
          <li className={styles.city}>Ulm</li>
          <li className={styles.city}>Stutgart</li>
          <li className={styles.city}>Pforzheim</li>
          <li className={styles.city}>Karlsruhe</li>
          <li className={styles.city}>Mannheim</li>
        </ul>
      </div>

      <div className={styles.list}>
        <ul className={styles.citiesList}>
          <li className={styles.city}>Munchen</li>
          <li className={styles.city}>Augsburg</li>
          <li className={styles.city}>Ulm</li>
          <li className={styles.city}>Stutgart</li>
          <li className={styles.city}>Pforzheim</li>
          <li className={styles.city}>Karlsruhe</li>
          <li className={styles.city}>Mannheim</li>
        </ul>
      </div>
    </div>
  );
};

export default Cities;
