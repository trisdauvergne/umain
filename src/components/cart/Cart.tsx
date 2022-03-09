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
  selectOrder,
  clearCart
} from '../../redux/cartSlice';
import './cart.scss';
import { submit } from '../../utils/submitOrder';
import OrderStatus from '../orderStatus/OrderStatus';

const Cart = () => {
  const cart = useSelector(selectCart);
  const existingOrder = useSelector(selectOrder);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  const [ showOrderStatus, setShowOrderStatus ] = useState(true);

  let prices: number[] = [];
  
  useEffect(() => {
    if (cart && cart.length > 0) {
      cart.map(item => prices.push(item.price));
      const total = prices.reduce((a, b) => a + b);
      dispatch(saveTotal(total));
    }
  });

  const sendOrder = async () => {
    const data = await submit(cart)
    dispatch(saveOrder(data));
    dispatch(changeModalVisibility(true));
  };

  const changeOrderStatusVisibility = () => {
    setShowOrderStatus(!showOrderStatus);
  };

  const clearOrders = () => {
    dispatch(clearCart());
  }

  const orderStatusDiv =
    <div>
        <button onClick={changeOrderStatusVisibility}>{showOrderStatus ? `Hide order` : `Show order`}</button>
        {showOrderStatus && <OrderStatus />}
    </div>
  ;
  
  if (cart && cart.length > 0) {
    return (
      <section className='cart'>
        <h2 className='section-heading'>{cart.length === 1 ? `1 item in cart` : `${cart.length} items in cart`}</h2>
        {cart.map((item: IMenuItem, i: number) => (
          <div key={i}>
            <p>{item.name}, {item.price}sek</p>
          </div>
        ))}
        <p className='cart-total'>Total: {cartTotal}sek</p>
        <div className='cart-btns'>
          <button onClick={sendOrder}>Place order</button>
          <button onClick={clearOrders}>Clear cart</button>
        </div>
        {existingOrder && existingOrder.status === 'ordered' && 
        <>
          {orderStatusDiv}
        </>
        }
      </section>
    )
  } else {
    return (
      <section className='cart'>
        <h2 className='section-heading grey'>Cart empty...</h2>
        {existingOrder && existingOrder.status === 'ordered' &&
        <>
          {orderStatusDiv}
        </>
        }
      </section>
    )
  }
}

export default Cart;