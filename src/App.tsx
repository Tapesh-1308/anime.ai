import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./components/HomePage"

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
        </Routes>
      </Router>
    );
}

export default App;
