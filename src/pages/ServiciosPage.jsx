import styles from "../styles/stack.module.scss";
import { ServiciosList } from "../components/ServiciosList";
import { Explorador } from "../components/Explorador";
import { useRef } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export const ServiciosPage = () => {
  const serviceSectionRef = useRef();

  const { show } = useIntersectionObserver(serviceSectionRef, "animationIn", {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
  });

  return (
    <section
      className={styles.stackContainer}
      id="servicios"
      ref={serviceSectionRef}>
      {show && (
        <>
          <article className={styles.exploradorContainer}>
            <Explorador title="Servicios" />
          </article>
          <aside className={styles.stackListContainer}>
            <ServiciosList />
          </aside>
        </>
      )}
      <div className={styles.backgroundServicios}></div>
    </section>
  );
};
