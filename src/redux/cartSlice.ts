import {
    createSlice,
    PayloadAction
} from "@reduxjs/toolkit";
import { IMenuItem } from "../interfaces/MenuItem";
import type { RootState } from "./store";

interface ICartState {
    cart: IMenuItem[],
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

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        initialCartState,
        initialCartTotal,
        initialModalVisible
    },
    reducers: {
        addToCart: (state, action: PayloadAction<IMenuItem>) => {
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
        }
    },
});

export const {
    addToCart,
    clearCart,
    saveTotal,
    changeModalVisibility
} = CartSlice.actions;

export const selectCart = (state: RootState) => state.cart.initialCartState.cart;

export const selectCartTotal = (state: RootState) => state.cart.initialCartTotal.total;

export const selectModalVisibility = (state: RootState) => state.cart.initialModalVisible.modalVisible;

export default CartSlice.reducer;