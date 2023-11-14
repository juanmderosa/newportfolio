import { HashLink } from "react-router-hash-link";
import styles from "../styles/nav.module.scss";
import { useState, useEffect, useRef } from "react";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef();

  useEffect(() => {
    document.addEventListener("click", handleCloseHeader);

    return () => {
      document.removeEventListener("click", handleCloseHeader);
    };
  }, []);

  const handleCloseHeader = (e) => {
    if (headerRef.current && !headerRef.current.contains(e.target)) {
      console.log(e.target);
      setIsOpen(false);
    }
  };

  return (
    <header
      ref={headerRef}
      className={`${styles.headerContainer} ${
        isOpen ? `${styles.headerContainerOpen}` : ""
      }`}>
      <div
        className={styles.navIconContainer}
        onClick={() => setIsOpen(!isOpen)}>
        <span
          className={`${styles.navIconLine} ${
            isOpen ? styles.navIconCloseFirst : ""
          }`}></span>
        {isOpen ? (
          <span className={styles.navIconCloseSecondLine}></span>
        ) : (
          <span
            className={`${styles.navIconLine} ${styles.navIconClose}`}></span>
        )}
        <span
          className={`${styles.navIconLine} ${
            isOpen ? styles.navIconCloseSecond : ""
          }`}></span>
      </div>
      {isOpen && (
        <nav className={styles.nav}>
          <ul className={styles.navUl}>
            <li className={styles.navLi}>
              <HashLink
                to="/#home"
                smooth>
                Inicio
              </HashLink>
            </li>
            <li className={styles.navLi}>
              <HashLink
                to="/#sobre-mi"
                smooth>
                Sobre Mi
              </HashLink>
            </li>
            <li className={styles.navLi}>
              <HashLink
                to="/#stack"
                smooth>
                Stack
              </HashLink>
            </li>
            <li className={styles.navLi}>
              <HashLink
                to="/#servicios"
                smooth>
                Servicios
              </HashLink>
            </li>
            <li className={styles.navLi}>
              <HashLink
                to="/#portlofio"
                smooth>
                Portfolio
              </HashLink>
            </li>
            <li className={styles.navLi}>
              <HashLink
                to="/#contacto"
                smooth>
                Contacto
              </HashLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
