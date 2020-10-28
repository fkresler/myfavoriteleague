import React from 'react';
import { Story } from '@storybook/react';
import { INoteForm, NoteForm } from './NoteForm';

const NoteFormTemplate: Story<INoteForm> = (args) => <NoteFormTemplate {...args} />;

export default {
  title: 'Containers/NoteForm',
  component: NoteForm,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  args: {
    initTitle: 'Some note title',
    initContent: 'This is some markdown',
  },
};

export const NoteFormDefault = NoteFormTemplate.bind({});
