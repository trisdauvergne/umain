import React from 'react';
import './App.css';
import Cart from './components/cart/Cart';
import Menus from './components/menus/Menus';
import Restaurants from './components/restaurants/Restaurants';

const App = () => {
  return (
    <div className="App">
      <h1>Umain Pizza App</h1>
      <div className="components">
        <Restaurants />
        <Menus />
        <Cart />
      </div>
    </div>
  );
}

export default App;
