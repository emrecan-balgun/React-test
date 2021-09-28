import { render, screen } from '@testing-library/react';
import Header from './Header'


describe("Emoji search tests", () => {

  test('render header', () => {
    render(<Header />);
    const text = screen.getByText('Emoji Search');
    expect(text).toBeInTheDocument();
  });
})