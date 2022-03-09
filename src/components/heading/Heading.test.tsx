import {
    render,
    screen,
} from '@testing-library/react';
import Heading from './Heading';

describe('The heading component', () => {
    test(`1. That heading with the name of app should load`, () => {
        render(<Heading />);
        const heading = screen.getByText('Umain Pizza App');
        expect(heading).toBeInTheDocument();
    });
})