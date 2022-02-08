import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserSelect from './pages/UserSelect'
import LandingPage from './pages/LandingPage'
import './App.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserSelect />} />
      <Route path="/browse" element={<LandingPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);