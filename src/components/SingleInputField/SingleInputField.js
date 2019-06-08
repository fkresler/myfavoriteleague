import React, {Component} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInputWrapper = styled.div`
    display: flex-block;
    flex-direction: column;
    width: 100%;
`;

const StyledTextInputField = styled.input.attrs({
    type: "text",
    placeholder: props => props.inputPlaceholder,
    value: props => props.inputValue
})`
    display: block;
    width: 100%;
`;

const StyledTextAreaInputField = styled.input.attrs({
    type: "textarea",
    placeholder: props => props.inputPlaceholder,
    value: props => props.inputValue
})`
    display: block;
    width: 100%;
    resize: none;
`;

const StyledSuccessMessage = styled.div`
    display: block;
    color: green;
`;

const StyledErrorMessage = styled.div`
    display: block;
    color: red;
`;

const StatefulInputField = props => {
    const inputElement = props.isArea ? (
        <StyledTextAreaInputField
            placeholder={props.inputPlaceholder}
            value={props.inputValue}
            onChange={props.doOnChange}
        />
    ) : (
        <StyledTextInputField
            placeholder={props.inputPlaceholder}
            value={props.inputValue}
            onChange={props.doOnChange}
        />
    );
    return (
        <StyledInputWrapper>
            <label>{props.labelText}</label>
            {inputElement}
        </StyledInputWrapper>
    );
};

StatefulInputField.propTypes = {
    isArea: PropTypes.bool,
    labelText: PropTypes.string,
    inputPlaceholder: PropTypes.string,
    inputValue: PropTypes.string,
    doOnChange: PropTypes.func.isRequired,
    successMessages: PropTypes.arrayOf(PropTypes.string),
    errorMessages: PropTypes.arrayOf(PropTypes.string)
};

export default StatefulInputField;
