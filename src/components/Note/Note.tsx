import React from 'react';
import { NoteData } from '@/types';
import { Button } from '@/components/Button';
import { Card, CardSeperator } from '@/components/Card';
import ReactMarkdown from 'react-markdown';

export interface NoteProps extends NoteData {
  className?: string;
  onDelete?: (id: string) => void;
}

const Note: React.FC<NoteProps> = ({ id, title, text, tags, onDelete }) => {
  return (
    <Card key={id} headline={title}>
      <ReactMarkdown>{text}</ReactMarkdown>
      <CardSeperator />
      <div>
        {onDelete && (
          <Button variant="destructive" onClick={() => onDelete(id)}>
            Delete note
          </Button>
        )}
      </div>
    </Card>
  );
};

export default Note;
