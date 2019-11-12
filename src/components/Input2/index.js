import React from 'react';
import PropTypes from 'prop-types';
import {Container, InputText, AreaInput, AreaIcon, Icon} from './styles';

export default function Input({
  error,
  placeholder,
  disabledInput,
  passwordOption,
  keyboardTypeInput,
  areaIcon,
  icoName,
  colorIcon,
  icoSize,
  functionOnChangeText,
  valueInputText,
  functionOnPressIcon,
  disabledButtonIcon,
}) {
  return (
    <Container error={error}>
      <AreaInput>
        <InputText
          value={valueInputText}
          placeholder={placeholder}
          editable={disabledInput}
          passwordOption={passwordOption}
          keyboardTypeInput={keyboardTypeInput}
          onChangeText={text => functionOnChangeText(text)}
        />
      </AreaInput>
      {areaIcon ? (
        <AreaIcon onPress={functionOnPressIcon} disabled={disabledButtonIcon}>
          <Icon name={icoName} size={icoSize} colorIcon={colorIcon} />
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
  colorIcon: PropTypes.string,
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
  colorIcon: '#707070',
  functionOnChangeText: () => {},
  functionOnPressIcon: () => {},
  disabledButtonIcon: true,
};
