import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

class Modal extends PureComponent {
  render() {
    const { isOpen, selector, children, ...rest } = this.props;

    const element = document.querySelector(selector);

    if (!isOpen || !element) return null;

    return ReactDOM.createPortal(<div {...rest}>{children}</div>, element);
  }
}

export default Modal;
