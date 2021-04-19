import { render, screen } from '@testing-library/react';

import Buttom from '.';

describe('<Buttom />', () => {
    it('should render the heading', () => {
        const { container } = render(<Buttom />);

        expect(screen.getByRole('heading', { name: /Buttom/i })).toBeInTheDocument();

        expect(container.firstChild).toMatchSnapshot();
    });
});
