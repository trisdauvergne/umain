import React, {
  useEffect,
  // useState
} from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import { IMenuItem } from '../../interfaces/MenuItem';
// import { ICartItem } from '../../interfaces/CartItem';
import {
  selectCart,
  saveTotal,
  selectCartTotal,
  // selectOrder,
  saveOrder,
  changeModalVisibility

} from '../../redux/cartSlice';
import './cart.scss';

const Cart = () => {
  const cart = useSelector(selectCart);
  const cartTotal = useSelector(selectCartTotal);
  // const order = useSelector(selectOrder);
  const dispatch = useDispatch();

  let prices: number[] = [];
  
  useEffect(() => {
    if (cart && cart.length > 0) {
      cart.map(item => prices.push(item.price));
      const total = prices.reduce((a, b) => a + b);
      dispatch(saveTotal(total));
    }
  });

  const submitOrder = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React POST Request Example' })
    };
    
    const data = await fetch('https://private-anon-941fd21a9a-pizzaapp.apiary-mock.com/orders/', requestOptions);
    if (data.ok) {
      const orderData = await data.json();
      dispatch(saveOrder(orderData));
      dispatch(changeModalVisibility(true));
    } else {
      const errorMessage = `An error occurred: ${data.status}`;
      throw new Error(errorMessage);
    }
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