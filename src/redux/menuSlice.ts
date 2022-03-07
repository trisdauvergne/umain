import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';
import { RootState } from './store';
import { IMenuItem } from '../interfaces/MenuItem';

interface IMenuState {
    menu: IMenuItem[]
};

const initialMenuState: IMenuState = {
    menu: []
};

export const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        initialMenuState,
    }, 
    reducers: {
        saveMenu: (state, action: PayloadAction<IMenuItem[]>) => {
            state.initialMenuState.menu = action.payload
        },
    }  
});


export const { saveMenu } = menuSlice.actions;

export const selectMenu = (state: RootState) => state.menu.initialMenuState.menu;

export default menuSlice.reducer;