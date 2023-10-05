import styles from "../../styles/Apply.module.css";
import call from "../../images/images/illustrations2.png";

const Apply = () => {
  return (
    <section className={styles.apply} id="apply">
      <img src={call} alt="call" className={styles.call} />
      <div className={styles.container}>
        <h2 className={styles.title}>How to apply</h2>
        <p className={styles.about}>
          When applying for a traffic permit, there are certain requirements
          that you must meet that are included in the examination: requirements
          for professional knowledge, solid establishment, good reputation and
          financial resources. Important to remember is to confirm your
          application for a traffic permit by the company company signer or CEO.
        </p>
      </div>
    </section>
  );
};

export default Apply;
