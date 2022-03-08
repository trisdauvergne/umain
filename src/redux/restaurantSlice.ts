import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';
import { RootState } from './store';

interface IRestaurantState {
    name: string,
};

const initialRestaurantState: IRestaurantState = {
    name: '',
};

interface IRestaurantId {
    id: number,
}

const initialRestaurantId: IRestaurantId = {
    id: NaN
}

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
        initialRestaurantId,
    }, 
    reducers: {
        saveRestaurantName: (state, action: PayloadAction<string>) => {
            state.initialRestaurantState.name = action.payload
        },
        saveRestaurantId: (state, action: PayloadAction<number>) => {
            state.initialRestaurantId.id = action.payload
        }, 
        changeClickedStateHeading: (state, action: PayloadAction<boolean>) => {
            state.initialClickedState.greyedOut = action.payload
        }
    }  
});

export const {
    saveRestaurantName,
    changeClickedStateHeading,
    saveRestaurantId
} = restaurantSlice.actions;

export const selectRestaurant = (state: RootState) => state.restaurant.initialRestaurantState.name;

export const selectRestaurantId = (state: RootState) => state.restaurant.initialRestaurantId.id;

export const selectClickedStateHeading = (state: RootState) => state.restaurant.initialClickedState;

export default restaurantSlice.reducer;

