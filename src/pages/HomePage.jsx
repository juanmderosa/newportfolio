import { HashLink } from "react-router-hash-link";
import { Button } from "../components/Button";
import styles from "../styles/homePage.module.scss";

export const HomePage = () => {
  return (
    <main
      className={`${styles.mainContainer}`}
      id="home">
      <h1 className={styles.mainTitle}>JUAN MARTÍN DE ROSA</h1>
      <p className={styles.mainSubtitle}>Desarrollador Front end</p>
      <span className={styles.btnContainer}>
        <HashLink
          to="/#contacto"
          smooth>
          <Button text="Enviame un mensaje" />
        </HashLink>
      </span>
      <div className={styles.backgroundImgageHomePage}></div>
      <div className={styles.backgroundImgageHomePage2}></div>
      <div className={styles.backgroundImgageHomePage3}></div>
    </main>
  );
};
