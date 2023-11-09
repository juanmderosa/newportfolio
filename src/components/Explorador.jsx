import styles from "../styles/explorador.module.scss";
import closeBtn from "../assets/icons/cerrar.png";

// eslint-disable-next-line react/prop-types
export const Explorador = ({ title }) => {
  return (
    <div className={styles.exploradorMainContainer}>
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
      <h2 className={styles.exploradorTitle}>{title}</h2>
    </div>
  );
};
