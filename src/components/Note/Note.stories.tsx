import React from 'react';
import { Story } from '@storybook/react';
import { NoteProps, Note } from './Note';

const NoteTemplate: Story<NoteProps> = (args) => <Note {...args} />;

export default {
  title: 'Components/Note',
  component: Note,
  argTypes: {
    onDelete: { action: 'deleted' },
  },
  args: {
    id: 'test',
    datetime: '20200902184500',
    title: 'Note Title',
    text: '**This is markdown**',
    tags: ['Test', 'Some', 'Tags'],
  },
};

export const NoteDefault = NoteTemplate.bind({});
