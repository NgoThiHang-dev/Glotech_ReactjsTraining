import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
// import Employees from "./views/employees/Employees";
import Home from "./views/home/Home";

import { useContext } from "react";
import { ThemeContext } from "./views/theme/ThemeContext";

function App() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <Router>
      <div className={darkMode ? "canvas-dark" : "canvas"}>
        <div className={darkMode ? "overlay-dark" : "overlay"}>
          <Navbar />
        </div>
        <center>
          <div className={darkMode ? "about-details-dark" : "about-details"}>
            <Home />
          </div>
        </center>
      </div>
      
      <Footer />
    </Router>
  );
}

export default App;
