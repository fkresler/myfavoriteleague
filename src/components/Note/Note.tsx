import React from 'react';
import { NoteData } from '@/types';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import ReactMarkdown from 'react-markdown';

export interface NoteProps extends NoteData {
  className?: string;
  onDelete?: (id: string) => void;
}

export const Note: React.FC<NoteProps> = ({ id, title, text, tags, onDelete }) => {
  const actionFooter = (
    <>
      {onDelete && (
        <Button variant="destructive" onClick={() => onDelete(id)}>
          Delete note
        </Button>
      )}
    </>
  );

  return (
    <Card key={id} headline={title} footer={onDelete ? actionFooter : undefined}>
      <ReactMarkdown>{text}</ReactMarkdown>
    </Card>
  );
};

export default Note;
