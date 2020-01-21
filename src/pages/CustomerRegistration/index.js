import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import Header from '../../components/Header';
import InputType from '../../components/InputType';
import Button from '../../components/Button';
import ModalAddress from '../../components/ModalAddress';
import InputMask from '../../components/InputMaskCNPJ';
import InputClick from '../../components/InputClick';
import Radius from '../../components/Radius';
import {Container, ContainerTotal} from './styles';
import {ContainerBody} from '../../components/DetailsOrder/styles';
import {TextNormal} from '../../styles/fonts';

export default function CustomerRegistration({navigation}) {
  const [inputRazon, setInpuRazon] = useState();
  const [inputName, setInpuName] = useState();
  const [inputCnpj, setInputCnpj] = useState();
  const [inputSubscriptionOne, setInputSubscriptionOne] = useState();
  const [inputSubscriptionTwo, setInputSubscriptionTwo] = useState();
  const [suffrage, setSuffrage] = useState(false);
  const [InputExist, setInputExist] = useState(false);
  const [inputSuffrage, setinputSuffrage] = useState();
  const [inputContat, setInputContat] = useState();
  const [inputMobile, setInputMobile] = useState();
  const [inputCellFix, setInputCellFix] = useState();
  const [inputEmail, setInputEmail] = useState();
  // function trocaRadius1() {
  //   setSelectStateOne(!selectStateOne);
  //   setSelectStateTwo(false);
  //   setTypeOrderId(0);
  // }
  function exchangeRadius() {
    setSuffrage(!suffrage);
    setInputExist(!InputExist);
  }
  function registerClient() {
    console.tron.log('entrou register');
  }
  return (
    <Container>
      <Header
        title="Cadastro de Cliente"
        functionOnpressIconLeft={() => navigation.openDrawer()}
      />
      <ScrollView>
        <ContainerBody>
          <ContainerTotal>
            <TextNormal>Razão Social</TextNormal>
            <InputType
              placeholder="Razão Social"
              valueInputText={inputRazon}
              functionOnChangeText={text => {
                setInpuRazon(text);
              }}
            />
            <TextNormal>Nome Fantasia</TextNormal>
            <InputType
              placeholder="Nome Fantazia"
              valueInputText={inputName}
              functionOnChangeText={text => {
                setInpuName(text);
              }}
            />
            <TextNormal>CNPJ</TextNormal>
            <InputMask
              placeholder="CNPJ"
              valueInput={inputCnpj}
              onChangeText={text => {
                setInputCnpj(text);
              }}
            />
            <TextNormal>Inscrição Estadual</TextNormal>
            <InputType
              placeholder="Inscrição Estadual"
              valueInputText={inputSubscriptionOne}
              functionOnChangeText={text => {
                setInputSubscriptionOne(text);
              }}
            />
            <TextNormal>Inscrição Municipal</TextNormal>
            <InputType
              placeholder="Inscrição Municipal"
              valueInputText={inputSubscriptionTwo}
              functionOnChangeText={text => {
                setInputSubscriptionTwo(text);
              }}
            />
            <Radius
              text="Tem suframa?"
              nameIcon={suffrage ? 'dot-circle' : 'circle'}
              functionOnPress={() => {
                exchangeRadius();
              }}
            />
            {InputExist ? (
              <InputType
                placeholder="Suframa"
                valueInputText={inputSuffrage}
                functionOnChangeText={text => {
                  setinputSuffrage(text);
                }}
              />
            ) : null}
            <TextNormal>Contato</TextNormal>
            <InputType
              placeholder="Contato"
              valueInputText={inputContat}
              functionOnChangeText={text => {
                setInputContat(text);
              }}
            />
            <TextNormal>Celular</TextNormal>
            <InputType
              placeholder="Celular"
              valueInputText={inputMobile}
              functionOnChangeText={text => {
                setInputMobile(text);
              }}
            />
            <TextNormal>Telefone Fixo</TextNormal>
            <InputType
              placeholder="Telefone Fixo"
              valueInputText={inputCellFix}
              functionOnChangeText={text => {
                setInputCellFix(text);
              }}
            />
            <TextNormal>E-mail</TextNormal>
            <InputType
              placeholder="E-mail"
              valueInputText={inputEmail}
              functionOnChangeText={text => {
                setInputEmail(text);
              }}
            />
            <InputClick
              icoName="angle-down"
              textPrimary="Endereço"
              textSecundary="Cadastre os endereços"
            />
            {/* <InputClick
              icoName="angle-down"
              textPrimary="Endereço de cobrança"
              textSecundary="Cadastre os endereços de cobrança"
            />
            <InputClick
              icoName="angle-down"
              textPrimary="Endereço de entrega"
              textSecundary="Cadastre os endereços de entrega"
            /> */}
            <InputClick
              icoName="angle-down"
              textPrimary="Fornecedores"
              textSecundary="Cadastre os fornecedores"
            />
            <InputClick
              icoName="angle-down"
              textPrimary="Clientes"
              textSecundary="Cadastre os clientes"
            />
            <InputClick
              icoName="angle-down"
              textPrimary="Bancos"
              textSecundary="Cadastre os bancos"
            />

            <Button
              titleButton="CONFIRMAR"
              functionOnPress={() => {
                registerClient();
              }}
              disabledButton={false}
            />
          </ContainerTotal>
        </ContainerBody>
      </ScrollView>
      <ModalAddress />
    </Container>
  );
}
