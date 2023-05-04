import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/Home/home";
import NavBar from "./components/navBar/Navar";
import Footer from "./components/footer/Footer";
import Education from "./views/Education/Education";
import TsPracticle from "./components/Animation/TsPracticle";

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
        </Routes>

        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App