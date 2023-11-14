import { useRef } from "react";
import { ContactoInfo } from "../components/ContactoInfo";
import { ExploradorForm } from "../components/ExploradorForm";
import styles from "../styles/contacto.module.scss";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export const ContactoPage = () => {
  const contactoSectionRef = useRef();
  const { show } = useIntersectionObserver(contactoSectionRef, "leftToRigth", {
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  });

  return (
    <section
      className={styles.contactoContainer}
      ref={contactoSectionRef}
      id="contacto">
      {show && (
        <>
          <article className={styles.exploradorContainer}>
            <ExploradorForm />
          </article>
          <aside className={styles.contactInfoContainer}>
            <h2 className={styles.title}>Contacto</h2>
            <ContactoInfo />
          </aside>
        </>
      )}
    </section>
  );
};
