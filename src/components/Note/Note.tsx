import React from 'react';
import styled from 'styled-components';
import { NoteData } from '@/types';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import ReactMarkdown from 'react-markdown';
import { Modal } from '@/components/Modal';
import { NoteForm } from './NoteForm';

export interface NoteProps extends NoteData {
  className?: string;
  onEdit?: (data: Partial<NoteData>) => void;
  onDelete?: (id: string) => void;
}

const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;
`;

export const Note: React.FC<NoteProps> = ({ id, title, text, tags, onEdit, onDelete }) => {
  const [isEditOpen, setIsEditOpen] = React.useState<boolean>(false);
  const areActionsAvailable = onEdit || onDelete;
  const actionFooter = (
    <ActionsWrapper>
      {onEdit && (
        <>
          <Button variant="constructive" onClick={() => setIsEditOpen(true)}>
            Edit note
          </Button>
          <Modal isOpen={isEditOpen} showClose onRequestClose={() => setIsEditOpen(false)}>
            <NoteForm
              initTitle={title}
              initContent={text}
              initTags={tags}
              onSave={(noteData) => {
                onEdit(noteData);
                setIsEditOpen(false);
              }}
            />
          </Modal>
        </>
      )}
      {onDelete && (
        <Button variant="destructive" onClick={() => onDelete(id)}>
          Delete note
        </Button>
      )}
    </ActionsWrapper>
  );

  return (
    <Card key={id} headline={title} footer={areActionsAvailable ? actionFooter : undefined}>
      <ReactMarkdown>{text}</ReactMarkdown>
    </Card>
  );
};

export default Note;
