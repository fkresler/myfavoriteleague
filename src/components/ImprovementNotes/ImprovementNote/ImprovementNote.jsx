import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useLongPress from 'Utils/useLongPress';

import SingleInputField from 'Components/SingleInputField';

const StyledImprovementNote = styled.div`
    display: flex-block;
    flex-direction: column;
    margin: 1rem;
    min-width: 15rem;
    max-width: 100%;
    padding: 0.5rem;
    border-radius: 10px;
    background-color: #fff6bc;
    background-image: linear-gradient(mix(#fff6bc, white, 90%), #fff6bc);
    box-shadow: 0 1px 0 #b1ab85;
`;

const StyledImprovementNoteContent = styled.div`
    display: block;
    min-height: 5rem;
    line-height: 120%;
`;

const StyledImprovementNoteRemoveButton = styled.button`
    display: block;
    border-radius: 5px;
    background-color: red;
    cursor: pointer;
`;

const ImprovementNote = (props) => {
  const {
    noteData,
    updateImprovementNote,
    toggleImprovementNoteAsCurrentObjective,
    toggleImprovementNoteTag,
    toggleImprovementNotePlayingAsTag,
    toggleImprovementNotePlayingAgainstTag,
    removeImprovementNote,
  } = props;
  const { id, content, isCurrentObjective } = noteData;
  const holdToToggleEditableState = useLongPress(
    () => toggleImprovementNoteAsCurrentObjective(id),
    1000,
  );

  const updateNoteByContent = (newContent) => {
    updateImprovementNote(id, newContent);
  };

  return (
    <StyledImprovementNote {...holdToToggleEditableState}>
      <StyledImprovementNoteContent>
        <SingleInputField
          isArea
          inputPlaceholder="Your note content"
          initialInputValue={content}
          onSubmit={updateNoteByContent}
        />
      </StyledImprovementNoteContent>
      <StyledImprovementNoteRemoveButton onClick={() => removeImprovementNote(id)}>
        Delete
      </StyledImprovementNoteRemoveButton>
    </StyledImprovementNote>
  );
};

ImprovementNote.defaultProps = {
  noteData: {
    content: '',
    isCurrentObjective: false,
  },
};

ImprovementNote.propTypes = {
  noteData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string,
    isCurrentObjective: PropTypes.bool,
  }),
  updateImprovementNote: PropTypes.func.isRequired,
  toggleImprovementNoteAsCurrentObjective: PropTypes.func.isRequired,
  toggleImprovementNoteTag: PropTypes.func.isRequired,
  toggleImprovementNotePlayingAsTag: PropTypes.func.isRequired,
  toggleImprovementNotePlayingAgainstTag: PropTypes.func.isRequired,
  removeImprovementNote: PropTypes.func.isRequired,
};

export default ImprovementNote;
