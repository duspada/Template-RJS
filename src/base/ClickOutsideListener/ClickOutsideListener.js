import React, { Component } from 'react';
import {
  string, func, shape, bool, node, oneOfType,
} from 'prop-types';

export default class ClickOutsideListener extends Component {
  constructor(props) {
    super(props);

    this.wrapperRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (event) => {
    const { triggerRef, isListening, handleClickOutside } = this.props;
    const trigger = triggerRef.current;
    const wrapper = this.wrapperRef.current;

    if (
      isListening
      && (!wrapper || !wrapper.contains(event.target))
      && (!trigger || !trigger.contains(event.target))
    ) {
      handleClickOutside(event);
    }
  };

  render() {
    const { id, children } = this.props;
    return (
      <div ref={this.wrapperRef} id={id}>
        {children}
      </div>
    );
  }
}

ClickOutsideListener.propTypes = {
  id: string.isRequired,
  triggerRef: oneOfType([func, shape()])
    .isRequired,
  isListening: bool,
  handleClickOutside: func,
  children: node,
};

ClickOutsideListener.defaultProps = {
  isListening: false,
  handleClickOutside: () => null,
  children: null,
};
