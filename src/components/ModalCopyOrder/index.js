import React from 'react';
import {Modal} from 'react-native';
import PropTypes from 'prop-types';
import Button from '../Button';

import InputType from '../InputType';
import InputMask from '../InputMask';
import {
  Container,
  ContainerTotal,
  ContainerBody,
  TextInfo,
  ContainerText,
  ContainerInput,
  ContainerError,
  TextError,
  ContainerIcon,
  AreaIcon,
  Icon,
} from './styles';

export default function ModalCopy({
  modalVisible,
  functionOnPressText,
  functionOnpress,
  valueInputCod,
  valueInput,
  onChangeText,
  functionOnChange,
  disabled,
  textExist,
}) {
  return (
    <Container>
      <Modal visible={modalVisible} transparent animationType="slide">
        <ContainerTotal>
          <ContainerBody>
            <ContainerText>
              <ContainerIcon
                onPress={() => {
                  functionOnpress();
                }}>
                <AreaIcon>
                  <Icon name="times" />
                </AreaIcon>
              </ContainerIcon>
              <TextInfo>Adicione estas informações:</TextInfo>
            </ContainerText>
            <ContainerInput>
              <InputType
                placeholder="Novo código do cliente"
                valueInputText={valueInputCod}
                functionOnChangeText={te => {
                  functionOnChange(te);
                }}
                number={14}
              />
              {textExist ? (
                <ContainerError>
                  <TextError>Data inválida</TextError>
                </ContainerError>
              ) : (
                <TextError />
              )}
              <InputMask
                valueInput={valueInput}
                placeholder="Nova data de entrega"
                onChangeText={text => {
                  onChangeText(text);
                }}
              />
            </ContainerInput>
            <Button
              disabledButton={disabled}
              titleButton="PROSSEGUIR"
              functionOnPress={() => {
                functionOnPressText();
              }}
            />
          </ContainerBody>
        </ContainerTotal>
      </Modal>
    </Container>
  );
}
ModalCopy.propTypes = {
  valueInputCod: PropTypes.string,
  valueInput: PropTypes.string,
  modalVisible: PropTypes.bool,
  disabled: PropTypes.bool,
  functionOnPressText: PropTypes.func,
  functionOnpress: PropTypes.func,
  functionOnChange: PropTypes.func,
  onChangeText: PropTypes.func,
  textExist: PropTypes.bool,
};
ModalCopy.defaultProps = {
  valueInputCod: '',
  valueInput: '',
  modalVisible: true,
  disabled: true,
  functionOnPressText: () => {},
  functionOnpress: () => {},
  functionOnChange: () => {},
  onChangeText: () => {},
  textExist: true,
};
