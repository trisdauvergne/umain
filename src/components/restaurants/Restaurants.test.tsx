import {
    render,
    screen,
    waitFor
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Restaurants from './Restaurants';

describe('Restaurants component', () => {
    test(`1. That 'restaurants loading' shows before data is fetched`, () => {
        render(<Restaurants />)
        const heading = screen.getByText(`Restaurants loading...`);
        expect(heading).toBeInTheDocument();
    });

    test('2. That the restaurant heading is rendered after fetch', async () => {
        render(
        <Provider store={store}>
            <Restaurants />
        </Provider>);
        await waitFor(() => {
            const heading = screen.getByTestId('restaurant-heading');
            expect(heading).toBeInTheDocument();
        })
    });
});