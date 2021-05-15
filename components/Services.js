import styles from "../styles/Home.module.css";
import Image from "next/image";

const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles.service}>
        <div className={styles.text}>Prevoz putnika</div>
        <div className={styles.description}>
          Želite da Vaše putovanje započne sa praga Vaše kuće ili ispred vrata
          Vaše zgrade u onoliko sati u koliko Vama odgovara? Želite da napravite
          svoj plan putovanja?
        </div>
        <div className={styles.imagePosition}>
          <Image
            src="/van.jpg"
            width={180}
            height={180}
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.service}>
        <div className={styles.text}>Prevoz paket</div>
        <div className={styles.description}>
          Prevoz paketa i robe kombijem Vam može ponuditi sve prednosti
          profesionalnog prevoza pošiljki i još više od toga. Mi Vam nudimo brz
          i bezbedan prevoz Vaših paketa, pisama i pošiljki.
        </div>
        <div className={styles.imagePosition}>
          <Image
            src="/paketi.jpg"
            width={180}
            height={180}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
