import React from 'react';
import { Story } from '@storybook/react';
import { SelectProps, Select } from './Select';

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    onChange: { action: 'changed' },
  },
  args: {
    options: [
      {
        id: 'first',
        description: 'First',
      },
      {
        id: 'second',
        description: 'Second',
      },
      {
        id: 'third',
        description: 'Third',
      },
    ],
    placeholder: 'Choose your option:',
    isFullWidth: false,
    isDisabled: false,
  },
};

export const SelectDefault = Template.bind({});
