import React from 'react';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import './App.css';
import Cart from './components/cart/Cart';
import Menus from './components/menus/Menus';
import Restaurants from './components/restaurants/Restaurants';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Umain Pizza App</h1>
        <div className="components">
          <Restaurants />
          <Menus />
          <Cart />
        </div>
      </div>
    </Provider>
  );
}

export default App;
