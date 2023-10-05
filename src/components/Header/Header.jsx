import styles from "../../styles/Header.module.css";
import logo from "../../images/icons/logo.svg";
import Links from "../Links/Links";
import { linkTitle } from "../../utils/constants";
import CustomButton from "../CustomButton/CustomButton";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <ul className={styles.linkContainer}>
        {linkTitle.map((title, index) => (
          <Links title={title} key={index} />
        ))}
      </ul>
      <CustomButton title={"CONTACT US"} />
    </header>
  );
};

export default Header;
