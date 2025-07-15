import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import InteractionCheck from './pages/InteractionCheck';
import SymptomAnalysis from './pages/SymptomAnalysis';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/etkilesim-kontrolu" element={<InteractionCheck />} />
          <Route path="/semptom-analizi" element={<SymptomAnalysis />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;