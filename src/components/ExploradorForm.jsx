import styles from "../styles/exploradorPortfolio.module.scss";
import closeBtn from "../assets/icons/cerrar.png";
import { Form } from "./Form";

// eslint-disable-next-line react/prop-types
export const ExploradorForm = () => {
  return (
    <div className={styles.exploradorPortfolioMainContainer}>
      <div className={styles.navegador}>
        <div className={styles.circlesContainer}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.closeBtnContainer}>
          <img
            src={closeBtn}
            alt="close button"
            className={styles.closeBtn}
          />
        </div>
      </div>
      <Form />
    </div>
  );
};
