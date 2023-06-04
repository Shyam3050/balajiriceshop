import styles from "./css/Navbar.module.css"
import {TfiMenu} from "react-icons/tfi"
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navbar}>
        <TfiMenu/>
        <div>Logo</div>
        <div></div>
      </div>
    </nav>
  )
}

export default Navbar