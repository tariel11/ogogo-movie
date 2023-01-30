import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Navbar from "./components/navbar/Navbar"; 
import AppRoutes from "./components/AppRoutes";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar/> 
      <AppRoutes/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
