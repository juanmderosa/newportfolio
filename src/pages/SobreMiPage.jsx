import { Explorador } from "../components/Explorador";
import styles from "../styles/sobremi.module.scss";
export const SobreMiPage = () => {
  return (
    <section className={styles.sobreMiContainer}>
      <article className={styles.exploradorContainer}>
        <Explorador title="Sobre Mi" />
      </article>
      <aside className={styles.sobreMiTextContainer}>
        <p>
          Soy un desarrollador Web Front end Junior, cuento con experiencia de
          10 años en E-Commerce y poseo habilidades en comunicación y marketing.
          Mi interés por la programación surgió de mi necesidad de comunicar y
          crear soluciones tangibles.
        </p>
        <p>
          Soy una persona creativa, curiosa y orientada a resultados. Me encanta
          enfrentar nuevos desafíos y aprender de forma continua para mejorar
          mis habilidades.{" "}
        </p>
        <p>
          Estoy comprometido a ofrecer soluciones innovadoras y efectivas para
          los clientes, poniendo énfasis en la calidad, el trabajo en equipo y
          la mejora continua para seguir creciendo y mejorando como profesional,
          formando parte de un equipo de desarrollo web.
        </p>
      </aside>
    </section>
  );
};
