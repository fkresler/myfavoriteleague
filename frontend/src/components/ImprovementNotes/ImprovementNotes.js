import React, {Component} from "react";
import styled from "styled-components";
import ImprovementNote from "./ImprovementNote";

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
            currentEditableImprovementNoteId: "",
            playingAsChampionFilter: "",
            playingAgainstChampionFilter: "",
            playingAsRoleFilter: ""
        };
    }

    handleImprovementNotesAddButtonClick = () => {
        this.props.addImprovementNote("", "");
    };

    render() {
        let currentImprovementNotes = this.props.improvementNotes;
        return (
            <React.Fragment>
                <StyledImprovementNotesAddButton
                    onClick={this.handleImprovementNotesAddButtonClick}
                >
                    Add Note
                </StyledImprovementNotesAddButton>
                <StyledImprovementNotesWrapper>
                    {currentImprovementNotes &&
                        currentImprovementNotes.map(note => {
                            return (
                                <ImprovementNote
                                    key={note.id}
                                    noteData={note}
                                />
                            );
                        })}
                </StyledImprovementNotesWrapper>
            </React.Fragment>
        );
    }
}

export default ImprovementNotes;
