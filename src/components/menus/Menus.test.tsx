import {
    render,
    screen,
    waitFor
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Menus from './Menus';

describe('Menus component', () => {
    test('1. That the menu heading is loaded on render', async () => {
        render(
        <Provider store={store}>
            <Menus />
        </Provider>);
        await waitFor(() => {
            const menuheading = screen.getByTestId('menus-heading');
            expect(menuheading).toBeInTheDocument();
        })
    })
})