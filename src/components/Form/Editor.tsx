import React from 'react';
import MDEditor from '@uiw/react-md-editor';

export interface IEditor {
  /** Sets the editing mode of the editor
   *  Mode edit is only showing the editing window
   *  Mode live is showing the editing window and preview side by side
   *  Mode preview is supported but currently bugged
   */
  mode?: 'edit' | 'live';
  /** Initial text value of the editor */
  value?: string;
  /** Placeholder value of the editor */
  placeholder?: string;
  /** Initializes the editor with autofocus when set to true */
  autoFocus?: boolean;
  /** Height of the editor */
  height?: number;
  /** Fucntion called when the input is saved */
  onChange?: (value?: string) => void;
}

export const Editor: React.FC<IEditor> = ({
  mode = 'live',
  value,
  placeholder,
  autoFocus,
  height = 320,
  onChange,
}) => (
    <MDEditor
      preview={mode}
      value={value}
      placeholder={placeholder}
      autoFocus={autoFocus}
      height={height}
      onChange={onChange}
    />
  );

export default Editor;
