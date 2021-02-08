import { Story } from '@storybook/react';
import React from 'react';
import { ITagInput, TagInput } from './TagInput';

const Template: Story<ITagInput> = (args) => <TagInput {...args} />;

export default {
  title: 'Components/TagInput',
  component: TagInput,
  argTypes: {
    onTagAdd: { action: 'tag added' },
    onTagRemove: { action: 'tag removed' },
    args: {
      id: 'default-id',
      tags: ['Riven', 'Aatrox', 'Ahri'],
      placeholder: 'Enter your tags, press enter to submit',
      isDisabled: false,
    },
  },
};

export const TagInputBase = Template.bind({});
