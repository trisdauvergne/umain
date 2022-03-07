import {
    render,
    screen
} from '@testing-library/react';
import Restaurants from './Restaurants';

describe('Restaurants component', () => {
    test('1. That the restaurant heading is loaded on render', () => {
        render(<Restaurants />)
        const heading = screen.getByTestId('restaurant-heading');
        expect(heading).toBeTruthy();
    })
});