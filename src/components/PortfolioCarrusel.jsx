/* eslint-disable react/prop-types */
import styles from "../styles/portfolioCarrusel.module.scss";

// eslint-disable-next-line react/prop-types
export const PortfolioCarrusel = ({ projects, selectedIndex }) => {
  return (
    <article className={styles.carruselContainer}>
      <img
        src={projects[selectedIndex].imagen}
        alt={projects[selectedIndex].title}
        className={styles.carruselImg}
      />
    </article>
  );
};
