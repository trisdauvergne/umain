import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';
import { RootState } from './store';
// import { IRestaurant } from '../interfaces/Restaurant';

interface IRestaurantState {
    name: string
};

const initialRestaurantState: IRestaurantState = {
    name: '',
};

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: {
        initialRestaurantState,
    }, 
    reducers: {
        saveRestaurant: (state, action: PayloadAction<string>) => {
            state.initialRestaurantState.name = action.payload
        },
    }  
});

export const { saveRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state: RootState) => state.restaurant.initialRestaurantState.name;

export default restaurantSlice.reducer;

