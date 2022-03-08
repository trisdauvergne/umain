import {
    createSlice,
    PayloadAction
} from "@reduxjs/toolkit";
import { ICartItem } from "../interfaces/CartItem";
import type { RootState } from "./store";

interface ICartState {
    cart: ICartItem[],
};

const initialCartState: ICartState = {
    cart: [],
}

interface ICartTotal {
    total: number
}

const initialCartTotal: ICartTotal = {
    total: 0
}

interface IModalVisible {
    modalVisible: boolean
}

const initialModalVisible: IModalVisible = {
    modalVisible: false
}

interface IOrderConfirmation {
        orderId: number,
        totalPrice: number,
        orderedAt: string,
        status: string,
        esitmatedDelivery: string
}

const initialOrder:IOrderConfirmation = {
        orderId: NaN,
        totalPrice: NaN,
        orderedAt: '',
        status: '',
        esitmatedDelivery: ''
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        initialCartState,
        initialCartTotal,
        initialModalVisible,
        initialOrder
    },
    reducers: {
        addToCart: (state, action: PayloadAction<ICartItem>) => {
            state.initialCartState.cart = [
                ...state.initialCartState.cart,
                action.payload
            ]
        },
        clearCart: (state) => {
            state.initialCartState.cart = [];
        },
        saveTotal: (state, action: PayloadAction<number>) => {
            state.initialCartTotal.total = action.payload
        },
        changeModalVisibility: (state, action: PayloadAction<boolean>) => {
            state.initialModalVisible.modalVisible = action.payload
        },
        saveOrder:  (state, action: PayloadAction<IOrderConfirmation>) => {
            let orderToSave = {
                orderId: action.payload.orderId,
                totalPrice: action.payload.totalPrice,
                orderedAt: action.payload.orderedAt,
                status: action.payload.status,
                esitmatedDelivery: action.payload.esitmatedDelivery
            }
            state.initialOrder = orderToSave
        },
    },
});

export const {
    addToCart,
    clearCart,
    saveTotal,
    changeModalVisibility,
    saveOrder
} = CartSlice.actions;

export const selectCart = (state: RootState) => state.cart.initialCartState.cart;

export const selectCartTotal = (state: RootState) => state.cart.initialCartTotal.total;

export const selectModalVisibility = (state: RootState) => state.cart.initialModalVisible.modalVisible;

export const selectOrder = (state: RootState) => state.cart.initialOrder;

export default CartSlice.reducer;