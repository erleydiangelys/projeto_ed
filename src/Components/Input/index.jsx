import P from 'prop-types';
import React from 'react';
import { Container, Label, MyInput, Error } from './styles';

export const Input = ({
  // children,
  label,
  colorDark,
  size = 'large',
  type,
  name,
  value,
  onChange,
  error,
  onBlur,
  ...props
}) => {
  return (
    <Container>
      <Label htmlFor={name} colorDark={colorDark} size={size}>
        {label}
      </Label>
      <MyInput
        colorDark={colorDark}
        size={size}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
      {error && <Error size={size}>{error}</Error>}
    </Container>
  );
};

Input.propTypes = {
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
  type: P.oneOf([
    'text',
    'password',
    'checkbox',
    'color',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
  ]),
  name: P.string,
  label: P.string,
  value: P.string,
  onChange: P.node,
  error: P.string,
  onBlur: P.node,
};
