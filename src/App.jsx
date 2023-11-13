import { BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SobreMiPage } from "./pages/SobreMiPage";
import { StackPage } from "./pages/StackPage";
import { ServiciosPage } from "./pages/ServiciosPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { ContactoPage } from "./pages/ContactoPage";
import { Nav } from "./components/Nav";

/* 
import { useEffect } from "react";
import { mouseMoveAnimation } from "./helpers/mouseMoveAnimation"; */

function App() {
  /*   useEffect(() => {
    mouseMoveAnimation();
  }, []); */

  return (
    <BrowserRouter>
      <Nav />
      <HomePage />
      <SobreMiPage />
      <StackPage />
      <ServiciosPage />
      <PortfolioPage />
      <ContactoPage />
    </BrowserRouter>
  );
}

export default App;
