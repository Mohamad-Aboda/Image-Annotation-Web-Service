// src/App.js
import React from 'react';
import './App.css';
import ImageAnnotationComponent from './components/ImageAnnotationComponent';
import StatsComponent from './components/StatsComponent';

function App() {
  return (
    <div className="App">
      <center><h1>AIC CAT/DOG IMAGE ANNOTATOR</h1></center>
      <ImageAnnotationComponent />
      <StatsComponent />
    </div>
  );
}

export default App;
