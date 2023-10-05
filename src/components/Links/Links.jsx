import { useState } from "react";
import styles from "../../styles/Links.module.css";
import { useEffect } from "react";

const Links = ({ title }) => {
  const [anchor, setAnchor] = useState("");

  useEffect(() => {
    switch (title) {
      case "ABOUT":
        setAnchor("#aboutUs");
        break;
      case "HOW TO":
        setAnchor("#apply");
        break;
      case "FAQS":
        setAnchor("#FAQ");
        break;
      default:
        setAnchor("#aboutUs");
        break;
    }
  }, [title]);

  return (
    <>
      <li>
        <a href={anchor} className={styles.link}>
          {title}
        </a>
      </li>
    </>
  );
};

export default Links;
