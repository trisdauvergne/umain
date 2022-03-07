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

interface IVisibleState {
    visible: boolean
}

const initialVisibleState: IVisibleState = {
    visible: false
};

const initialVisibleDetailsState: IVisibleState = {
    visible: false
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        initialMenuState,
        initialVisibleState,
        initialVisibleDetailsState
    }, 
    reducers: {
        saveMenu: (state, action: PayloadAction<IMenuItem[]>) => {
            state.initialMenuState.menu = action.payload
        },
        changeMenuVisibility: (state, action: PayloadAction<boolean>) => {
            state.initialVisibleState.visible = action.payload
        },
        changeMenuDetailVisibility: (state, action: PayloadAction<boolean>) => {
            state.initialVisibleDetailsState.visible = action.payload
        },
    }  
});


export const {
    saveMenu,
    changeMenuVisibility,
    changeMenuDetailVisibility
} = menuSlice.actions;

export const selectMenu = (state: RootState) => state.menu.initialMenuState.menu;

export const selectVisibility = (state: RootState) => state.menu.initialVisibleState.visible;

export const selectDetailsVisibility = (state: RootState) => state.menu.initialVisibleDetailsState.visible;

export default menuSlice.reducer;