import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import Header from '../../components/Header';
import InputType from '../../components/InputType';
import Button from '../../components/Button';
import InputMask from '../../components/InputMaskCNPJ';
import InputClick from '../../components/InputClick';
import Radius from '../../components/Radius';
import {Container, ContainerTotal} from './styles';
import {ContainerBody} from '../../components/DetailsOrder/styles';

export default function CustomerRegistration({navigation}) {
  const [inputRazon, setInpuRazon] = useState();
  const [inputName, setInpuName] = useState();
  const [inputCnpj, setInputCnpj] = useState();
  const [inputSubscriptionOne, setInputSubscriptionOne] = useState();
  const [inputSubscriptionTwo, setInputSubscriptionTwo] = useState();
  return (
    <Container>
      <Header
        title="Cadastro de Cliente"
        functionOnpressIconLeft={() => navigation.openDrawer()}
      />
      <ScrollView>
        <ContainerBody>
          <ContainerTotal>
            <InputType
              placeholder="Razão Social"
              valueInputText={inputRazon}
              functionOnChangeText={text => {
                setInpuRazon(text);
              }}
            />
            <InputType
              placeholder="Nome Fantazia"
              valueInputText={inputName}
              functionOnChangeText={text => {
                setInpuName(text);
              }}
            />
            <InputMask
              placeholder="CNPJ"
              valueInput={inputCnpj}
              onChangeText={text => {
                setInputCnpj(text);
              }}
            />
            <InputType
              placeholder="Inscrição Estadual"
              valueInputText={inputSubscriptionOne}
              functionOnChangeText={text => {
                setInputSubscriptionOne(text);
              }}
            />
            <InputType
              placeholder="Inscrição Municipal"
              valueInputText={inputSubscriptionTwo}
              functionOnChangeText={text => {
                setInputSubscriptionTwo(text);
              }}
            />
            <Radius
              text="Tem suframa?"
              nameIcon="circle"
              functionOnPress={() => {}}
            />
            <InputType placeholder="Contato" />
            <InputType placeholder="Celular" />
            <InputType placeholder="Telefone Fixo" />
            <InputType placeholder="E-mail" />
            <InputClick
              icoName="chevron-down"
              textPrimary="Endereço"
              textSecundary="Cadastre os endereços"
            />
            <InputClick
              icoName="chevron-down"
              textPrimary="Endereço de cobrança"
              textSecundary="Cadastre os endereços de cobrança"
            />
            <InputClick
              icoName="chevron-down"
              textPrimary="Endereço de entrega"
              textSecundary="Cadastre os endereços de entrega"
            />
            <InputClick
              icoName="chevron-down"
              textPrimary="Fornecedores"
              textSecundary="Cadastre os fornecedores"
            />
            <InputClick
              icoName="chevron-down"
              textPrimary="Clientes"
              textSecundary="Cadastre os clientes"
            />
            <InputClick
              icoName="chevron-down"
              textPrimary="Bancos"
              textSecundary="Cadastre os bancos"
            />

            <Button titleButton="CONFIRMAR" />
          </ContainerTotal>
        </ContainerBody>
      </ScrollView>
    </Container>
  );
}
