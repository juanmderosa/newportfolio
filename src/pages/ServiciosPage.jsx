import styles from "../styles/stack.module.scss";
import { ServiciosList } from "../components/ServiciosList";
import { Explorador } from "../components/Explorador";

export const ServiciosPage = () => {
  return (
    <section className={styles.stackContainer}>
      <article className={styles.exploradorContainer}>
        <Explorador title="Servicios" />
      </article>
      <aside className={styles.stackListContainer}>
        <ServiciosList />
      </aside>
    </section>
  );
};
