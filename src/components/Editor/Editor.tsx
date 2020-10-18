import React from 'react';
import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';

export interface IEditor {
  /** Sets the editing mode of the editor */
  mode?: 'preview' | 'edit' | 'live';
  /** Initial text value of the editor */
  initialValue?: string;
  /** Fucntion called when the input is saved */
  onSave?: (value?: string) => void;
}

const SaveButton = styled.button`
  display: block;
  margin: 1rem auto;
  width: 100%;
  padding: 0.5rem;
  text-align: center;
  cursor: pointer;
`;

export const Editor: React.FC<IEditor> = ({ mode = 'live', initialValue, onSave }) => {
  const [editorValue, setEditorValue] = React.useState<string | undefined>(initialValue);

  const doSave = () => {
    if (onSave) {
      onSave(editorValue);
    }
  };

  return (
    <div>
      <MDEditor value={editorValue} onChange={setEditorValue} preview={mode} />
      <SaveButton onClick={doSave}>Save</SaveButton>
    </div>
  );
};

export default Editor;
