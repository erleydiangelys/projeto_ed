import React from 'react';

import { ButtonM } from './styles';

function Button({children, Contentdark, size, radius ,isDelete=false}) {
  return <ButtonM Contentdark={Contentdark} size={size} radius={radius} isDelete={isDelete}>{children}</ButtonM>;
}

export default Button;
