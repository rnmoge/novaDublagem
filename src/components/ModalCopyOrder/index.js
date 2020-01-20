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
} from './styles';

export default function ModalCopy({
  modalVisible,
  functionOnPressText,
  valueInputCod,
  valueInput,
  onChangeText,
  functionOnChange,
  disabled,
  textExist,
  error,
}) {
  return (
    <Container>
      <Modal visible={modalVisible} transparent animationType="slide">
        <ContainerTotal>
          <ContainerBody>
            <ContainerText>
              <TextInfo>
                Para copiar este pedido adicione estas informações:
              </TextInfo>
            </ContainerText>
            <ContainerInput>
              <InputType
                placeholder="Novo código do cliente"
                valueInputText={valueInputCod}
                functionOnChangeText={te => {
                  functionOnChange(te);
                }}
              />
              {textExist ? (
                <ContainerError>
                  <TextError>Data inválida</TextError>
                </ContainerError>
              ) : null}
              <InputMask
                valueInput={valueInput}
                placeholder="Nova data de entrega"
                onChangeText={text => {
                  onChangeText(text);
                }}
                error={error}
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
  functionOnChange: PropTypes.func,
  onChangeText: PropTypes.func,
  textExist: PropTypes.bool,
  error: PropTypes.bool,
};
ModalCopy.defaultProps = {
  valueInputCod: '',
  valueInput: '',
  modalVisible: true,
  disabled: true,
  functionOnPressText: () => {},
  functionOnChange: () => {},
  onChangeText: () => {},
  textExist: false,
  error: false,
};
