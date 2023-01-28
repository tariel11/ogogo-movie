import { BrowserRouter } from "react-router-dom";

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
