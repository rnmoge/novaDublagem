import React from 'react';
// import {View} from 'react-native';
import PropTypes from 'prop-types';
import {Container, Input, AreaInput, AreaIcon, Icon} from './styles';

export default function InputType({
  placeholder,
  disabledInput,
  passwordOption,
  keyboardTypeInput,
  areaIcon,
  icoName,
  icoSize,
  functionOnChangeText,
  valueInputText,
  functionOnPressIcon,
  disabledButtonIcon,
}) {
  return (
    <Container>
      <AreaInput>
        <Input
          placeholder={placeholder}
          editable={disabledInput}
          passwordOption={passwordOption}
          keyboardTypeInput={keyboardTypeInput}
        />
      </AreaInput>
      {areaIcon ? (
        <AreaIcon onPress={functionOnPressIcon} disabled={disabledButtonIcon}>
          <Icon name={icoName} size={icoSize} />
        </AreaIcon>
      ) : null}
    </Container>
  );
}
Input.propTypes = {
  error: PropTypes.bool,
  disabledInput: PropTypes.bool,
  placeholder: PropTypes.string,
  valueInputText: PropTypes.string,
  keyboardTypeInput: PropTypes.string,
  passwordOption: PropTypes.bool,
  icoName: PropTypes.string,
  icoSize: PropTypes.number,
  areaIcon: PropTypes.bool,
  functionOnChangeText: PropTypes.func,
  functionOnPressIcon: PropTypes.func,
  disabledButtonIcon: PropTypes.bool,
};
Input.defaultProps = {
  error: false,
  disabledInput: true,
  placeholder: 'placeholder',
  valueInputText: '',
  keyboardTypeInput: 'email-address',
  passwordOption: false,
  icoName: 'fonticons',
  icoSize: 22,
  areaIcon: false,
  functionOnChangeText: () => {},
  functionOnPressIcon: () => {},
  disabledButtonIcon: true,
};
