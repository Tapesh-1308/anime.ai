import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./Pages/Home Page/HomePage"
import Feed from './Pages/Feeds/Feeds';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/feed" element={<Feed/>}></Route>
        </Routes>
      </Router>
    );
}

export default App;
