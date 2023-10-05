import styles from "../../styles/CustomButton.module.css";

const CustomButton = ({ title, image }) => {
  return (
    <button type="button" className={styles.mainButton}>
      <span className={styles.mainButtonSpan}>{title}</span>
      {image ? (
        <img src={image} alt="arrow" className={styles.arrowMain} />
      ) : (
        ""
      )}
    </button>
  );
};

export default CustomButton;
