import styles from "./ProductContainer.module.css";
import ProductCard from "./UI/ProductCard";
const ProductContainer = () => {
  return (
    <div className={styles.p_m_cont}>
      <div className={styles.p_c_top}>
        <p>Deals of the Day</p>
        <div>View All</div>
      </div>

      <div className={styles.p_cont}>
        <ProductCard />
        <ProductCard />     
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductContainer;
