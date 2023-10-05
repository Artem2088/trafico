import styles from "../../styles/AboutUs.module.css";
import check from "../../images/images/illustration.png";

const AboutUs = () => {
  return (
    <section className={styles.aboutUs} id="aboutUs">
      <h2 className={styles.title}>ABOUT US</h2>
      <p className={styles.description}>
        The occupational traffic permit is one of the most important things in
        the company when carrying out freight transport. In fact, it is a
        prerequisite for doing business traffic at all.{" "}
      </p>
      <div className={styles.boxSpan}>
        <span className={styles.about}>
          How do you do when you need to obtain a commercial traffic permit for
          freight transport to your business?
        </span>
      </div>

      <img src={check} alt="check" className={styles.image} />
    </section>
  );
};

export default AboutUs;
