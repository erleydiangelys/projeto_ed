import P from 'prop-types';
import React from 'react';
import { MyButton } from './styles';

export const Button = ({
  children,
  colorDark = true,
  size = 'xsmall',
  ...props
}) => {
  return (
    <MyButton {...props} colorDark={colorDark} size={size}>
      {children}
    </MyButton>
  );
};

Button.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool,
  size: P.oneOf([
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'huge',
    'xhuge',
  ]),
};
