// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoGrid title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CryptoGrid/i);
    expect(titleElement).toBeInTheDocument();
});
