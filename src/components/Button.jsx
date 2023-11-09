import styles from "../styles/button.module.scss";

// eslint-disable-next-line react/prop-types
export const Button = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};
