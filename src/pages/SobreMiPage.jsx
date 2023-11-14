import { useRef } from "react";
import { Button } from "../components/Button";
import { Explorador } from "../components/Explorador";
import styles from "../styles/sobremi.module.scss";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export const SobreMiPage = () => {
  const sobreMiSectionRef = useRef();
  const { show } = useIntersectionObserver(sobreMiSectionRef, "rithToLeft", {
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  });

  return (
    <section
      className={styles.sobreMiContainer}
      id="sobre-mi"
      ref={sobreMiSectionRef}>
      {show && (
        <>
          <article className={styles.exploradorContainer}>
            <Explorador title="Sobre Mi" />
            <a
              href="/juanmderosaCV.pdf"
              download="Juan Martín De Rosa - Desarrollador Frontend - CV"
              target="_blank">
              <Button text="Descargá mi CV" />
            </a>
          </article>
          <aside className={styles.sobreMiTextContainer}>
            <p>
              Soy un desarrollador Web Front end Junior, cuento con experiencia
              de 10 años en E-Commerce y poseo habilidades en comunicación y
              marketing. Mi interés por la programación surgió de mi necesidad
              de comunicar y crear soluciones tangibles.
            </p>
            <p>
              Soy una persona creativa, curiosa y orientada a resultados. Me
              encanta enfrentar nuevos desafíos y aprender de forma continua
              para mejorar mis habilidades.{" "}
            </p>
            <p>
              Estoy comprometido a ofrecer soluciones innovadoras y efectivas
              para los clientes, poniendo énfasis en la calidad, el trabajo en
              equipo y la mejora continua para seguir creciendo y mejorando como
              profesional, formando parte de un equipo de desarrollo web.
            </p>
          </aside>
        </>
      )}
    </section>
  );
};
