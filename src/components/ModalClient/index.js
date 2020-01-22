import React, {useState} from 'react';
import {Modal, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import InputType from '../InputType';
import InputMaskCel from '../InputMaskCel';
import Button from '../Button';
import {TextNormal, TextBold} from '../../styles/fonts';
import * as ActionsRegister from '../../store/modules/registerclient/actions';
import {
  Container,
  ContainerHeader,
  AreaIcon,
  Icon,
  ContainerBody,
} from './styles';

export default function ModalClient({
  modalExist,
  modalVisible,
  functionOnPressIcon,
  functionOnPressButton,
}) {
  const dispatch = useDispatch();
  const [inputRazonClient1, setInputRazonClient1] = useState();
  const [inputRazonClient2, setInputRazonClient2] = useState(null);
  const [inputRazonClient3, setInputRazonClient3] = useState(null);
  const [inputMobileClient1, setInputMobileClient1] = useState(null);
  const [inputMobileClient2, setInputMobileClient2] = useState(null);
  const [inputMobileClient3, setInputMobileClient3] = useState(null);
  const [inputBuyClient1, setInputBuyClient1] = useState(null);
  const [inputBuyClient2, setInputBuyClient2] = useState(null);
  const [inputBuyClient3, setInputBuyClient3] = useState(null);
  const [inputRazonProvider1, setInputRazonProvider1] = useState(null);
  const [inputRazonProvider2, setInputRazonProvider2] = useState(null);
  const [inputRazonProvider3, setInputRazonProvider3] = useState(null);
  const [inputMobileProvider1, setInputMobileProvider1] = useState(null);
  const [inputMobileProvider2, setInputMobileProvider2] = useState(null);
  const [inputMobileProvider3, setInputMobileProvider3] = useState(null);
  const [inputBuyProvider1, setInputBuyProvider1] = useState(null);
  const [inputBuyProvider2, setInputBuyProvider2] = useState(null);
  const [inputBuyProvider3, setInputBuyProvider3] = useState(null);
  function saveClients() {
    if (inputRazonClient2 === null) {
      console.tron.log('entrou1');
      setInputRazonClient2(null);
      setInputMobileClient2(null);
      setInputBuyProvider2(null);
    }
    if (inputRazonClient3 === null) {
      console.tron.log('entrou1');
      setInputRazonClient3(null);
      setInputMobileClient3(null);
      setInputBuyProvider3(null);
    }
    dispatch(
      ActionsRegister.saveClient(
        inputRazonClient1,
        inputMobileClient1,
        inputBuyClient1,
        inputRazonClient2,
        inputMobileClient2,
        inputBuyClient2,
        inputRazonClient3,
        inputMobileClient3,
        inputBuyClient3
      )
    );
    dispatch(ActionsRegister.closeModalClient());
  }
  function saveProviders() {
    if (inputRazonProvider2 === null) {
      console.tron.log('entrou1');
      setInputRazonProvider2(null);
      setInputMobileProvider2(null);
      setInputBuyProvider2(null);
    }
    if (inputRazonProvider3 === null) {
      console.tron.log('entrou1');
      setInputRazonProvider3(null);
      setInputMobileProvider3(null);
      setInputBuyProvider3(null);
    }
    dispatch(
      ActionsRegister.saveProvider(
        inputRazonProvider1,
        inputMobileProvider1,
        inputBuyProvider1,
        inputRazonProvider2,
        inputMobileProvider2,
        inputBuyProvider2,
        inputRazonProvider3,
        inputMobileProvider3,
        inputBuyProvider3
      )
    );
    dispatch(ActionsRegister.closeModalProvider());
  }
  return (
    <Container>
      <Modal visible={modalVisible} animationType="slide">
        <ContainerHeader>
          <AreaIcon
            onPress={() => {
              functionOnPressIcon();
            }}>
            <Icon name="times" />
          </AreaIcon>
          <TextBold>Cadastro</TextBold>
        </ContainerHeader>
        {modalExist ? (
          <ScrollView>
            <ContainerBody>
              <TextBold>Cliente 1</TextBold>
              <TextNormal>Razão Social</TextNormal>
              <InputType
                placeholder="Razão Social"
                valueInputText={inputRazonClient1}
                functionOnChangeText={text => {
                  setInputRazonClient1(text);
                }}
              />
              <TextNormal>Telefone</TextNormal>
              <InputMaskCel
                placeholder="Telefone"
                valueInput={inputMobileClient1}
                onChangeText={text => {
                  setInputMobileClient1(text);
                }}
              />

              <TextNormal>Compra Mensal</TextNormal>
              <InputType
                placeholder="Compra Mensal"
                valueInputText={inputBuyClient1}
                functionOnChangeText={text => {
                  setInputBuyClient1(text);
                }}
              />
              {/* <ContainerBody>
                <AreaIcon
                  onPress={() => {
                    console.tron.log('entj');
                  }}>
                  <Icon name="plus" />
                </AreaIcon>

                <TextBold>Adicionar cliente</TextBold>
              </ContainerBody> */}

              <TextBold>Cliente 2</TextBold>
              <TextNormal>Razão Social</TextNormal>
              <InputType
                placeholder="Razão Social"
                valueInputText={inputRazonClient2}
                functionOnChangeText={text => {
                  setInputRazonClient2(text);
                }}
              />
              <TextNormal>Telefone</TextNormal>
              <InputMaskCel
                placeholder="Telefone"
                valueInput={inputMobileClient2}
                onChangeText={text => {
                  setInputMobileClient2(text);
                }}
              />

              <TextNormal>Compra Mensal</TextNormal>
              <InputType
                placeholder="Compra Mensal"
                valueInputText={inputBuyClient2}
                functionOnChangeText={text => {
                  setInputBuyClient2(text);
                }}
              />
              <TextBold>Cliente 3</TextBold>
              <TextNormal>Razão Social</TextNormal>
              <InputType
                placeholder="Razão Social"
                valueInputText={inputRazonClient3}
                functionOnChangeText={text => {
                  setInputRazonClient3(text);
                }}
              />
              <TextNormal>Telefone</TextNormal>
              <InputMaskCel
                placeholder="Telefone"
                valueInput={inputMobileClient3}
                onChangeText={text => {
                  setInputMobileClient3(text);
                }}
              />

              <TextNormal>Compra Mensal</TextNormal>
              <InputType
                placeholder="Compra Mensal"
                valueInputText={inputBuyClient3}
                functionOnChangeText={text => {
                  setInputBuyClient3(text);
                }}
              />
              <Button
                titleButton="CONFIRMAR"
                functionOnPress={() => {
                  saveClients();
                }}
                disabledButton={false}
              />
            </ContainerBody>
          </ScrollView>
        ) : (
          <ScrollView>
            <ContainerBody>
              <TextBold>Fornecedor 1</TextBold>
              <TextNormal>Razão Social</TextNormal>
              <InputType
                placeholder="Razão Social"
                valueInputText={inputRazonProvider1}
                functionOnChangeText={text => {
                  setInputRazonProvider1(text);
                }}
              />
              <TextNormal>Telefone</TextNormal>
              <InputMaskCel
                placeholder="Telefone"
                valueInput={inputMobileProvider1}
                onChangeText={text => {
                  setInputMobileProvider1(text);
                }}
              />
              <TextNormal>Compra Mensal</TextNormal>
              <InputType
                placeholder="Compra Mensal"
                valueInputText={inputBuyProvider1}
                functionOnChangeText={text => {
                  setInputBuyProvider1(text);
                }}
              />
              <TextBold>Fornecedor 2</TextBold>
              <TextNormal>Razão Social</TextNormal>
              <InputType
                placeholder="Razão Social"
                valueInputText={inputRazonProvider2}
                functionOnChangeText={text => {
                  setInputRazonProvider2(text);
                }}
              />
              <TextNormal>Telefone</TextNormal>
              <InputMaskCel
                placeholder="Telefone"
                valueInput={inputMobileProvider2}
                onChangeText={text => {
                  setInputMobileProvider2(text);
                }}
              />
              <TextNormal>Compra Mensal</TextNormal>
              <InputType
                placeholder="Compra Mensal"
                valueInputText={inputBuyProvider2}
                functionOnChangeText={text => {
                  setInputBuyProvider2(text);
                }}
              />
              <TextBold>Fornecedor 3</TextBold>
              <TextNormal>Razão Social</TextNormal>
              <InputType
                placeholder="Razão Social"
                valueInputText={inputRazonProvider3}
                functionOnChangeText={text => {
                  setInputRazonProvider3(text);
                }}
              />
              <TextNormal>Telefone</TextNormal>
              <InputMaskCel
                placeholder="Telefone"
                valueInput={inputMobileProvider3}
                onChangeText={text => {
                  setInputMobileProvider3(text);
                }}
              />
              <TextNormal>Compra Mensal</TextNormal>
              <InputType
                placeholder="Compra Mensal"
                valueInputText={inputBuyProvider3}
                functionOnChangeText={text => {
                  setInputBuyProvider3(text);
                }}
              />
              <Button
                titleButton="CONFIRMAR"
                functionOnPress={() => {
                  saveProviders();
                }}
                disabledButton={false}
              />
            </ContainerBody>
          </ScrollView>
        )}
      </Modal>
    </Container>
  );
}
ModalClient.propTypes = {
  modalVisible: PropTypes.bool,
  modalExist: PropTypes.bool,
  functionOnPressIcon: PropTypes.func,
  functionOnPressButton: PropTypes.func,
};
ModalClient.defaultProps = {
  modalVisible: false,
  modalExist: true,
  functionOnPressIcon: () => {},
  functionOnPressButton: () => {},
};
