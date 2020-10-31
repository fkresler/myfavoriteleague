import React from 'react';
import { Story } from '@storybook/react';
import { INoteForm, NoteForm } from './NoteForm';

const NoteFormTemplate: Story<INoteForm> = (args) => <NoteForm {...args} />;

export default {
  title: 'Components/NoteForm',
  component: NoteForm,
  argTypes: {
    onSave: { action: 'clicked' },
  },
  args: {
    initTitle: 'Some note title',
    initContent: 'This is some markdown',
  },
};

export const NoteFormDefault = NoteFormTemplate.bind({});
