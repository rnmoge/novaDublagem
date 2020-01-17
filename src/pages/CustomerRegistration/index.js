import React from 'react';
import {ScrollView} from 'react-native';
import Header from '../../components/Header';
import InputType from '../../components/InputType';
import Button from '../../components/Button';
import InputMask from '../../components/InputMaskCNPJ';
import InputClick from '../../components/InputClick';
import Radius from '../../components/Radius';
import {Container} from './styles';
import {ContainerBody} from '../../components/DetailsOrder/styles';

export default function CustomerRegistration({navigation}) {
  return (
    <Container>
      <Header
        title="Cadastro de Cliente"
        functionOnpressIconLeft={() => navigation.openDrawer()}
      />
      <ScrollView>
        <ContainerBody>
          <InputType placeholder="Razão Social" />
          <InputType placeholder="Nome Fantazia" />
          <InputMask placeholder="CNPJ" />
          <InputType placeholder="Inscrição Estadual" />
          <InputType placeholder="Inscrição Municipal" />
          <Radius text="Tem suframa?" nameIcon="circle" />
          <InputType placeholder="Contato" />
          <InputType placeholder="Celular" />
          <InputType placeholder="Telefone Fixo" />
          <InputType placeholder="E-mail" />
          <InputClick icoName="chevron-down" />
          <InputClick icoName="chevron-down" />
          <InputClick icoName="chevron-down" />
          <Button titleButton="CONFIRMAR" />
        </ContainerBody>
      </ScrollView>
    </Container>
  );
}
