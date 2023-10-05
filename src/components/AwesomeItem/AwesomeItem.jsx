import styles from "../../styles/AwesomeItem.module.css";

const AwesomeItem = ({ user }) => {
  const { text, avatar, name } = user;

  return (
    <li className={styles.awesomeItem}>
      <p className={styles.about}>{text}</p>
      <div className={styles.box}>
        <img src={avatar} alt="avatar" className={styles.avatar} />
        <span className={styles.name}>{name}</span>
      </div>
    </li>
  );
};

export default AwesomeItem;
