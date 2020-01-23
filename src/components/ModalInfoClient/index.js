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
  ContainerRadius,
} from './styles';

export default function ModalInfoClient({modalVisible, functionOnPressIcon}) {
  const dispatch = useDispatch();
  const [inputTime, setInputTime] = useState(null);
  const [inputNumberWork, setInputNumberWork] = useState(null);
  const [inputHeadquarters, setInputHeadquarters] = useState(1);
  const [inputAge, setInputAge] = useState(null);
  const [inputProduction, setInputProduction] = useState(null);
  const [inputBilling, setInputBilling] = useState(null);
  const [radius1, setRadius1] = useState(true);
  const [radius2, setRadius2] = useState(false);
  function trocaRadius1() {
    setRadius1(true);
    setRadius2(false);
    setInputHeadquarters(1);
  }
  function trocaRadius2() {
    setRadius1(false);
    setRadius2(true);
    setInputHeadquarters(0);
  }
  function saveAddress() {
    console.tron.log('entrou');
    dispatch(
      ActionsRegister.saveInfo(
        inputTime,
        inputNumberWork,
        inputHeadquarters,
        inputAge,
        inputProduction,
        inputBilling
      )
    );
    dispatch(ActionsRegister.closeModalInfo());
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
          <TextBold>Outras Informações</TextBold>
        </ContainerHeader>
        <ScrollView>
          <ContainerBody>
            <TextNormal>Quanto tempo nesse endereço?</TextNormal>
            <InputType
              placeholder="Quanto tempo"
              valueInputText={inputTime}
              functionOnChangeText={text => {
                setInputTime(text);
              }}
            />
            <TextNormal>Sede própria?</TextNormal>
            <ContainerRadius>
              <Radius
                text="SIM"
                nameIcon={radius1 ? 'dot-circle' : 'circle'}
                functionOnPress={() => {
                  trocaRadius1();
                }}
              />
              <Radius
                text="NÃO"
                nameIcon={radius2 ? 'dot-circle' : 'circle'}
                functionOnPress={() => {
                  trocaRadius2();
                }}
              />
            </ContainerRadius>
            <TextNormal>Número de Funcionários</TextNormal>
            <InputType
              placeholder="Número"
              valueInputText={inputNumberWork}
              functionOnChangeText={text => {
                setInputNumberWork(text);
              }}
            />

            <TextNormal>Ano de Fundação</TextNormal>
            <InputType
              placeholder="Ano de fundação"
              valueInputText={inputAge}
              functionOnChangeText={text => {
                setInputAge(text);
              }}
            />
            <TextNormal>Produção Mensal</TextNormal>
            <InputType
              placeholder="Produção Mensal"
              valueInputText={inputProduction}
              functionOnChangeText={text => {
                setInputProduction(text);
              }}
            />
            <TextNormal>Faturamento Mensal</TextNormal>
            <InputType
              placeholder="Faturamento Mensal"
              valueInputText={inputBilling}
              functionOnChangeText={text => {
                setInputBilling(text);
              }}
            />

            <Button
              titleButton="CONFIRMAR"
              functionOnPress={() => {
                saveAddress();
              }}
              disabledButton={false}
            />
          </ContainerBody>
        </ScrollView>
      </Modal>
    </Container>
  );
}
ModalInfoClient.propTypes = {
  modalVisible: PropTypes.bool,
  functionOnPressIcon: PropTypes.func,
};
ModalInfoClient.defaultProps = {
  modalVisible: false,
  functionOnPressIcon: () => {},
};
