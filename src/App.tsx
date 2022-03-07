import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.scss';
import Heading from './components/heading/Heading';
import Cart from './components/cart/Cart';
import Menus from './components/menus/Menus';
import Restaurants from './components/restaurants/Restaurants';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Heading />
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
