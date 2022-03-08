import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';
import { RootState } from './store';

interface IOrder {
    cart: string[],
    esitmatedDelivery: string,
    orderId: number,
    orderedAt: string,
    restuarantId: number,
    status: string,
    totalPrice: number,
}

const initialOrderState: IOrder = {
    cart: [],
    esitmatedDelivery: '',
    orderId: NaN,
    orderedAt: '',
    restuarantId: NaN,
    status: '',
    totalPrice: NaN,
}

export const OrderSlice = createSlice({
    name: 'order',
    initialState: {
        initialOrderState
    },
    reducers: {
        saveOrderStatus: (state, action: PayloadAction<IOrder>) => {
            let bakingOrderToAdd = {
                cart: action.payload.cart,
                esitmatedDelivery: action.payload.esitmatedDelivery,
                orderId: action.payload.orderId,
                orderedAt: action.payload.orderedAt,
                restuarantId: action.payload.restuarantId,
                status: action.payload.status,
                totalPrice: action.payload.totalPrice,
            }
            state.initialOrderState = bakingOrderToAdd
        }
    }
});

export const {
    saveOrderStatus
} = OrderSlice.actions;

export const selectPlacedOrder= (state: RootState) => state.order.initialOrderState;

export default OrderSlice.reducer;
