import React from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import { IMenuItem } from '../../interfaces/MenuItem';
import {
  selectCart,
  clearCart
} from '../../redux/cartSlice';
import './cart.scss';

const Cart = () => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  let prices: number[] = [];
  cart.map(item => prices.push(item.price));

  const submitOrder = () => {
    let orders: object[] = [];
    cart.map(order => orders.push(order));
    // dispatch(clearCart());
  };

  if (cart && cart.length > 0) {
    return (
      <section className='cart'>
        <h2 className='section-heading'>Cart has {cart.length} items</h2>
        {cart.map((item: IMenuItem, i: number) => (
          <div key={i}>
            <p>{item.name}, {item.price}sek</p>
          </div>
        ))}
        <p className='cart-total'>Total: {prices.reduce((a, b) => a + b)}sek</p>
        <button onClick={submitOrder}>Clear cart</button>
      </section>
    )
  } else {
    return (
      <section className='cart'>
        <h2 className='section-heading grey'>Cart empty...</h2>
      </section>
    )
  }
}

export default Cart;