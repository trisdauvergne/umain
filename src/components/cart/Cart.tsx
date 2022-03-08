import React, {
  useEffect
} from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import { IMenuItem } from '../../interfaces/MenuItem';
import {
  selectCart,
  saveTotal,
  selectCartTotal,
  changeModalVisibility
} from '../../redux/cartSlice';
import './cart.scss';

const Cart = () => {
  const cart = useSelector(selectCart);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  let prices: number[] = [];
  
  useEffect(() => {
    if (cart && cart.length > 0) {
      cart.map(item => prices.push(item.price));
      const total = prices.reduce((a, b) => a + b);
      dispatch(saveTotal(total));
    }
  });

  const submitOrder = () => {
    dispatch(changeModalVisibility(true));
  };

  if (cart && cart.length > 0) {
    return (
      <section className='cart'>
        <h2 className='section-heading'>{cart.length} items in cart</h2>
        {cart.map((item: IMenuItem, i: number) => (
          <div key={i}>
            <p>{item.name}, {item.price}sek</p>
          </div>
        ))}
        <p className='cart-total'>Total: {cartTotal}sek</p>
        <button onClick={submitOrder}>Submit cart</button>
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