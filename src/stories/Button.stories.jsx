import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/JklqB03MIk13CQnm56yznQ/Storybook-integration?node-id=18%3A5'
   }
  }
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
