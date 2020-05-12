import React from 'react';
import { INote } from '@/types';
import { noteActions } from '@/providers/UserDataProvider';
import { H5, Text, Button, Card, Elevation, TagInput } from '@blueprintjs/core';

const Note: React.FC<{ data: INote }> = ({ data }) => {
  const { id, title, text, tags, dispatch } = data;
  return (
    <Card key={id} elevation={Elevation.THREE}>
      {title && <H5>{title}</H5>}
      <Text>{text}</Text>
      <TagInput
        values={tags}
        onAdd={(newTags) => {
          dispatch(noteActions.setNoteTags(id, newTags));
        }}
        onRemove={(removedTag) => {
          dispatch(noteActions.removeNoteTag(id, removedTag));
        }}
      />
      <Button intent="danger" onClick={() => dispatch(noteActions.deleteNote(id))}>
        Delete note
      </Button>
    </Card>
  );
};

export default Note;
