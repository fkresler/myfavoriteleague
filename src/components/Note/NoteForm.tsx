import React from 'react';
import { TextInput } from '@/components/Form/TextInput';
import { Editor } from '@/components/Form/Editor';
import { Button } from '@/components/Button';
import { NoteData } from '@/types';

export interface INoteForm {
  initTitle?: string;
  initContent?: string;
  onSave?: (e: Partial<NoteData>) => void;
}

export const NoteForm: React.FC<INoteForm> = ({ initTitle, initContent, onSave = () => {} }) => {
  const [noteTitle, setNoteTitle] = React.useState<string>(initTitle || '');
  const [noteContent, setNoteContent] = React.useState<string | undefined>(initContent);
  return (
    <div>
      <TextInput
        id="note-title"
        isFullWidth
        label="Title"
        value={noteTitle}
        placeholder="Enter your title"
        onChange={(e) => setNoteTitle(e.target.value)}
      />
      <Editor
        placeholder="Enter your learnings ..."
        value={noteContent}
        onChange={setNoteContent}
      />
      <Button
        isFullWidth
        onClick={() =>
          onSave({
            title: noteTitle,
            text: noteContent,
          })
        }
      >
        Save my note
      </Button>
    </div>
  );
};

export default NoteForm;
