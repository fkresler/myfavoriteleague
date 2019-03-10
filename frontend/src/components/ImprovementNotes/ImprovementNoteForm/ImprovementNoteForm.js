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

class ImprovementNoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteInputTitle: "",
            noteInputContent: ""
        };
    }

    render() {
        return <StyledImprovementNoteForm />;
    }
}

ImprovementNoteForm.propTypes = {
    noteTitle: PropTypes.string,
    noteContent: PropTypes.string,
    noteTaglist: PropTypes.arrayOf(PropTypes.string)
};

export default ImprovementNoteForm;
