import React from 'react';
import PropTypes from 'prop-types';
import {Container, InputText} from './styles';

export default function Input({
  error,
  placeholder,

  disabledInput,
  keyboardTypeInput,
}) {
  return (
    <Container error={error}>
      <InputText
        placeholder={placeholder}
        placeholderTextColor="#707070"
        autoCompleteType="off"
        autoCorrect={false}
        keyboardType={keyboardTypeInput}
        editable={disabledInput}
        autoCapitalize="none"
        electionColor="#707070"
      />
    </Container>
  );
}
Input.propTypes = {
  error: PropTypes.bool,
  disabledInput: PropTypes.bool,
  placeholder: PropTypes.string,
  // value: PropTypes.string,
  keyboardTypeInput: PropTypes.string,
};
Input.defaultProps = {
  error: false,
  disabledInput: true,
  placeholder: 'placeholder',
  // value: '',
  keyboardTypeInput: 'email-address',
};
