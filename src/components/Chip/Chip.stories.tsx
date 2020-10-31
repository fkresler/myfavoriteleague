import React from 'react';
import { Story } from '@storybook/react';
import { IChip, Chip } from './Chip';

const Template: Story<IChip> = (args) => <Chip {...args} />;

export default {
  title: 'Components/Chip',
  component: Chip,
  argTypes: {
    onDelete: { action: 'deleted' },
  },
  args: {
    value: 'This is a chip',
  },
};

export const ChipDefault = Template.bind({});
