import styles from "../../styles/Awesome.module.css";
import AwesomeItem from "../AwesomeItem/AwesomeItem";
import { users } from "../../utils/constants";
import arrow from "../../images/icons/arrow-red.svg";

const Awesome = () => {
  const handleClickLeft = (e) => {
    const container = e.currentTarget.parentNode.parentNode.childNodes[1];
    container.scrollBy(-500, 0);
  };

  const handleClickRight = (e) => {
    const container = e.currentTarget.parentNode.parentNode.childNodes[1];
    container.scrollBy(500, 0);
  };

  return (
    <section className={styles.awesome}>
      <div className={styles.box}>
        <h2 className={styles.title}>ABOUT US</h2>
        <p className={styles.description}>Out Awesome Clients</p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.buttonBox}>
          <button
            type="button"
            className={styles.arrowButton}
            onClick={handleClickLeft}
          >
            <img src={arrow} alt="arrow" className={styles.imgArrow} />
          </button>
          <button
            type="button"
            className={styles.arrowButtonLeft}
            onClick={handleClickRight}
          >
            <img src={arrow} alt="arrow" className={styles.imgArrowRight} />
          </button>
        </div>
        <ul className={styles.awesomeLists}>
          {users.map((user, index) => (
            <AwesomeItem user={user} key={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Awesome;
