import React, { Component, useState } from 'react';
import './App.css';
import { Link, HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Floor from './pages/Floor';
import Villa from './pages/Villa';
import Contact from './pages/Contact';
import { AnimatePresence } from 'framer-motion';
import AnimatedPage from './component/AnimatedPage';





function App() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/*" element={<Home />} />
          <Route path="/Floor" element={<Floor />} />
          <Route path="/Villa" element={<Villa />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}


export default App;
