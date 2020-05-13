import React from 'react';
import { Button, Input, Modal, Textarea } from 'react-rainbow-components';
import { NoteData } from '@/types';

const NoteModal: React.FC<{
  isOpen: boolean;
  onConfirm: (noteData: Partial<NoteData>) => void;
  onClose: () => void;
}> = ({ isOpen, onConfirm, onClose }) => {
  const [noteTitle, setNoteTitle] = React.useState<string>('');
  const [noteText, setNoteText] = React.useState<string>('');

  return (
    <Modal isOpen={isOpen} onRequestClose={() => onClose()}>
      <form id="add-note-form">
        <Input
          placeholder="The note title ..."
          value={noteTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNoteTitle(e.target.value)}
        />
        <Textarea
          value={noteText}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNoteText(e.target.value)}
          placeholder="Your note ... go ahead, never stop learning"
        />
      </form>
      <Button
        variant="success"
        onClick={() =>
          onConfirm({
            title: noteTitle,
            text: noteText,
          })
        }
      >
        Save Note
      </Button>
    </Modal>
  );
};

export default NoteModal;
