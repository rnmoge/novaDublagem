import React from 'react';
// import {View} from 'react-native';
import PropTypes from 'prop-types';
import {
  Container,
  TextPrimary,
  ContainerText,
  ContainerInput,
  Input,
  AreaInput,
  TextInput,
  AreaIcon,
  Icon,
} from './styles';

export default function InputClick({
  textPrimary,
  textSecundary,
  icoName,
  functionOnpressInput,
  error,
}) {
  return (
    <Container>
      <ContainerText>
        <TextPrimary>{textPrimary}</TextPrimary>
      </ContainerText>
      <ContainerInput error={error}>
        <AreaInput onPress={functionOnpressInput}>
          <Input>
            <TextInput>{textSecundary}</TextInput>
          </Input>
        </AreaInput>
        <AreaIcon>
          <Icon name={icoName} />
        </AreaIcon>
      </ContainerInput>
    </Container>
  );
}
InputClick.propTypes = {
  textPrimary: PropTypes.string,
  textSecundary: PropTypes.string,
  error: PropTypes.bool,
  // disabledInput: PropTypes.bool,
  // placeholder: PropTypes.string,
  // valueInputText: PropTypes.string,
  // keyboardTypeInput: PropTypes.string,
  // passwordOption: PropTypes.bool,
  icoName: PropTypes.string,
  // icoSize: PropTypes.number,
  // areaIcon: PropTypes.bool,
  // functionOnChangeText: PropTypes.func,
  functionOnpressInput: PropTypes.func,
  // disabledButtonIcon: PropTypes.bool,
};
InputClick.defaultProps = {
  textPrimary: 'TextPrimary',
  textSecundary: 'TextSecundary',
  error: false,
  // disabledInput: true,
  // placeholder: 'placeholder',
  // valueInputText: '',
  // keyboardTypeInput: 'email-address',
  // passwordOption: false,
  icoName: 'fonticons',
  // icoSize: 22,
  // areaIcon: false,
  // functionOnChangeText: () => {},
  functionOnpressInput: () => {},
  // disabledButtonIcon: true,
};
