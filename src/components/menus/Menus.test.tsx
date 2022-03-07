import {
    render,
    screen,
    waitFor
} from '@testing-library/react';
import Menus from './Menus';

describe('Menus component', () => {
    test('1. That the menu heading is loaded on render', async () => {
        render(<Menus />);
        await waitFor(() => {
            const heading = screen.getByTestId('menus-heading');
            expect(heading).toBeInTheDocument();
        })
    })
})