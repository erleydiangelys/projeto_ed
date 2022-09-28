import { Input } from '.';

export default {
  title: ' Input',
  component: Input,
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

export const Light = (args) => <Input {...args} />;
export const Dark = (args) => <Input {...args} />;

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
