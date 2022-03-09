import React from 'react';
import {
    useSelector,
    useDispatch
} from 'react-redux';
import {
    selectCartTotal,
    selectModalVisibility,
    changeModalVisibility,
    clearCart,
    selectOrder
} from '../../redux/cartSlice';
import {
    changeMenuVisibility,
    changeMenuDetailVisibility,
    clearMenu
} from '../../redux/menuSlice'
import './modal.scss';

const Modal = () => {
    const modalVisible = useSelector(selectModalVisibility);
    const cartTotal = useSelector(selectCartTotal);
    const order = useSelector(selectOrder);
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(changeModalVisibility(false));
    };

    const sendOrder = () => {
        dispatch(changeModalVisibility(false));
        dispatch(clearCart());
        dispatch(changeMenuVisibility(false));
        dispatch(changeMenuDetailVisibility(false));
        dispatch(clearMenu());
    }

    if (!modalVisible) {
        return null;
    }
    
    return (
        <section className='modal'>
            <h2 className='section-heading'>Your order</h2>
            <p>Order ID: {order.orderId}</p>
            <p>Status: {order.status}</p>
            <p>Esimated delivery: {order.esitmatedDelivery.toLocaleString()}</p>
            <h4>Total: {cartTotal}sek</h4>
            <div className="modal-btns">
                <button onClick={sendOrder}>OK</button>
                <button onClick={closeModal}>Cancel</button>
            </div>
        </section>
    )
}

export default Modal