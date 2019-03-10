import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledToggleStateButton = styled.div`
    display: block;
    margin: 1rem auto;
    width: ${({isFullWidth}) => (isFullWidth ? "100%" : "auto")};
    box-sizing: border-box;
    padding: 0.5rem;
    border-radius: 10px;
    background-color: green;
    color: white;
`;

const ToggleStateButton = props => {
    return (
        <StyledToggleStateButton
            isActive={props.isActive}
            isFullWidth={props.isFullWidth}
        >
            {props.text}
        </StyledToggleStateButton>
    );
};

ToggleStateButton.propTypes = {
    isActive: PropTypes.bool,
    text: PropTypes.string,
    isFullWidth: PropTypes.bool
};

export default ToggleStateButton;
