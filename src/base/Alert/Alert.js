import React from 'react';
import {
  string, bool, node,
} from 'prop-types';

import { AlertWrapper, AlertContent } from './Alert.styles';

const Alert = ({
  id, type, children, show,
}) => (
  <AlertWrapper id={id} type={type} show={show} role="alert">
    <AlertContent>{children}</AlertContent>
  </AlertWrapper>
);

export default Alert;

Alert.propTypes = {
  id: string.isRequired,
  children: node,
  type: string,
  show: bool,
};

Alert.defaultProps = {
  children: '',
  type: 'default',
  show: false,
};
