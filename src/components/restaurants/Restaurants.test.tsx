import {
    render,
    screen,
    waitFor
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Restaurants from './Restaurants';

describe('Restaurants component', () => {
    test('1. That the restaurant heading is loaded on render', async () => {
        render(
        <Provider store={store}>
            <Restaurants />
        </Provider>);
        await waitFor(() => {
            const heading = screen.getByTestId('restaurant-heading');
            expect(heading).toBeInTheDocument();
        })
    })
});