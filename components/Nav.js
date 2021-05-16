import styles from "../styles/Home.module.css";

const Nav = () => {
  return (
    <div className={styles.stickyNav}>
      <p className={styles.callInfo}>
        Pozovite nas već danas:{" "}
        <a href="tel:+38165/65-95-960">+38165/65-95-960</a>
      </p>
    </div>
  );
};

export default Nav;
