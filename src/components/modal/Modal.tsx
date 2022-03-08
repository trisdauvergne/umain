import React from 'react';
import {
    useSelector,
    // useDispatch
  } from 'react-redux';
  import { IMenuItem } from '../../interfaces/MenuItem';
  import {
    selectCart,
    // clearCart
  } from '../../redux/cartSlice';
import './modal.scss';

const Modal = () => {
    const cart = useSelector(selectCart);
        
    return (
        <section className='modal'>
            <h4>Your order</h4>
            <button>Submit order</button>
            <button>Cancel</button>
        </section>
    )
}

export default Modal