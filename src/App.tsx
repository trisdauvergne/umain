import React from 'react';
import './App.css';
import Restaurants from './components/restaurants/Restaurants';

const App = () => {
  return (
    <div className="App">
      <h1>Umain Pizza App</h1>
      <div className="components">
        <Restaurants />
      </div>
    </div>
  );
}

export default App;
