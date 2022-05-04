import React from 'react';
import './App.css';
import MainPage from './pages/MainPage';
import LoginJoinPage from './pages/LoginJoinPage';
import NotFoundPage from './pages/NotFoundPage';
import TestPage from './pages/TestPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<MainPage />} /> */}
      <Route path="/" element={<LoginJoinPage />} />
      <Route path="login" element={<LoginJoinPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
