import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';
import { RootState } from './store';
import { IMenuItem } from '../../interfaces/MenuItem';

interface MenuState {
    menu: IMenuItem[]
};

const initialState: MenuState = {
    menu: []
};

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        saveMenu: (state, action: PayloadAction<IMenuItem[]>) => {
            state.menu = action.payload
        }
    }  
});

export const { saveMenu } = menuSlice.actions;

export const selectMenu = (state: RootState) => state.menu.menu;

export default menuSlice.reducer;