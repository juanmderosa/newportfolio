import styles from "../styles/stackList.module.scss";
const stack = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "Git / Github",
  "Bootstrap",
  "Tailwind",
  "React Router",
  "Redux",
  "Next Js",
  "SASS",
  "Wordpress",
  "Woocommerce",
];

export const StackList = () => {
  return (
    <ul className={styles.stackList}>
      {stack.map((item) => (
        <li key={item}>- {item}</li>
      ))}
    </ul>
  );
};
