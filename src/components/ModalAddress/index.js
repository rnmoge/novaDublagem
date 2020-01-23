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

export default function ModalAddress({
  modalVisible,
  functionOnPressIcon,
  radiusExist,
}) {
  const dispatch = useDispatch();
  const {address, newData} = useSelector(state => state.registerclient);
  const [inputCep, setInputCep] = useState();
  const [inputAddress, setInputAddress] = useState();
  const [inputNumber, setInputNumber] = useState();
  const [inputDistrict, setInputDistrict] = useState();
  const [inputCity, setInputCity] = useState();
  const [inputUf, setInputUf] = useState();
  const [inputComplement, setInputComplement] = useState();
  const [codCity, setCodCity] = useState();
  const [codParent, setCodParent] = useState();
  const [parent, setParent] = useState();
  const [radius1, setRadius1] = useState(false);
  const [radius2, setRadius2] = useState(false);
  useEffect(() => {
    if (newData !== null) {
      setInputCep();
      setInputAddress();
      setInputNumber();
      setInputDistrict();
      setInputCity();
      setInputUf();
      setInputComplement();
      setParent();
      setRadius1(false);
      setRadius2(false);
    }
  }, [newData]);
  useEffect(() => {
    if (address !== null) {
      setCodCity(address.ibge.substring(3, 7));
      setCodParent('1058');
      setParent('Brasil');
      setInputAddress(address.logradouro);
      setInputDistrict(address.bairro);
      setInputCity(address.localidade);
      setInputUf(address.uf);
    } else {
      setInputAddress();
      setCodCity();
      setCodParent();
      setInputDistrict();
      setInputCity();
      setInputUf();
      setInputCep();
    }
  }, [address]);
  function trocaRadius1() {
    setRadius1(!radius1);
  }
  function trocaRadius2() {
    setRadius2(!radius2);
  }
  function saveAddress() {
    console.tron.log('entrou');
    dispatch(
      ActionsRegister.saveAddress(
        inputCep,
        inputAddress,
        inputNumber,
        inputDistrict,
        inputCity,
        inputUf,
        inputComplement,
        codCity,
        codParent,
        parent,
        radius1,
        radius2
      )
    );
    dispatch(ActionsRegister.closeModalAddress());
  }
  function requestCep() {
    console.tron.log('entri');
    dispatch(ActionsRegister.requestCep(inputCep));
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
            <TextNormal>CEP</TextNormal>
            <InputType
              placeholder="CEP"
              valueInputText={inputCep}
              functionOnChangeText={text => {
                setInputCep(text);
              }}
              areaIcon
              icoName="search"
              functionOnPressIcon={() => {
                requestCep();
              }}
            />
            <TextNormal>Endereço</TextNormal>
            <InputType
              placeholder="Endereço"
              valueInputText={inputAddress}
              functionOnChangeText={text => {
                setInputAddress(text);
              }}
            />
            <TextNormal>Número</TextNormal>
            <InputType
              placeholder="Número"
              valueInputText={inputNumber}
              functionOnChangeText={text => {
                setInputNumber(text);
              }}
            />

            <TextNormal>Bairro</TextNormal>
            <InputType
              placeholder="Bairro"
              valueInputText={inputDistrict}
              functionOnChangeText={text => {
                setInputDistrict(text);
              }}
            />
            <TextNormal>Cidade</TextNormal>
            <InputType
              placeholder="Cidade"
              valueInputText={inputCity}
              functionOnChangeText={text => {
                setInputCity(text);
              }}
            />
            <TextNormal>UF</TextNormal>
            <InputType
              placeholder="UF"
              valueInputText={inputUf}
              functionOnChangeText={text => {
                setInputUf(text);
              }}
            />
            <TextNormal>Complemento</TextNormal>
            <InputType
              placeholder="Complemento"
              valueInputText={inputComplement}
              functionOnChangeText={text => {
                setInputComplement(text);
              }}
            />
            {radiusExist ? (
              <ContainerRadius>
                <Radius
                  text="Endereço igual para cobrança?"
                  nameIcon={radius1 ? 'dot-circle' : 'circle'}
                  functionOnPress={() => {
                    trocaRadius1();
                  }}
                />
                <Radius
                  text="Endereço igual para entrega?"
                  nameIcon={radius2 ? 'dot-circle' : 'circle'}
                  functionOnPress={() => {
                    trocaRadius2();
                  }}
                />
              </ContainerRadius>
            ) : null}

            <Button
              titleButton="CONFIRMAR ENDEREÇO"
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
ModalAddress.propTypes = {
  modalVisible: PropTypes.bool,
  radiusExist: PropTypes.bool,
  functionOnPressIcon: PropTypes.func,
};
ModalAddress.defaultProps = {
  modalVisible: false,
  radiusExist: true,
  functionOnPressIcon: () => {},
};
