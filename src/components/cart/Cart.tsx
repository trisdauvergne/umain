import React, {
  useEffect,
  useState
} from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import { IMenuItem } from '../../interfaces/MenuItem';
import {
  saveTotal,
  saveOrder,
  changeModalVisibility,
  selectCart,
  selectCartTotal,
  selectOrder
} from '../../redux/cartSlice';
import './cart.scss';
import { submit } from '../../utils/submitOrder';
import OrderStatus from '../orderStatus/OrderStatus';

const Cart = () => {
  const cart = useSelector(selectCart);
  const existingOrder = useSelector(selectOrder);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  const [ showOrderStatus, setShowOrderStatus ] = useState(false);

  let prices: number[] = [];
  
  useEffect(() => {
    if (cart && cart.length > 0) {
      cart.map(item => prices.push(item.price));
      const total = prices.reduce((a, b) => a + b);
      dispatch(saveTotal(total));
    }
  });

  const sendOrder = async () => {
    const data = await submit()
    dispatch(saveOrder(data));
    dispatch(changeModalVisibility(true));
  };

  const changeOrderStatusVisibility = () => {
    setShowOrderStatus(!showOrderStatus);
  }
  
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
        <button onClick={sendOrder}>Place order</button>
        {existingOrder && existingOrder.status === 'ordered' &&
          <div>
            <button onClick={changeOrderStatusVisibility}>Show placed orders</button>
            {showOrderStatus && <OrderStatus />}
          </div>
        }
      </section>
    )
  } else {
    return (
      <section className='cart'>
        <h2 className='section-heading grey'>Cart empty...</h2>
        {existingOrder && existingOrder.status === 'ordered' && <OrderStatus />}
      </section>
    )
  }
}

export default Cart;