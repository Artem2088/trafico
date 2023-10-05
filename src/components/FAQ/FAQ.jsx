import styles from "../../styles/FAQ.module.css";
import bg from "../../images/images/rectangle.png";
import questions from "../../images/images/illustration3.png";
import Question from "../Question/Question";
import plus from "../../images/icons/plus.svg";
import { questionsArr } from "../../utils/constants";

const FAQ = () => {
  return (
    <section className={styles.faq} id="FAQ">
      <h2 className={styles.title}>FAQ</h2>
      <p className={styles.description}>
        Questions and Answers on Professional Traffic Permits:
      </p>
      <img src={bg} alt="background" className={styles.background} />
      <img src={questions} alt="questions" className={styles.questions} />
      <div className={styles.box}>
        <ul className={styles.questionslists}>
          {questionsArr.map((item, index) => (
            <Question item={item} key={index} />
          ))}
        </ul>
        <button type="button" className={styles.buttonMore}>
          <span className={styles.titleBtn}>LOAD MORE</span>
          <img src={plus} alt="plus" className={styles.plus} />
        </button>
      </div>
    </section>
  );
};

export default FAQ;
