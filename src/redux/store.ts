import { configureStore } from "@reduxjs/toolkit";
import menuReducer from './menuSlice';
import cartReducer from './cartSlice'
import restaurantReducer from './restaurantSlice'
import orderReducer from './orderSlice'

const store = configureStore({
    reducer: {
        menu: menuReducer,
        cart: cartReducer,
        restaurant: restaurantReducer,
        order: orderReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;