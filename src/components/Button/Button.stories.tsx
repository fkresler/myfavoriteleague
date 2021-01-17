import React from 'react';
import { Story } from '@storybook/react';
import { FaInfoCircle } from 'react-icons/fa';
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
    isFullWidth: true,
  },
};

export const ButtonDefault = Template.bind({});

export const IconButton = Template.bind({});
IconButton.args = {
  icon: <FaInfoCircle />,
};
