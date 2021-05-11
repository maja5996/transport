import styles from "../styles/Home.module.css";

const Cities = () => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.citiesHeading}>
        Transport u sledeće gradove Nemačke:
      </h4>
      <ul className={styles.citiesList}>
        <li className={styles.city}>Berlin</li>
        <li className={styles.city}>Minhen</li>
        <br className={styles.breakCity} />
        <li className={styles.city}>Hamburg</li>
        <li className={styles.city}>Frankfurt</li>
        <br className={styles.breakCity} />
        <li className={styles.city}>Majnhajm</li>
        <li className={styles.city}>Stutgard</li>
      </ul>
    </div>
  );
};

export default Cities;
