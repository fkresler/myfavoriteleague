import React, {Component} from "react";
import styled from "styled-components";
import ImprovementNote from "./ImprovementNote";
import ImprovementNoteForm from "./ImprovementNoteForm";

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
            playingAsChampionFilter: "",
            playingAgainstChampionFilter: "",
            playingAsRoleFilter: ""
        };
    }

    handleImprovementNoteSave = (noteId, noteTitle, noteContent) => {
        this.props.updateImprovementNote(noteId, noteTitle, noteContent);
        this.setState({
            currentEditableImprovementNote: null
        });
    };

    handleImprovementNoteClick = id => {
        let currentEditableNote = this.props.improvementNotes.filter(note => {
            return note.id === id;
        });
        this.setState({
            currentEditableImprovementNote: currentEditableNote
        });
    };

    handleImprovementNotesAddButtonClick = () => {
        this.props.addImprovementNote("Dummy", "LUL");
    };

    render() {
        console.log("REnder", this.state);
        let currentImprovementNotes = this.props.improvementNotes;
        let currentEditableImprovementNote = this.state
            .currentEditableImprovementNote;
        console.log("After-render", currentEditableImprovementNote);
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
                        noteId={currentEditableImprovementNote.id}
                        noteTitle={currentEditableImprovementNote.title}
                        noteContent={currentEditableImprovementNote.content}
                        noteTaglist={currentEditableImprovementNote.taglist}
                    />
                )}
                <StyledImprovementNotesWrapper>
                    {currentImprovementNotes &&
                        currentImprovementNotes.map(note => {
                            return (
                                <ImprovementNote
                                    key={note.id}
                                    noteData={note}
                                    doOnClick={this.handleImprovementNoteClick}
                                />
                            );
                        })}
                </StyledImprovementNotesWrapper>
            </React.Fragment>
        );
    }
}

export default ImprovementNotes;
