import React from 'react';
import { Story } from '@storybook/react';
import { IEditor, Editor } from './Editor';

const Template: Story<IEditor> = (args) => <Editor {...args} />;

export default {
  title: 'Components/Forms/Editor',
  component: Editor,
  argTypes: {
    onChange: { action: 'saved' },
  },
  args: {
    mode: 'live',
    value: '',
    placeholder: 'Enter something ...',
    autoFocus: false,
    height: 320,
  },
};

export const EditorLive = Template.bind({});
EditorLive.args = {
  mode: 'live',
};

export const EditorEdit = Template.bind({});
EditorEdit.args = {
  mode: 'edit',
};
