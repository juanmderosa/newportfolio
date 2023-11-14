import sytles from "../styles/footer.module.scss";

export const Footer = () => {
  return (
    <footer className={sytles.footer}>
      <p className={sytles.footerText}>
        Desarrollado por{" "}
        <span className={sytles.footerStrong}>Juan Martín De Rosa</span> - 2023
        - Todos los derechos reservados
      </p>
    </footer>
  );
};
