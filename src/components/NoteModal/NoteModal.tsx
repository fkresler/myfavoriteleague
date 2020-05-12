import React from 'react';
import { Button, EditableText, Label, InputGroup, Dialog, TagInput } from '@blueprintjs/core';
import { NoteData } from '@/types';

const NoteModal: React.FC<{
  isOpen: boolean;
  onConfirm: (noteData: Partial<NoteData>) => void;
  onClose: () => void;
}> = ({ isOpen, onConfirm, onClose }) => {
  const [noteTitle, setNoteTitle] = React.useState<string>('');
  const [noteText, setNoteText] = React.useState<string>('');
  const [noteTags, setNoteTags] = React.useState<string[]>([]);

  return (
    <Dialog isOpen={isOpen} onClose={() => onClose()}>
      <form id="add-note-form">
        <Label>
          Title (optional):
          <InputGroup
            placeholder="The note title ..."
            value={noteTitle}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNoteTitle(e.target.value)}
          />
        </Label>
        <EditableText
          multiline
          minLines={8}
          value={noteText}
          onConfirm={(value) => setNoteText(value)}
          placeholder="Your note ... go ahead, never stop learning"
        />
        <TagInput
          placeholder="Add some tags here if you want"
          values={noteTags}
          onAdd={(values) => setNoteTags(values)}
          onRemove={(value) => setNoteTags(noteTags.filter((tag) => tag !== value))}
        />
      </form>
      <Button
        intent="success"
        onClick={() =>
          onConfirm({
            title: noteTitle,
            text: noteText,
            tags: noteTags,
          })
        }
      >
        Save Note
      </Button>
    </Dialog>
  );
};

export default NoteModal;
