import React, { useState } from 'react';
import './App.css';

function App() {
  // Pastel color palette
  const colors = [
    '#FFB3BA',  // soft pink
    '#FFDFBA',  // peach
    '#FFFFBA',  // pale yellow
    '#BAFFC9',  // mint
    '#BAE1FF'   // baby blue
  ];
  
  const [colorIndex, setColorIndex] = useState(0);

  const changeColor = () => {
    setColorIndex(prev => (prev + 1) % colors.length);
  };

  return (
    <div
      className="app-container"
      style={{ backgroundColor: colors[colorIndex] }}
      onClick={changeColor}
    >
      <div className="click-text">Click!</div>
    </div>
  );
}

export default App;
