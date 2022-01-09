import React, { Component, useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Floor from './pages/Floor';
import Villa from './pages/Villa';





function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/Floor" element={<Floor />} />
        <Route path="/Villa" element={<Villa />} />
      </Routes>
    </div>
  );
}


export default App;
