import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ContentEditable from 'react-contenteditable';

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

const StyledTextAreaInputField = styled.div`
  display: block;
  width: 100%;
  height: auto;
  min-height: 5rem;
  margin: 0.5rem 0;
`;

const StatefulInputField = (props) => {
  const {
    isArea,
    labelText,
    inputPlaceholder,
    initialInputValue,
    onSubmit,
  } = props;
  const doOnSave = (newValue) => {
    onSubmit(newValue);
  };
  const inputElement = isArea ? (
    <StyledTextAreaInputField>
      <ContentEditable
        onChange={evt => doOnSave(evt.target.value)}
        disabled={false}
        html={initialInputValue}
      />
    </StyledTextAreaInputField>
  ) : (
    <StyledTextInputField
      placeholder={inputPlaceholder}
      value={initialInputValue}
      onChange={evt => doOnSave(evt.target.value)}
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
  labelText: '',
  inputPlaceholder: '',
  initialInputValue: '',
  onSubmit: () => {},
};

StatefulInputField.propTypes = {
  isArea: PropTypes.bool,
  labelText: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  initialInputValue: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default StatefulInputField;
