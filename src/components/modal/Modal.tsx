import React from 'react';
import {
    useSelector,
    useDispatch
  } from 'react-redux';
  import { IMenuItem } from '../../interfaces/MenuItem';
  import {
    selectCart,
    selectCartTotal,
    selectModalVisibility,
    changeModalVisibility,
    clearCart
  } from '../../redux/cartSlice';
import './modal.scss';

const Modal = () => {
    const cart = useSelector(selectCart);
    const modalVisible = useSelector(selectModalVisibility);
    const cartTotal = useSelector(selectCartTotal);
    const dispatch = useDispatch();

    console.log(modalVisible);

    const closeModal = () => {
        dispatch(changeModalVisibility(false));
    };

    const sendOrder = () => {
        dispatch(changeModalVisibility(false));
        dispatch(clearCart());
    }

    if (!modalVisible) {
        return null;
    }
    
    return (
        <section className='modal'>
            <h4>Your order</h4>
            <ul>
                {cart.map((item: IMenuItem, i: number) => (
                    <li key={i}>{item.name}, {item.price}sek</li>
                ))}
            </ul>
            <p>Total: {cartTotal}sek</p>
            <button onClick={sendOrder}>Submit order</button>
            <button onClick={closeModal}>Cancel</button>
        </section>
    )
}

export default Modal