import React from 'react';

import { ButtonM } from './styles';

function Button({children}, Contentdark) {
  return <ButtonM Contentdark={Contentdark}>{children}</ButtonM>;
}

export default Button;
