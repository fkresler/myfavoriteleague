import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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

const StyledImprovementNoteHeadline = styled.div`
    display: block;
    font-size: 120%;
    font-weight: bold;
    line-height: 150%;
`;

const StyledImprovementNoteContent = styled.div`
    display: block;
    min-height: 5rem;
    line-height: 120%;
`;

const ImprovementNote = props => {
    return (
        <StyledImprovementNote
            onClick={() => props.doOnClick(props.noteData.id)}
        >
            <StyledImprovementNoteHeadline>
                {props.noteData.title}
            </StyledImprovementNoteHeadline>
            <StyledImprovementNoteContent>
                {props.noteData.content}
            </StyledImprovementNoteContent>
        </StyledImprovementNote>
    );
};

ImprovementNote.propTypes = {
    doOnClick: PropTypes.func,
    noteData: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string,
        content: PropTypes.string,
        taglist: PropTypes.arrayOf(PropTypes.string)
    })
};

export default ImprovementNote;
