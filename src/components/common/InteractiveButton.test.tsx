import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import InteractiveButton from './InteractiveButton';

describe('InteractiveButton', () => {
  it('renders with initial state', () => {
    render(
      <InteractiveButton label="Test Button">
        <div>Test Content</div>
      </InteractiveButton>
    );

    expect(screen.getByRole('button')).toHaveTextContent('Show Content');
    expect(screen.getByRole('region')).toHaveClass('opacity-0');
  });

  it('toggles content visibility on click', () => {
    render(
      <InteractiveButton label="Test Button">
        <div>Test Content</div>
      </InteractiveButton>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(button).toHaveTextContent('Hide Content');
    expect(screen.getByRole('region')).toHaveClass('opacity-100');
  });

  it('closes content when clicking outside', () => {
    render(
      <InteractiveButton label="Test Button">
        <div>Test Content</div>
      </InteractiveButton>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);
    fireEvent.mouseDown(document.body);

    expect(button).toHaveTextContent('Show Content');
    expect(screen.getByRole('region')).toHaveClass('opacity-0');
  });
});