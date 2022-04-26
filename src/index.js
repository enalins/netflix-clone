import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserSelect from './pages/UserSelect'
import LandingPage from './pages/LandingPage'
import VideoPlayer from './pages/VideoPlayer';
import './App.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserSelect />} />
      <Route path="/browse" element={<LandingPage />} />
      <Route path="/watch" element={<VideoPlayer />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);