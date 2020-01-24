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
  const {address, newData, address1, address2} = useSelector(
    state => state.registerclient
  );
  const [inputCep, setInputCep] = useState(null);
  const [inputAddress, setInputAddress] = useState(null);
  const [inputNumber, setInputNumber] = useState(null);
  const [inputDistrict, setInputDistrict] = useState(null);
  const [inputCity, setInputCity] = useState(null);
  const [inputUf, setInputUf] = useState(null);
  const [inputComplement, setInputComplement] = useState(null);
  const [codCity, setCodCity] = useState(null);
  const [codParent, setCodParent] = useState(null);
  const [parent, setParent] = useState(null);
  const [radius1, setRadius1] = useState(true);
  const [radius2, setRadius2] = useState(true);
  const [disable, setDisable] = useState();
  useEffect(() => {
    if (newData !== null) {
      setInputCep(null);
      setInputAddress(null);
      setInputNumber(null);
      setInputDistrict(null);
      setInputCity(null);
      setInputUf(null);
      setInputComplement(null);
      setParent(null);
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
      setInputAddress(null);
      setCodCity(null);
      setCodParent(null);
      setInputDistrict(null);
      setInputCity(null);
      setInputUf(null);
      setInputCep(null);
    }
  }, [address]);
  useEffect(() => {
    if (
      inputCep === null ||
      inputAddress === null ||
      inputDistrict === null ||
      inputCity === null ||
      inputUf === null
    ) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [inputAddress, inputCep, inputCity, inputDistrict, inputNumber, inputUf]);
  function trocaRadius1() {
    setRadius1(!radius1);
  }
  function trocaRadius2() {
    setRadius2(!radius2);
  }
  function saveAddress() {
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
                  nameIcon={radius1 ? 'circle' : 'dot-circle'}
                  functionOnPress={() => {
                    trocaRadius1();
                  }}
                />
                <Radius
                  text="Endereço igual para entrega?"
                  nameIcon={radius2 ? 'circle' : 'dot-circle'}
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
              disabledButton={disable}
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
