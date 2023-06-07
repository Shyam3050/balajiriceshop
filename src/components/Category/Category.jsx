import CategoryCard from "./CategoryCard"
import styles from "./css/Category.module.css"
const Category = () => {
  return (
    <div>
    <h4>Shop by Category</h4>
    <div className={styles.category}>
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </div>
    </div>
  )
}

export default Category