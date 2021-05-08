import styles from "../styles/Home.module.css";

const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles.service}>
        <h4>Prevoz putnika</h4>
      </div>

      <div className={styles.service}>
        <h4>Prevoz paketa</h4>
      </div>

      <div className={styles.service}>
        <h4>Selidbe</h4>
      </div>

      <div className={styles.service}>
        <h4>Prevoz automobila</h4>
      </div>
    </div>
  );
};

export default Services;
