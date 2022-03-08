import {
    createSlice,
    PayloadAction
} from "@reduxjs/toolkit";
import { IMenuItem } from "../interfaces/MenuItem";
import type { RootState } from "./store";

interface CartState {
    cart: IMenuItem[],
};

const initialCartState: CartState = {
    cart: [],
}

interface ICartTotal {
    total: number
}

const initialCartTotal: ICartTotal = {
    total: 0
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        initialCartState,
        initialCartTotal
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
        }
    },
});

export const {
    addToCart,
    clearCart,
    saveTotal
} = CartSlice.actions;

export const selectCart = (state: RootState) => state.cart.initialCartState.cart;

export const selectCartTotal = (state: RootState) => state.cart.initialCartTotal.total;

export default CartSlice.reducer;