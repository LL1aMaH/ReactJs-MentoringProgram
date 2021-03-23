import React, { ReactNode } from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { Modal } from './Modal';

jest.mock(
  'react-focus-lock',
  () => ({ children }: { children: ReactNode }) => <div id="Focus lock">{children}</div>, // eslint-disable-line react/display-name
);

describe('Modal', () => {
  const getComponent = (props: { onClose?: () => void; disableCloseOnBackground?: boolean }) =>
    render(
      <Modal open {...props}>
        <div data-testid="content">content</div>
      </Modal>,
    );

  afterEach(cleanup);

  it('should render correctly', () => {
    const { getByTestId } = getComponent({});

    expect(getByTestId('modal')).toMatchSnapshot();
  });

  it('should call onClose on click background', () => {
    const onClose = jest.fn();
    const { getByTestId } = getComponent({ onClose });

    fireEvent.click(getByTestId('modal'));

    expect(onClose).toBeCalledTimes(1);
  });

  it('should not call onClose on click content', () => {
    const onClose = jest.fn();
    const { getByTestId } = getComponent({ onClose });

    fireEvent.click(getByTestId('content'));

    expect(onClose).not.toBeCalled();
  });

  it('should not call onClose on click background when disableCloseOnBackground is set to true', () => {
    const onClose = jest.fn();
    const { getByTestId } = getComponent({ onClose, disableCloseOnBackground: true });

    fireEvent.click(getByTestId('modal'));

    expect(onClose).not.toBeCalled();
  });

  it('should not call onClose on press any other button', () => {
    const onClose = jest.fn();
    const { getByTestId } = getComponent({ onClose });

    fireEvent.keyDown(getByTestId('modal'), { keyCode: 20 });

    expect(onClose).not.toBeCalled();
  });

  it('should lock body scroll when open is true', () => {
    const { baseElement, unmount } = getComponent({});

    expect(baseElement.classList.contains('scrollLock')).toBeTruthy();

    unmount();

    expect(baseElement.classList.contains('scrollLock')).toBeFalsy();
  });
});
