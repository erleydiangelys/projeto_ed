import { Button } from '.';

export default {
  title: ' Button',
  component: Button,
  args: {
    children: 'O texto está escuro',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Light = (args) => <Button {...args} />;
export const Dark = (args) => <Button {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Dark.args = {
  children: 'O texto está claro',
  colorDark: false,
};

// você pode fazer o decorator no preview do storybord ou descomentar o texto abaixo para decorar

// export const Template = (args) => {
//			return (
// <div>
// <Button {...args} />
// </div>
// );
