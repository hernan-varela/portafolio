import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './views/Home/home';
import NavBar from "./components/navBar/Navar";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App;
