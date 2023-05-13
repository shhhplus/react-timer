import { render } from '@testing-library/react';
import Timer from './index';

describe('Timer', () => {
  test(`component could be updated and unmounted without errors`, () => {
    const { unmount, rerender } = render(
      <Timer interval={1000} onElapsed={() => {}} />,
    );
    expect(() => {
      rerender(<Timer interval={1000} onElapsed={() => {}} />);
      unmount();
    }).not.toThrow();
  });

  test('onElapsed should not be called when interval is 0', async () => {
    const mockOnElapsed = jest.fn();
    render(<Timer interval={0} onElapsed={mockOnElapsed} />);

    return new Promise<void>((resolve) => {
      setTimeout(() => {
        expect(mockOnElapsed).toBeCalledTimes(0);
        resolve();
      }, 1000);
    });
  });

  test('sync onElapsed should work', async () => {
    const mockOnElapsed = jest.fn();
    render(<Timer interval={1000} onElapsed={mockOnElapsed} />);

    return new Promise<void>((resolve) => {
      setTimeout(() => {
        expect(mockOnElapsed).toBeCalledTimes(3);
        resolve();
      }, 3500);
    });
  });

  test('async onElapsed should work', async () => {
    const mockOnElapsed = jest.fn(() => {
      return new Promise((resolve) => {
        setTimeout(resolve, 100);
      });
    });
    render(<Timer interval={1000} onElapsed={mockOnElapsed} />);
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        expect(mockOnElapsed).toBeCalledTimes(3);
        resolve();
      }, 3500);
    });
  });
});
