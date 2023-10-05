import styles from "../../styles/App.module.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default App;
