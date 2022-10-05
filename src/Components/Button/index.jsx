import React from 'react';

import { ButtonM } from './styles';

function Button({children, onClick, Contentdark, size, radius ,isDelete=false}) {
  return <ButtonM onClick={onClick} Contentdark={Contentdark} size={size} radius={radius} isDelete={isDelete}>{children}</ButtonM>;
}

export default Button;
