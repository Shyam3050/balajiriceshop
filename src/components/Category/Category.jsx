import CategoryCard from "./CategoryCard"
import styles from "./css/Category.module.css"
const Category = () => {
  return (
    <div className={styles.category}>
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </div>
  )
}

export default Category