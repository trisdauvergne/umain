import {
    createSlice,
    PayloadAction
} from "@reduxjs/toolkit";
import { IMenuItem } from "../../interfaces/MenuItem";
import Cart from "../cart/Cart";
import type { RootState } from "./store";

interface CartState {
    cart: IMenuItem[],
};

const initialState: CartState = {
    cart: [],
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IMenuItem>) => {
            state.cart = [
                ...state.cart,
                action.payload
            ]
        },
    },
});

export const { addToCart } = CartSlice.actions;

export const selectCart = (state: RootState) => state.cart.cart;

export default CartSlice.reducer;