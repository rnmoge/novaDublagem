import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import {FlatList, Modal, ActivityIndicator, Text} from 'react-native';
import {
  Container,
  Icon,
  AreaIcon,
  ContainerHeader,
  TextBold,
  TextRegular,
  TextBoldTwo,
  ContainerError,
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
  error,
  nameIconError,
}) {
  const [razon, setRazon] = useState();
  const [cnpj, setCnpj] = useState();
  const [address, setAddress] = useState();
  useEffect(() => {
    if (data !== null) {
      setRazon(data.razaoSocial);
      setCnpj(data.newCnpj);
      setAddress(data.newAddress);
    }
  }, [data]);
  return (
    <Container>
      <Modal visible={modalVisible} animationType="slide">
        {loading ? (
          <AreaIcon>
            <ActivityIndicator size="large" color="#fff" />
          </AreaIcon>
        ) : (
          <ContainerHeader>
            {error ? (
              <>
                <ContainerError>
                  <Icon name={nameIconError} />
                  <TextBold>ERRO AO ADICIONAR O CLIENTE!</TextBold>
                </ContainerError>
                <Button
                  titleButton="CONFIRMAR"
                  functionOnPress={() => {
                    functionOnPressButton();
                  }}
                  disabledButton={false}
                />
              </>
            ) : (
              <>
                <AreaIcon>
                  <Icon name={nameIcon} />
                  <TextRegular>Razão social:</TextRegular>
                  <TextBoldTwo>{razon}</TextBoldTwo>
                  <TextRegular>CNPJ:</TextRegular>
                  <TextBoldTwo>{cnpj}</TextBoldTwo>
                  <TextRegular>Endereço Principal:</TextRegular>
                  <TextBoldTwo>{address}</TextBoldTwo>
                </AreaIcon>
                <Button
                  titleButton="CONFIRMAR"
                  functionOnPress={() => {
                    functionOnPressButton();
                  }}
                  disabledButton={false}
                />
              </>
            )}
          </ContainerHeader>
        )}
      </Modal>
    </Container>
  );
}
Modal.propTypes = {
  placeholder: PropTypes.string,
  nameIcon: PropTypes.string,
  nameIconError: PropTypes.string,
  nameIconTwo: PropTypes.string,
  modalVisible: PropTypes.bool,
  functionOnPressButton: PropTypes.func,
  functionOnPressRight: PropTypes.func,
  functionOnChangeText: PropTypes.func,
  functionOnPressText: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.bool,
};
Modal.defaultProps = {
  nameIcon: 'times',
  nameIconError: 'times',
  nameIconTwo: 'search',
  placeholder: 'TesteModal',
  modalVisible: false,
  loading: true,
  error: false,
  functionOnPressButton: () => {},
  functionOnPressRight: () => {},
  functionOnChangeText: () => {},
  functionOnPressText: () => {},
};
