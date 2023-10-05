import styles from "../../styles/Question.module.css";
import plus from "../../images/icons/plus.svg";
import minus from "../../images/icons/minus.svg";
import { useState } from "react";

const Question = ({ item }) => {
  const { question, answer, id } = item;
  const [active, setIsActive] = useState(false);

  const handleClick = (e) => {
    if (e.currentTarget.id == item.id) {
      setIsActive(!active);
    }
  };

  return (
    <li className={styles.question}>
      <button
        type="button"
        className={styles.button}
        id={id}
        onClick={handleClick}
      >
        <span className={styles.span}>{question}</span>
        <img src={active ? minus : plus} alt="plus" className={styles.image} />
      </button>
      <div className={active ? styles.answer : styles.answerNone}>
        <span className={styles.spanAnswer}>{answer}</span>
      </div>
    </li>
  );
};

export default Question;
