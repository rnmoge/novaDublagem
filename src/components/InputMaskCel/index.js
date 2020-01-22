import React from 'react';
// import {View} from 'react-native';
import PropTypes from 'prop-types';
import {Container, AreaInput, Input, AreaIcon, Icon} from './styles';

export default function InputMaskCel({
  placeholder,
  valueInput,
  error,
  icoName,

  onChangeText,
  onEndEditing,
  areaIcon,
  functionOnPressIcon,
}) {
  return (
    <Container error={error}>
      <AreaInput>
        <Input
          type="cel-phone"
          withDDD
          dddMask="(99) "
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
InputMaskCel.propTypes = {
  error: PropTypes.bool,
  placeholder: PropTypes.string,
  valueInput: PropTypes.string,
  icoName: PropTypes.string,
  areaIcon: PropTypes.bool,
  onChangeText: PropTypes.func,
  onEndEditing: PropTypes.func,
  functionOnPressIcon: PropTypes.func,
};
InputMaskCel.defaultProps = {
  error: false,
  placeholder: 'placeholder',
  valueInput: '',
  icoName: 'fonticons',
  areaIcon: false,
  onChangeText: () => {},
  onEndEditing: () => {},
  functionOnPressIcon: () => {},
};
