import styles from "../styles/stackList.module.scss";

const servicios = [
  "Desarrollo Web",
  "E-commerce",
  "Diseño Responsive",
  "Hosting y Dominios",
  "E-mail con tu dominio",
  "Mantenimiento",
];

export const ServiciosList = () => {
  return (
    <ul className={styles.stackList}>
      {servicios.map((item) => (
        <li key={item}>- {item}</li>
      ))}
    </ul>
  );
};
