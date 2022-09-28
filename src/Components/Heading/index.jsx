import P from 'prop-types';
import { Title } from './styles';

export const Heading = ({
  children,
  colorDark = true,
  as = 'h1',
  size = 'huge',
  uppercase = false,
  align = 'center',
}) => {
  return (
    <Title
      colorDark={colorDark}
      as={as}
      size={size}
      uppercase={uppercase}
      align={align}
    >
      {children}
    </Title>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool,
  uppercase: P.bool,
  align: P.string,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
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
