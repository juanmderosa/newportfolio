import { ExploradorPortfolio } from "../components/ExploradorPortfolio";
import styles from "../styles/portfolio.module.scss";
import adviceGenerator from "../assets/screenshots/screenshot-advice-generator.png";
import ageCalulator from "../assets/screenshots/screenshot-age-calculator.png";
import commingSoon from "../assets/screenshots/screenshot-base-apparel-desktop.png";
import expensesChart from "../assets/screenshots/screenshot-expenses-chart.png";
import faqAccordion from "../assets/screenshots/Screenshot-faq-accordion-card-desktop.png";
import ratingComponent from "../assets/screenshots/screenshot-interactive-rating-component.png";
import introComponent from "../assets/screenshots/screenshot-intro-component.png";
import newsletterSignIn from "../assets/screenshots/screenshot-newsletter-sign-up-desktop.png";
import notificationPage from "../assets/screenshots/screenshot-notificationpage-desktop.png";
import pricingComponent from "../assets/screenshots/screenshot-pricingcomponent-desktop.png";
import rnDistribuciones from "../assets/screenshots/screenshot-rndistribuciones.png";
import timeTracking from "../assets/screenshots/screenshot-timetraking-preview-desktop.png";
import ecommerceComponent from "../assets/screenshots/screenshot-eccomerce-product-page.png";
import { useState } from "react";
import arrow from "../assets/icons/arrow.svg";

const projects = [
  {
    id: "1",
    titulo: "Advice Generator App",
    imagen: adviceGenerator,
    repositorio: "https://github.com/juanmderosa/advicegeneratorapp",
    livesite: "https://juanmderosa.github.io/advicegeneratorapp/",
  },
  {
    id: "2",
    titulo: "Age Calculator",
    imagen: ageCalulator,
    repositorio: "https://github.com/juanmderosa/age-calculator",
    livesite: "https://juanmderosa.github.io/age-calculator/",
  },
  {
    id: "3",
    titulo: "Comming soon with Form",
    imagen: commingSoon,
    repositorio: "https://github.com/juanmderosa/base-apparel-coming-soon",
    livesite: "https://juanmderosa.github.io/base-apparel-coming-soon/",
  },
  {
    id: "4",
    titulo: "Expenses Chart",
    imagen: expensesChart,
    repositorio: "https://github.com/juanmderosa/expenses-chart-component",
    livesite: "https://juanmderosa.github.io/expenses-chart-component",
  },
  {
    id: "5",
    titulo: "FAQ Accordion Card",
    imagen: faqAccordion,
    repositorio: "https://github.com/juanmderosa/react-faq-accordion-card",
    livesite: "https://juanmderosa.github.io/react-faq-accordion-card/",
  },
  {
    id: "6",
    titulo: "Interactive Rating Component",
    imagen: ratingComponent,
    repositorio: "https://github.com/juanmderosa/advicegeneratorapp",
    livesite:
      "https://juanmderosa.github.io/react-interactive-rating-component/",
  },
  {
    id: "7",
    titulo: "Intro Component with Form",
    imagen: introComponent,
    repositorio:
      "https://github.com/juanmderosa/Intro-component-with-sign-up-form",
    livesite:
      "https://juanmderosa.github.io/Intro-component-with-sign-up-form/",
  },
  {
    id: "8",
    titulo: "Newsletter Sign up",
    imagen: newsletterSignIn,
    repositorio: "https://github.com/juanmderosa/newsletter-sign-up",
    livesite: "https://juanmderosa.github.io/newsletter-sign-up/",
  },
  {
    id: "9",
    titulo: "Notification Page",
    imagen: notificationPage,
    repositorio: "https://github.com/juanmderosa/notification-page",
    livesite: "https://juanmderosa.github.io/notification-page/",
  },
  {
    id: "10",
    titulo: "Pricing Component",
    imagen: pricingComponent,
    repositorio: "https://github.com/juanmderosa/pricing-component",
    livesite: "https://juanmderosa.github.io/pricing-component/",
  },
  {
    id: "11",
    titulo: "RN DISTRIBUCIONES",
    imagen: rnDistribuciones,
    repositorio: "https://github.com/juanmderosa/",
    livesite: "https://rndistribuciones.com.ar/",
  },
  {
    id: "12",
    titulo: "Time Tracking",
    imagen: timeTracking,
    repositorio: "https://github.com/juanmderosa/timetracking-dashboard",
    livesite: "https://juanmderosa.github.io/timetracking-dashboard/",
  },
  {
    id: "13",
    titulo: "E-commerce Product Page",
    imagen: ecommerceComponent,
    repositorio: "https://github.com/juanmderosa/ecommerceProductPageMain",
    livesite: "https://juanmderosa.github.io/ecommerceProductPageMain/",
  },
];

export const PortfolioPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const prevCard = () => {
    const newIndex = (selectedIndex - 1 + projects.length) % projects.length;
    setSelectedIndex(newIndex);
  };

  const nextCard = () => {
    const newIndex = (selectedIndex + 1) % projects.length;
    setSelectedIndex(newIndex);
  };

  return (
    <section className={styles.portfolioContainer}>
      <article className={styles.exploradorContainer}>
        <ExploradorPortfolio
          projects={projects}
          selectedIndex={selectedIndex}
        />
      </article>
      <aside className={styles.portfolioInfoContainer}>
        <h2 className={styles.title}>Portfolio</h2>
        <p className={styles.projectTitle}>{projects[selectedIndex].titulo}</p>
        <div className={styles.arrowsContainer}>
          <img
            src={arrow}
            onClick={prevCard}
            alt="arrow back"
            className={styles.arrowBack}
          />
          <img
            src={arrow}
            onClick={nextCard}
            alt="arrow forward"
            className={styles.arrowForward}
          />
        </div>
        <div className={styles.linksContainer}>
          <a
            href={projects[selectedIndex].repositorio}
            target="_blank"
            rel="noreferrer">
            <button className={styles.button}>Github</button>
          </a>
          <a
            href={projects[selectedIndex].livesite}
            target="_blank"
            rel="noreferrer">
            <button className={styles.button}>Live Site</button>
          </a>
        </div>
      </aside>
    </section>
  );
};
