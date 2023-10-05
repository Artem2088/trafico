import styles from "../../styles/Form.module.css";
import arrow from "../../images/icons/arrow.svg";
import CustomButton from "../../components/CustomButton/CustomButton";

const Form = () => {
  return (
    <form className={styles.form} name="auth-form">
      <div className={styles.inputContainer}>
        <label className={styles.name}>Name</label>
        <input
          type="text"
          className={styles.inputName}
          placeholder="Your name"
        />
        <label className={styles.name}>Email address</label>
        <input
          type="text"
          className={styles.inputEmail}
          placeholder="Your email address"
        />
        <CustomButton title={"GET STARTED"} image={arrow} />
      </div>
    </form>
  );
};

export default Form;
