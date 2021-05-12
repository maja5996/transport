import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

const Cities = () => {
  return (
    <>
      <h4 className={styles.citiesHeading}>
        Ovo su gradovi u kojima vršimo transport:
      </h4>
      <div className={styles.triListe}>
        <div className={styles.list}>
          <ul className={styles.citiesList}>
            <motion.li whileHover={{ scale: 1.1 }} className={styles.city}>
              Munchen
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className={styles.city}>
              Augsburg
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className={styles.city}>
              Ulm
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className={styles.city}>
              Stutgart
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className={styles.city}>
              Pforzheim
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className={styles.city}>
              Karlsruhe
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className={styles.city}>
              Mannheim
            </motion.li>
          </ul>
        </div>

        <div className={styles.list}>
          <ul className={styles.citiesList}>
            <motion.li whileHover={{ scale: 1.1 }} className={styles.city}>
              Kaiserslautern
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className={styles.city}>
              Frankfurt
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className={styles.city}>
              Mainz
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className={styles.city}>
              Koblenz
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className={styles.city}>
              Bonn
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className={styles.city}>
              Koln
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className={styles.city}>
              Dusseldorf
            </motion.li>
          </ul>
        </div>

        <div className={styles.list}>
          <ul className={styles.citiesList}>
            <motion.li whileHover={{ scale: 1.1 }} className={styles.city}>
              Wuppertal
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className={styles.city}>
              Duisburg
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className={styles.city}>
              Essen
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className={styles.city}>
              Bochum
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className={styles.city}>
              Dortmund
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className={styles.city}>
              Hamm
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className={styles.city}>
              Munster
            </motion.li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Cities;
