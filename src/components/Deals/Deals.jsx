import styles from "./Deals.module.css";
import unity from "../../assets/unity.jpg";
const Deals = () => {
  return (
    <div className={styles.d_c}>
      <h3>Our Brands</h3>
      <div className={styles.b_c}>
        <div className={styles.b_i_c}>
          <img src={unity} alt="" />
        </div>
        <div className={styles.b_i_c}>
          <img src={unity} alt="" />
        </div>
        <div className={styles.b_i_c}>
          <img src={unity} alt="" />
        </div>
        <div className={styles.b_i_c}>
          <img src={unity} alt="" />
        </div>
        <div className={styles.b_i_c}>
          <img src={unity} alt="" />
        </div>
        <div className={styles.b_i_c}>
          <img src={unity} alt="" />
        </div>
        <div className={styles.b_i_c}>
          <img src={unity} alt="" />
        </div><div className={styles.b_i_c}>
          <img src={unity} alt="" />
        </div><div className={styles.b_i_c}>
          <img src={unity} alt="" />
        </div><div className={styles.b_i_c}>
          <img src={unity} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Deals;
