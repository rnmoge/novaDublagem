import React from 'react';
// import {View} from 'react-native';
import PropTypes from 'prop-types';
import {Container, AreaInput, Input, AreaIcon, Icon} from './styles';

export default function InputMask({
  inputType,
  InputFormat,
  placeholder,
  valueInput,
  error,
  icoName,
  functionOnChangeText,
  onChangeText,
  onEndEditing,
  areaIcon,
  functionOnPressIcon,
}) {
  return (
    <Container error={error}>
      <AreaInput>
        <Input
          type="datetime"
          options={{
            format: 'DD-MM-YYYY',
          }}
          placeholder={placeholder}
          value={valueInput}
          onChangeText={te => {
            onChangeText(te);
          }}
          onEndEditing={() => onEndEditing()}
        />
      </AreaInput>
      {areaIcon ? (
        <AreaIcon onPress={functionOnPressIcon}>
          <Icon name={icoName} />
        </AreaIcon>
      ) : null}
    </Container>
  );
}
InputMask.propTypes = {
  error: PropTypes.bool,
  inputType: PropTypes.string,
  InputFormat: PropTypes.string,
  placeholder: PropTypes.string,
  valueInput: PropTypes.string,
  icoName: PropTypes.string,
  areaIcon: PropTypes.bool,
  onChangeText: PropTypes.func,
  onEndEditing: PropTypes.func,
  functionOnPressIcon: PropTypes.func,
};
InputMask.defaultProps = {
  inputType: 'datetime',
  InputFormat: 'DD-MM-YYYY',
  error: false,
  placeholder: 'placeholder',
  valueInput: '',
  icoName: 'fonticons',
  areaIcon: false,
  onChangeText: () => {},
  onEndEditing: () => {},
  functionOnPressIcon: () => {},
};
