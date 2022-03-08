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
            <h2 className='section-heading'>Your order</h2>
            <ul>
                {cart.map((item: IMenuItem, i: number) => (
                    <li key={i}>{item.name}, {item.price}sek</li>
                ))}
            </ul>
            <h4>Total: {cartTotal}sek</h4>
            <div className="modal-btns">
                <button onClick={sendOrder}>Submit order</button>
                <button onClick={closeModal}>Cancel</button>
            </div>
        </section>
    )
}

export default Modal