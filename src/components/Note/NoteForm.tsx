import React from 'react';
import styled from 'styled-components';
import { TextInput } from '@/components/Form/TextInput';
import { Editor } from '@/components/Form/Editor';
import { Button } from '@/components/Button';
import { NoteData } from '@/types';

export interface INoteForm {
  /** Initial title when loading the form */
  initTitle?: string;
  /** Initial content when loading the form */
  initContent?: string;
  /** Initial tags when loading the form */
  initTags?: string[];
  /** Function that is called when submitting the note data */
  onSave?: (e: Partial<NoteData>) => void;
}

const FormSpacing = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > * {
    margin: 1rem 0;
  }
`;

export const NoteForm: React.FC<INoteForm> = ({ initTitle, initContent, initTags, onSave }) => {
  const [noteTitle, setNoteTitle] = React.useState<string>(initTitle || '');
  const [noteContent, setNoteContent] = React.useState<string | undefined>(initContent);
  const [noteTags, setNoteTags] = React.useState<string[]>(initTags || []);

  return (
    <FormSpacing>
      <TextInput
        id="note-title"
        isFullWidth
        label="Title"
        value={noteTitle}
        placeholder="Enter your title"
        onChange={(e) => setNoteTitle(e.target.value)}
      />
      <Editor
        mode="edit"
        placeholder="Enter your learnings ..."
        value={noteContent}
        onChange={setNoteContent}
      />
      {onSave && (
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
      )}
    </FormSpacing>
  );
};

export default NoteForm;
