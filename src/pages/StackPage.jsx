import styles from "../styles/stack.module.scss";
import { Explorador } from "../components/Explorador";
import { StackList } from "../components/StackList";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useRef } from "react";

export const StackPage = () => {
  const stackSectionRef = useRef();

  const { show } = useIntersectionObserver(
    stackSectionRef,
    "scale-in-ver-center",
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.7,
    }
  );

  return (
    <section
      className={styles.stackContainer}
      id="stack"
      ref={stackSectionRef}>
      {show && (
        <>
          <article className={styles.exploradorContainer}>
            <Explorador title="Stack" />
          </article>
          <aside className={styles.stackListContainer}>
            <StackList />
          </aside>
        </>
      )}
    </section>
  );
};
