import styles from "../styles/stack.module.scss";
import { Explorador } from "../components/Explorador";
import { StackList } from "../components/StackList";

export const StackPage = () => {
  return (
    <section
      className={styles.stackContainer}
      id="stack">
      <article className={styles.exploradorContainer}>
        <Explorador title="Stack" />
      </article>
      <aside className={styles.stackListContainer}>
        <StackList />
      </aside>
    </section>
  );
};
