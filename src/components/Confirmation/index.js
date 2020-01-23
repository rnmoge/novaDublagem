import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, Modal, ActivityIndicator, Text} from 'react-native';
import {
  Container,
  Icon,
  AreaIcon,
  ContainerHeader,
  TextBold,
  TextRegular,
  TextBoldTwo,
} from './styles';
import Button from '../Button';

export default function Confirmation({
  nameIcon,
  nameIconTwo,
  placeholder,
  modalVisible,
  functionOnPressButton,
  functionOnPressRight,
  functionOnChangeText,
  functionOnPressText,
  data,
  loading,
}) {
  return (
    <Container>
      <Modal visible={modalVisible} animationType="slide">
        {loading ? (
          <AreaIcon>
            <ActivityIndicator size="large" color="#fff" />
          </AreaIcon>
        ) : (
          <ContainerHeader>
            <AreaIcon>
              <Icon name={nameIcon} />
              <TextBold>CLIENTE ADICIONADO COM SUCESSO!</TextBold>
              <TextRegular>Razão social:</TextRegular>
              <TextBoldTwo>{data.razaoSocial}</TextBoldTwo>
              <TextRegular>CNPJ:</TextRegular>
              <TextBoldTwo>{data.newCnpj}</TextBoldTwo>
              <TextRegular>Endereço Principal:</TextRegular>
              <TextBoldTwo>{data.newAddress}</TextBoldTwo>
            </AreaIcon>
            <Button
              titleButton="CONFIRMAR"
              functionOnPress={() => {
                functionOnPressButton();
              }}
              disabledButton={false}
            />
          </ContainerHeader>
        )}
      </Modal>
    </Container>
  );
}
Modal.propTypes = {
  placeholder: PropTypes.string,
  nameIcon: PropTypes.string,
  nameIconTwo: PropTypes.string,
  modalVisible: PropTypes.bool,
  functionOnPressButton: PropTypes.func,
  functionOnPressRight: PropTypes.func,
  functionOnChangeText: PropTypes.func,
  functionOnPressText: PropTypes.func,
  loading: PropTypes.bool,
};
Modal.defaultProps = {
  nameIcon: 'times',
  nameIconTwo: 'search',
  placeholder: 'TesteModal',
  modalVisible: false,
  loading: true,
  functionOnPressButton: () => {},
  functionOnPressRight: () => {},
  functionOnChangeText: () => {},
  functionOnPressText: () => {},
};
