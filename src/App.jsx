import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/Home/home";
import NavBar from "./components/navBar/Navar";
import Footer from "./components/footer/Footer";
import Education from "./views/Education/Education";
import TsPracticle from "./components/Animation/TsPracticle";
import AboutMe from "./views/AboutMe/AboutMe";
import Skils from "./views/Skils/Skils";
import ContactForm from "./views/ContactForm/ContactForm";
import Resume from "./views/Resume/Resume";

function App() {
  return (
    <Router>
      <TsPracticle />
      <div>
        <nav>
          <NavBar />
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Home />
              </div>
            }
          />
          <Route
            path="/education"
            element={
              <div>
                <Education />
              </div>
            }
          />

          <Route
            path="/AboutMe"
            element={
              <div>
                <AboutMe/>
              </div>
            }
          />

          <Route path="/skils" element={<div><Skils/></div>} />

          <Route path="/contact" element={<div><ContactForm/></div>} />

          <Route path="/resume" element={<div><Resume/></div>} />


        </Routes>

        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
