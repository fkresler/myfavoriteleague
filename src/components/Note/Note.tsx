import React from 'react';
import { INote } from '@/types';
import { noteActions } from '@/providers/UserDataProvider';
import { Button } from 'react-rainbow-components';
import Card from '@/components/Card';

const Note: React.FC<{ data: INote }> = ({ data }) => {
  const {
    id, title, text, dispatch,
  } = data;
  const DeleteAction: React.ReactNode = (
    <Button variant="destructive" onClick={() => dispatch(noteActions.deleteNote(id))}>
      Delete note
    </Button>
  );
  return (
    <Card headline={title} action={DeleteAction}>
      <div>{text}</div>
    </Card>
  );
};

export default Note;
