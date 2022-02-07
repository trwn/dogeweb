import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import PreMint from "./pages/preMint";
import ComingSoon from './pages/comingSoon';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/preMint" element={<PreMint />} exact />
        <Route path="/ComingSoon" element={<ComingSoon />} exact />
      </Routes>
    </Router>
  );
}

export default App;
