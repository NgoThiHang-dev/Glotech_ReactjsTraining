import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Employees from "./views/employees/Employees";
import Home from "./views/home/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
