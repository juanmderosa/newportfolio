import linkedinImg from "../assets/logos/linkedin.png";
import githubImg from "../assets/logos/github.png";
import whatsappImg from "../assets/logos/whatsapp.png";
import emailImg from "../assets/logos/email.png";
import styles from "../styles/contactoInfo.module.scss";

export const ContactoInfo = () => {
  return (
    <ul className={styles.contactInfoList}>
      <a
        href="https://www.linkedin.com/in/juanmderosa/"
        target="_blank"
        rel="noreferrer"
        className={styles.linkContacto}>
        <li className={styles.contactInfoListItem}>
          <img
            src={linkedinImg}
            alt="linkedin logo"
            className={styles.contactInfoLogo}
          />
          <p className={styles.contactInfoTitle}>Linkedin</p>
        </li>
      </a>
      <a
        href="https://github.com/juanmderosa/"
        target="_blank"
        rel="noreferrer"
        className={styles.linkContacto}>
        <li className={styles.contactInfoListItem}>
          <img
            src={githubImg}
            alt="github logo"
            className={styles.contactInfoLogo}
          />
          <p className={styles.contactInfoTitle}>Github</p>
        </li>
      </a>
      <li className={styles.contactInfoListItem}>
        <img
          src={whatsappImg}
          alt="whatsapp logo"
          className={styles.contactInfoLogo}
        />
        <p className={styles.contactInfoTitle}>+54911-5463-2571</p>
      </li>
      <li className={styles.contactInfoListItem}>
        <img
          src={emailImg}
          alt="email logo"
          className={styles.contactInfoLogo}
        />
        <p className={styles.contactInfoTitle}>
          hola@juanmderosa-developer.com
        </p>
      </li>
    </ul>
  );
};
