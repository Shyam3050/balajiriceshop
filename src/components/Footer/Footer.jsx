import styles from "./css/Footer.module.css";
const Footer = () => {
  return (
    <div>
      <div className={styles.footer}>
        <h2>Contact us:</h2>
        <h3>Ph: 9668221451</h3>
        <h3>Ph: 9040728710</h3>
        <p>MD street (mojhi dera sahi)</p>
        <p>Patrapur pin: 761004</p>
      </div>
      <div className={styles.bottomFooter}>
        Devloped by:{" "}
        <a href="https://iamshyam.netlify.app" target="_blank">
          shyam
        </a>
      </div>
    </div>
  );
};

export default Footer;
