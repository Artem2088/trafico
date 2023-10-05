import styles from "../../styles/Main.module.css";
import mainImg from "../../images/images/bg-main.png";
import twoPeople from "../../images/images/two-people.png";
import arrow from "../../images/icons/arrow.svg";
import carMain from "../../images/images/mobel.png";
import AboutUs from "../AboutUs/AboutUs";
import Apply from "../Apply/Apply";
import FAQ from "../FAQ/FAQ";
import Awesome from "../Awesome/Awesome";
import CustomButton from "../CustomButton/CustomButton";

const Main = () => {
  return (
    <main className={styles.main}>
      <img src={mainImg} alt="main-image" className={styles.mainImage} />
      <img src={twoPeople} alt="two peoople" className={styles.twoPeople} />
      <h1 className={styles.title}>Your awesome traffic permit consultant.</h1>
      <CustomButton title={"GET STARTED"} image={arrow} />
      <img src={carMain} alt="car" className={styles.carImage} />
      <AboutUs />
      <Apply />
      <FAQ />
      <Awesome />
    </main>
  );
};

export default Main;
