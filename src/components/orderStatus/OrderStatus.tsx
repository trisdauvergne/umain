import React, {
    useEffect,
} from 'react';
import {
    useSelector,
    useDispatch
  } from 'react-redux';
import {
    selectOrder
} from '../../redux/cartSlice';
import {
    saveOrderStatus,
    selectPlacedOrder
} from '../../redux/orderSlice';
import './orderstatus.scss';
import { getOrderDetails } from '../../utils/getOrderDetails';
  
const OrderStatus = () => {
    const order = useSelector(selectOrder);
    const placedOrder = useSelector(selectPlacedOrder);
    const dispatch = useDispatch();

    const fetchDetails = async () => {
        const data = await getOrderDetails(order.orderId);
        dispatch(saveOrderStatus(data));
    }

    useEffect(() => {
        fetchDetails();
    }, []);
    
    return (
        <section className='order-status'>
            {placedOrder && placedOrder.orderedAt !== '' && (
                <div>
                    <h3>Order Status: {placedOrder.status}</h3>
                    <p>Status: {placedOrder.status}</p>
                    <p>Order id: {placedOrder.orderId}</p>
                    <div>
                        <p>Items:</p>
                        {placedOrder.cart.map((item: any, i: number) =>(
                            <div key={i}>
                                <p>Item ID: {item.menuItemId}</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                        ))}
                    </div>
                    <h4>Total price: {placedOrder.totalPrice}sek</h4>
                </div>
            )}
        </section>
    )
}

export default OrderStatus