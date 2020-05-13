import React from 'react';
import { INote } from '@/types';
import { noteActions } from '@/providers/UserDataProvider';
import { Button, Card } from 'react-rainbow-components';

const Note: React.FC<{ data: INote }> = ({ data }) => {
  const { id, title, text, dispatch } = data;
  return (
    <Card key={id}>
      {title && <div>{title}</div>}
      <div>{text}</div>
      <Button variant="destructive" onClick={() => dispatch(noteActions.deleteNote(id))}>
        Delete note
      </Button>
    </Card>
  );
};

export default Note;
