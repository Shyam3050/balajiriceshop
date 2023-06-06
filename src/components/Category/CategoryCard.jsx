import styles from "./css/CategoryCard.module.css";
import cat from "../../assets/cat.jpg";
import ViewAllButton from "../UI/ViewAllButton";
const CategoryCard = () => {
  return (
    <div className={styles.c_c}>
      <div className={styles.img_c}>
        <img srcSet={cat} alt="" />
      </div>
      <h4>Basmati Rice</h4>
      <ViewAllButton/>
    </div>
  );
};

export default CategoryCard;
