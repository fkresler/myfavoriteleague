import React from 'react';
import { Story } from '@storybook/react';
import { ButtonProps, Button } from './Button';

const Template: Story<ButtonProps> = (args) => <Button {...args}>Action</Button>;

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  args: {
    variant: 'default',
    isRounded: false,
    isFullWidth: true,
  },
};

export const ButtonDefault = Template.bind({});
