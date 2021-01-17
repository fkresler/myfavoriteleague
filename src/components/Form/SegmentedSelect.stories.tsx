import React from 'react';
import { Story } from '@storybook/react';
import { ISegmentedSelect, SegmentedSelect } from './SegmentedSelect';

const Template: Story<ISegmentedSelect> = (args) => <SegmentedSelect {...args} />;

export default {
  title: 'Components/SegmentedSelect',
  component: SegmentedSelect,
  argTypes: {
    onSelect: { action: 'selected' },
  },
  args: {
    choices: [
      {
        id: 'first',
        name: 'First',
        order: 0,
      },
      {
        id: 'second',
        name: 'Second',
        order: 3,
      },
      {
        id: 'third',
        name: 'Third',
        order: 2,
      },
    ],
    initialSelectedId: 'first',
    selectedId: 'first',
  },
};

export const SegmentedSelectDefault = Template.bind({});
