import React, {Component} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SingleInputField from "../../SingleInputField";

const StyledImprovementNoteForm = styled.div`
    display: flex-block;
    flex-direction: column;
    width: 80%;
    margin: 1rem auto;
    padding: 1rem;
    border: 2px solid green;
    border-radius: 10px;
`;

const StyledImprovementNoteFormSaveButton = styled.div`
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

const StyledImprovementNoteFormDeleteButton = styled.div`
    display: block;
    width: 10rem;
    margin: 1rem auto 0 auto;
    padding: 0.75rem;
    background-color: red;
    color: white;
    cursor: pointer;
    text-align: center;
    border-radius: 5px;
`;

class ImprovementNoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteInputTitle: props.noteTitle ? props.noteTitle : "",
            noteInputContent: props.noteContent ? props.noteContent : "",
            noteTaglist: props.noteTaglist ? props.noteTaglist : []
        };
    }

    handleImprovementNoteSave = () => {
        this.props.doOnSave(
            this.props.noteId,
            this.state.noteInputTitle,
            this.state.noteInputContent
        );
    };

    handleTitleChange = changeEvent => {
        this.setState({
            noteInputTitle: changeEvent.target.value
        });
    };

    handleContentChange = changeEvent => {
        this.setState({
            noteInputContent: changeEvent.target.value
        });
    };

    handleImprovementNoteRemove = () => {
        this.props.doOnRemove(this.props.noteId);
    };

    render() {
        return (
            <StyledImprovementNoteForm>
                <SingleInputField
                    isArea={false}
                    labelText={"Title"}
                    inputPlaceholder={"Your note title"}
                    inputValue={this.state.noteInputTitle}
                    doOnChange={this.handleTitleChange}
                />
                <SingleInputField
                    isArea={true}
                    labelText={"Content"}
                    inputPlaceholder={"Your note content"}
                    inputValue={this.state.noteInputContent}
                    doOnChange={this.handleContentChange}
                />
                <StyledImprovementNoteFormSaveButton
                    onClick={this.handleImprovementNoteSave}
                >
                    Save
                </StyledImprovementNoteFormSaveButton>
                <StyledImprovementNoteFormDeleteButton
                    onClick={this.handleImprovementNoteRemove}
                >
                    Remove
                </StyledImprovementNoteFormDeleteButton>
            </StyledImprovementNoteForm>
        );
    }
}

ImprovementNoteForm.propTypes = {
    doOnSave: PropTypes.func.isRequired,
    doOnRemove: PropTypes.func.isRequired,
    noteId: PropTypes.number.isRequired,
    noteTitle: PropTypes.string,
    noteContent: PropTypes.string,
    noteTaglist: PropTypes.arrayOf(PropTypes.string)
};

export default ImprovementNoteForm;
