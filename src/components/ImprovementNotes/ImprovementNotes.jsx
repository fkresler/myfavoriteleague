import React, { Component } from 'react';
import styled from 'styled-components';
import ImprovementNote from './ImprovementNote';
import ImprovementNoteForm from './ImprovementNoteForm';

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

class ImprovementNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentEditableImprovementNote: null,
      playingAsChampionFilter: '',
      playingAgainstChampionFilter: '',
      playingAsRoleFilter: '',
    };
  }

  handleImprovementNoteSave(noteId, noteTitle, noteContent) {
    this.props.updateImprovementNote(noteId, noteTitle, noteContent);
    this.setState({
      currentEditableImprovementNote: null,
    });
  }

  handleImprovementNoteClick(id) {
    const currentEditableNote = this.props.improvementNotes.find(note => note.id === id);
    this.setState({
      currentEditableImprovementNote: currentEditableNote,
    });
  }

  handleImprovementNoteRemove(noteId) {
    this.props.removeImprovementNote(noteId);
    this.setState({
      currentEditableImprovementNote: null,
    });
  }

  handleImprovementNotesAddButtonClick() {
    this.props.addImprovementNote('', '');
  }

  render() {
    const currentImprovementNotes = this.props.improvementNotes;
    const { currentEditableImprovementNote } = this.state;
    return (
      <React.Fragment>
        <StyledImprovementNotesAddButton
          onClick={this.handleImprovementNotesAddButtonClick}
        >
                    Add Note
        </StyledImprovementNotesAddButton>
        {currentEditableImprovementNote && (
        <ImprovementNoteForm
          doOnSave={this.handleImprovementNoteSave}
          doOnRemove={this.handleImprovementNoteRemove}
          noteId={currentEditableImprovementNote.id}
          noteTitle={currentEditableImprovementNote.title}
          noteContent={currentEditableImprovementNote.content}
          noteTaglist={currentEditableImprovementNote.taglist}
        />
        )}
        <StyledImprovementNotesWrapper>
          {currentImprovementNotes
                        && currentImprovementNotes.map(note => (
                          <ImprovementNote
                            key={note.id}
                            noteData={note}
                            doOnClick={this.handleImprovementNoteClick}
                          />
                        ))}
        </StyledImprovementNotesWrapper>
      </React.Fragment>
    );
  }
}

export default ImprovementNotes;
