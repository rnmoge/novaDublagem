import React, {useState, useEffect} from 'react';
import {Modal, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import InputType from '../InputType';
import Button from '../Button';
import Radius from '../Radius';
import {TextNormal, TextBold} from '../../styles/fonts';
import * as ActionsRegister from '../../store/modules/registerclient/actions';
import {
  Container,
  ContainerHeader,
  AreaIcon,
  Icon,
  ContainerBody,
} from './styles';

export default function ModalBank({modalVisible, functionOnPressIcon}) {
  const dispatch = useDispatch();
  const [inputNameBank1, setInputNameBank1] = useState(null);
  const [inputNameBank2, setInputNameBank2] = useState(null);
  const [inputNameBank3, setInputNameBank3] = useState(null);
  const [inputAgency1, setInputAgency1] = useState(null);
  const [inputAgency2, setInputAgency2] = useState(null);
  const [inputAgency3, setInputAgency3] = useState(null);
  const [inputMobile1, setInputMobile1] = useState(null);
  const [inputMobile2, setInputMobile2] = useState(null);
  const [inputMobile3, setInputMobile3] = useState(null);
  const [inputManager1, setInputManager1] = useState(null);
  const [inputManager2, setInputManager2] = useState(null);
  const [inputManager3, setInputManager3] = useState(null);
  const [inputTime1, setInputTime1] = useState(null);
  const [inputTime2, setInputTime2] = useState(null);
  const [inputTime3, setInputTime3] = useState(null);

  function saveBanks() {
    dispatch(ActionsRegister.saveAddress());
    dispatch(ActionsRegister.closeModalAddress());
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
          <TextBold>Endereço</TextBold>
        </ContainerHeader>
        <ScrollView>
          <ContainerBody>
            <TextNormal>Banco 1</TextNormal>
            <TextNormal>Nome Banco</TextNormal>
            <InputType
              placeholder="Nome Banco"
              valueInputText={inputNameBank1}
              functionOnChangeText={text => {
                setInputNameBank1(text);
              }}
            />
            <TextNormal>Agência</TextNormal>
            <InputType
              placeholder="Agência"
              valueInputText={inputAgency1}
              functionOnChangeText={text => {
                setInputAgency1(text);
              }}
            />
            <TextNormal>Telefone</TextNormal>
            <InputType
              placeholder="Telefone"
              valueInputText={inputMobile1}
              functionOnChangeText={text => {
                setInputMobile1(text);
              }}
            />

            <TextNormal>Gerente</TextNormal>
            <InputType
              placeholder="Gerente"
              valueInputText={inputManager1}
              functionOnChangeText={text => {
                setInputManager1(text);
              }}
            />
            <TextNormal>Quanto tempo?</TextNormal>
            <InputType
              placeholder="Cidade"
              valueInputText={inputTime1}
              functionOnChangeText={text => {
                setInputTime1(text);
              }}
            />
            <TextNormal>Banco 2</TextNormal>
            <TextNormal>Nome Banco</TextNormal>
            <InputType
              placeholder="Nome Banco"
              valueInputText={inputNameBank2}
              functionOnChangeText={text => {
                setInputNameBank2(text);
              }}
            />
            <TextNormal>Agência</TextNormal>
            <InputType
              placeholder="Agência"
              valueInputText={inputAgency2}
              functionOnChangeText={text => {
                setInputAgency2(text);
              }}
            />
            <TextNormal>Telefone</TextNormal>
            <InputType
              placeholder="Telefone"
              valueInputText={inputMobile2}
              functionOnChangeText={text => {
                setInputMobile2(text);
              }}
            />

            <TextNormal>Gerente</TextNormal>
            <InputType
              placeholder="Gerente"
              valueInputText={inputManager2}
              functionOnChangeText={text => {
                setInputManager2(text);
              }}
            />
            <TextNormal>Quanto tempo?</TextNormal>
            <InputType
              placeholder="Cidade"
              valueInputText={inputTime2}
              functionOnChangeText={text => {
                setInputTime2(text);
              }}
            />
            <TextNormal>Banco 3</TextNormal>
            <TextNormal>Nome Banco</TextNormal>
            <InputType
              placeholder="Nome Banco"
              valueInputText={inputNameBank3}
              functionOnChangeText={text => {
                setInputNameBank3(text);
              }}
            />
            <TextNormal>Agência</TextNormal>
            <InputType
              placeholder="Agência"
              valueInputText={inputAgency3}
              functionOnChangeText={text => {
                setInputAgency3(text);
              }}
            />
            <TextNormal>Telefone</TextNormal>
            <InputType
              placeholder="Telefone"
              valueInputText={inputMobile3}
              functionOnChangeText={text => {
                setInputMobile3(text);
              }}
            />

            <TextNormal>Gerente</TextNormal>
            <InputType
              placeholder="Gerente"
              valueInputText={inputManager3}
              functionOnChangeText={text => {
                setInputManager3(text);
              }}
            />
            <TextNormal>Quanto tempo?</TextNormal>
            <InputType
              placeholder="Cidade"
              valueInputText={inputTime3}
              functionOnChangeText={text => {
                setInputTime3(text);
              }}
            />
            <Button
              titleButton="CONFIRMAR"
              functionOnPress={() => {
                saveBanks();
              }}
              disabledButton={false}
            />
          </ContainerBody>
        </ScrollView>
      </Modal>
    </Container>
  );
}
ModalBank.propTypes = {
  modalVisible: PropTypes.bool,
  radiusExist: PropTypes.bool,
  functionOnPressIcon: PropTypes.func,
};
ModalBank.defaultProps = {
  modalVisible: false,
  radiusExist: true,
  functionOnPressIcon: () => {},
};
