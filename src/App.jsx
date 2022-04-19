import React from 'react';
import './App.css';
import MainPage from './pages/MainPage';
import LoginJoinPage from './pages/LoginJoinPage';
import TestPage from './pages/TestPage';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<MainPage />} /> */}
      <Route path="/" element={<LoginJoinPage />} />
      <Route path="login" element={<LoginJoinPage />} />
    </Routes>
  );
}

export default App;
