import React from 'react';
import { useSelector } from 'react-redux';
import { IMenuItem } from '../../interfaces/MenuItem';
import { selectCart } from '../redux/cartSlice';

const Cart = () => {
  const cart = useSelector(selectCart);

  if (cart && cart.length > 0) {
    return (
      <div>
        <h3>Cart has {cart.length} items</h3>
        {cart.map((item: IMenuItem, i: number) => (
          <div key={i}>
            <p>{item.name} - {item.price}</p>
          </div>
        ))}
      </div>
    )
  } else {
    return (
      <div>
        <h3>Cart empty</h3>
      </div>
    )
  }
}

export default Cart