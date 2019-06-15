import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useLongPress from '../../../utils/useLongPress';

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
    cursor: pointer;
`;

const StyledImprovementNoteContent = styled.div`
    display: block;
    min-height: 5rem;
    line-height: 120%;
`;

const ImprovementNote = (props) => {
  const [isEditable, setEditable] = useState(false);
  const holdToToggleEditableState = useLongPress(() => setEditable(!isEditable), 1000);
  const { id, noteData } = props;
  const { content } = noteData;
  return (
    <StyledImprovementNote {...holdToToggleEditableState}>
      <StyledImprovementNoteContent>
        {isEditable && 'LULZ'}
        {content}
      </StyledImprovementNoteContent>
    </StyledImprovementNote>
  );
};

ImprovementNote.defaultProps = {
  noteData: {
    content: '',
  },
};

ImprovementNote.propTypes = {
  id: PropTypes.string.isRequired,
  noteData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string,
  }),
};

export default ImprovementNote;
