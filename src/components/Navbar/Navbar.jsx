import styles from "./css/Navbar.module.css";
import { TfiMenu } from "react-icons/tfi";
import logo from "../../assets/balajiriceshoplogo.png";
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navbar}>
        <TfiMenu />
       <img src={logo} alt="" srcset="" />
       <p></p>
      </div>
    </nav>
  );
};

export default Navbar;
