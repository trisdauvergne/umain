import {
    fireEvent,
    render,
    screen,
    waitFor
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Cart from './Cart';

describe('Menus component', () => {
    test(`1. That the cart has object added to it`, async () => {
        // await waitFor(() => {
        //     const button = screen.getByTestId('add-item');
        //     fireEvent.click(button);
        //     screen.findByTestId('cart-item');
        // })
    });

    test(`2. That placed orders shows after the modal is closed`, async () => {
    });
})