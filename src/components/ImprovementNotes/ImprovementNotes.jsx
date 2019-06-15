import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ImprovementNote from './ImprovementNote';

const StyledImprovementNotesWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    & > * {
        flex: 1 1 auto;
    }
`;

const StyledImprovementNotesAddButton = styled.div`
    display: block;
    width: 10rem;
    margin: 1rem auto 0 auto;
    padding: 0.75rem;
    background-color: green;
    color: white;
    cursor: pointer;
    text-align: center;
    border-radius: 5px;
`;

const ImprovementNotes = (props) => {
  const { improvementNotes, addImprovementNote } = props;

  return (
    <React.Fragment>
      <StyledImprovementNotesAddButton onClick={addImprovementNote}>
        Add note
      </StyledImprovementNotesAddButton>
      <StyledImprovementNotesWrapper>
        {improvementNotes && improvementNotes.map(note => (
          <ImprovementNote
            key={note.id}
            noteData={note}
          />
        ))}
      </StyledImprovementNotesWrapper>
    </React.Fragment>
  );
};

ImprovementNotes.defaultProps = {
  improvementNotes: [],
};

ImprovementNotes.propTypes = {
  improvementNotes: PropTypes.arrayOf(PropTypes.shape()),
  addImprovementNote: PropTypes.func.isRequired,
};

export default ImprovementNotes;
