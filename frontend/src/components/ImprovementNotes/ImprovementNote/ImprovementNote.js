import React, {Component} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ToggleStateButton from "../../ToggleStateButton";

const StyledImprovementNote = styled.div`
    display: flex-block;
    flex-direction: column;
    min-width: 15rem;
    max-width: 100%;
    padding: 0.5rem;
    border-radius: 10px;
    background-color: #fff6bc;
    background-image: linear-gradient(mix(#fff6bc, white, 90%), #fff6bc);
    box-shadow: 0 1px 0 #b1ab85;
`;

const StyledImprovementNoteHeadline = styled.div`
    font-size: 120%;
    font-weight: bold;
    line-height: 150%;

    div {
        width: 100%;
        height: 100%;
    }
`;

const StyledImprovementNoteContent = styled.div`
    line-height: 150%;

    div {
        width: 100%;
        height: 100%;
        min-height: 5rem;
    }
`;

class ImprovementNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditable: false
        };
    }

    toggleEditableState = () => {
        isNoteEditable = this.state.isEditable;
        this.setState({
            isEditable: !isNoteEditable
        });
    };

    render() {
        const isNoteEditable = this.state.isEditable;
        const toggleStateButtonText = isNoteEditable ? "Save" : "Edit";
        return (
            <StyledImprovementNote>
                <StyledImprovementNoteHeadline>
                    <div contenteditable="{isNoteEditable}">{props.title}</div>
                </StyledImprovementNoteHeadline>
                <StyledImprovementNoteContent>
                    <div contenteditable="{isNoteEditable}">
                        {props.content}
                    </div>
                </StyledImprovementNoteContent>
                <ToggleStateButton
                    onClick={() => this.toggleEditableState}
                    isActive={isNoteEditable}
                    text={toggleStateButtonText}
                    isFullWidth={true}
                />
            </StyledImprovementNote>
        );
    }
}

ImprovementNote.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    content: PropTypes.string,
    taglist: PropTypes.arrayOf(PropTypes.string),
    doSaveImprovementNote: PropTypes.func.isRequired
};

export default ImprovementNote;
