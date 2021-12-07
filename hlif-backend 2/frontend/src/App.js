import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { HelloMella } from './components/hello';
import { Categories } from './components/categories';
import './App.css';

export const App = () => {
  return (
    <div className="wrapper">
      <h1>Hlíf Best</h1>
      <Link to="/">Home</Link> <Link to="/categories">Vörur</Link>
      <Routes>
        <Route path="/" element={<HelloMella />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}
