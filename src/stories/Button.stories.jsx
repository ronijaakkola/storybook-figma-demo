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
      url: 'https://www.figma.com/proto/JklqB03MIk13CQnm56yznQ/Untitled?node-id=18%3A13&scaling=min-zoom&page-id=0%3A1'
   }
  }
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
