import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { IEditor, Editor } from './Editor';

const Template: Story<IEditor> = (args) => <Editor {...args} />;

export default {
  title: 'Components/Editor',
  component: Editor,
  argTypes: {
    onSave: { action: 'saved' },
  },
  args: {
    initialValue: '',
  },
};

export const EditorDefault = Template.bind({});
