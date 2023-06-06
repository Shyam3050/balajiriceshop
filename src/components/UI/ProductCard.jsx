import styles from "./css/ProductCard.module.css";
import basmati from "../../assets/basmati.jpg";
import ViewAllButton from "./ViewAllButton";
const ProductCard = () => {
  return (
    <div className={styles.productCard}>
      <div className={styles.img_container}>
        <img src={basmati} alt="" />
      </div>
      <p className={styles.title}>Dabar super Basmati rice</p>
      <p>25kg</p>
      <p className={styles.price}> ₹750 </p>
      <ViewAllButton/>
    </div>
  );
};

export default ProductCard;
