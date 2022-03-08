import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';
import { RootState } from './store';

interface IRestaurantState {
    name: string
};

const initialRestaurantState: IRestaurantState = {
    name: '',
};

interface IClickedState {
    greyedOut: boolean
}

const initialClickedState: IClickedState = {
    greyedOut: false
}

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: {
        initialRestaurantState,
        initialClickedState,
    }, 
    reducers: {
        saveRestaurant: (state, action: PayloadAction<string>) => {
            state.initialRestaurantState.name = action.payload
        },
        changeClickedStateHeading: (state, action: PayloadAction<boolean>) => {
            state.initialClickedState.greyedOut = action.payload
        }
    }  
});

export const {
    saveRestaurant,
    changeClickedStateHeading
} = restaurantSlice.actions;

export const selectRestaurant = (state: RootState) => state.restaurant.initialRestaurantState.name;

export const selectClickedStateHeading = (state: RootState) => state.restaurant.initialClickedState;

export default restaurantSlice.reducer;

