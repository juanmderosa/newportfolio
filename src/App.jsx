import { BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SobreMiPage } from "./pages/SobreMiPage";
import { StackPage } from "./pages/StackPage";
import { ServiciosPage } from "./pages/ServiciosPage";
/* 
import { useEffect } from "react";
import { mouseMoveAnimation } from "./helpers/mouseMoveAnimation"; */

function App() {
  /*   useEffect(() => {
    mouseMoveAnimation();
  }, []); */

  return (
    <BrowserRouter>
      <HomePage />
      <SobreMiPage />
      <StackPage />
      <ServiciosPage />
    </BrowserRouter>
  );
}

export default App;
