import styles from "../../styles/Footer.module.css";
import Form from "../Form/Form";
import carFooter from "../../images/images/Group 35.png";
import logo from "../../images/icons/logo.svg";
import facebook from "../../images/icons/f-book.svg";
import twitter from "../../images/icons/twit.svg";
import instagram from "../../images/icons/inst.svg";
import { linkTitle } from "../../utils/constants";
import Links from "../Links/Links";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.upperBox}>
        <img src={carFooter} alt="car" className={styles.imageCar} />
        <div className={styles.spanBox}>
          <span className={styles.spanManagment}>
            We provide traffic management consultants so you get started
            quickly, contact us for a quote today!
          </span>
        </div>
        <Form />
      </div>
      <div className={styles.subFooterBox}>
        <img src={logo} alt="logo-footer" className={styles.footerLogo} />
        <ul className={styles.containerLink}>
          {linkTitle.map((title, index) => (
            <Links title={title} key={index} />
          ))}
        </ul>
      </div>
      <div className={styles.containerSocial}>
        <span className={styles.copyright}>Copyright @ 2019</span>
        <ul className={styles.socials}>
          <li>
            <a href="https://en.wikipedia.org/wiki/Facebook" target="_blank" rel="noreferrer">
              <img src={facebook} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Twitter" target="_blank" rel="noreferrer">
              <img src={twitter} alt="twitter" />
            </a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Instagram" target="_blank" rel="noreferrer">
              <img src={instagram} alt="instagram" />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.bg}></div>
    </footer>
  );
};

export default Footer;
