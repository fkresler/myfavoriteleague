import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInputWrapper = styled.div`
    display: flex-block;
    flex-direction: column;
    width: 100%;
`;

const StyledTextInputLabel = styled.label`
  display: block;
`;

const StyledTextInputField = styled.input.attrs({
  type: 'text',
  placeholder: props => props.inputPlaceholder,
  value: props => props.inputValue,
})`
    display: block;
    width: 100%;
`;

const StyledTextAreaInputField = styled.input.attrs({
  type: 'textarea',
  placeholder: props => props.inputPlaceholder,
  value: props => props.inputValue,
})`
    display: block;
    width: 100%;
    resize: none;
`;

const StatefulInputField = (props) => {
  const {
    isArea,
    labelText,
    inputPlaceholder,
    inputValue,
    doOnChange,
  } = props;
  const inputElement = isArea ? (
    <StyledTextAreaInputField
      placeholder={inputPlaceholder}
      value={inputValue}
      onChange={doOnChange}
    />
  ) : (
    <StyledTextInputField
      placeholder={inputPlaceholder}
      value={inputValue}
      onChange={doOnChange}
    />
  );
  return (
    <StyledInputWrapper>
      <StyledTextInputLabel>
        {labelText}
      </StyledTextInputLabel>
      {inputElement}
    </StyledInputWrapper>
  );
};

StatefulInputField.defaultProps = {
  isArea: false,
  inputValue: '',
};

StatefulInputField.propTypes = {
  isArea: PropTypes.bool,
  labelText: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  inputValue: PropTypes.string,
  doOnChange: PropTypes.func.isRequired,
};

export default StatefulInputField;
