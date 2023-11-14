/* eslint-disable react/prop-types */
import styles from "../styles/portfolio.module.scss";
import arrow from "../assets/icons/arrow.svg";
export const PortfolioInfo = ({
  projects,
  selectedIndex,
  setSelectedIndex,
}) => {
  const prevCard = () => {
    const newIndex = (selectedIndex - 1 + projects.length) % projects.length;
    setSelectedIndex(newIndex);
  };

  const nextCard = () => {
    const newIndex = (selectedIndex + 1) % projects.length;
    setSelectedIndex(newIndex);
  };

  return (
    <aside className={styles.portfolioInfoContainer}>
      <div className={styles.infoContainer}>
        <h2 className={styles.title}>Portfolio</h2>
        <p className={styles.projectTitle}>{projects[selectedIndex].titulo}</p>
      </div>
      <div className={styles.arrowsContainer}>
        <img
          src={arrow}
          onClick={prevCard}
          alt="arrow back"
          className={styles.arrowBack}
        />
        <img
          src={arrow}
          onClick={nextCard}
          alt="arrow forward"
          className={styles.arrowForward}
        />
      </div>
      <div className={styles.linksContainer}>
        <a
          href={projects[selectedIndex].repositorio}
          target="_blank"
          rel="noreferrer">
          <button className={styles.button}>Github</button>
        </a>
        <a
          href={projects[selectedIndex].livesite}
          target="_blank"
          rel="noreferrer">
          <button className={styles.button}>Live Site</button>
        </a>
      </div>
    </aside>
  );
};
