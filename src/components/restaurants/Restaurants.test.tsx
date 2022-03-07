import {
    render,
    screen,
    waitFor
} from '@testing-library/react';
import Restaurants from './Restaurants';

describe('Restaurants component', () => {
    test('1. That the restaurant heading is loaded on render', async () => {
        render(<Restaurants />);
        await waitFor(() => {
            const heading = screen.getByTestId('restaurant-heading');
            expect(heading).toBeInTheDocument();
        })
    })
});