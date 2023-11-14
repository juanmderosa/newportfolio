import { BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SobreMiPage } from "./pages/SobreMiPage";
import { StackPage } from "./pages/StackPage";
import { ServiciosPage } from "./pages/ServiciosPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { ContactoPage } from "./pages/ContactoPage";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <HomePage />
        <SobreMiPage />
        <StackPage />
        <ServiciosPage />
        <PortfolioPage />
        <ContactoPage />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
