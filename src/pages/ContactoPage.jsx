import { ContactoInfo } from "../components/ContactoInfo";
import { ExploradorForm } from "../components/ExploradorForm";
import styles from "../styles/contacto.module.scss";

export const ContactoPage = () => {
  return (
    <section
      className={styles.contactoContainer}
      id="contacto">
      <article className={styles.exploradorContainer}>
        <ExploradorForm />
      </article>
      <aside className={styles.contactInfoContainer}>
        <h2 className={styles.title}>Contacto</h2>
        <ContactoInfo />
      </aside>
    </section>
  );
};
