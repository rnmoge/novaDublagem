import React from 'react';
// import {View} from 'react-native';
import {
  Container,
  ContainerBody,
  Container2,
  ContainerInput,
  ContainerText,
  TextInfo,
  ContainerButton,
  ContainerRadius,
} from './styles';
import Header from '../../components/Header';
import InputType from '../../components/InputType';
import Button from '../../components/Button';
import Radius from '../../components/Radius';

export default function RegisterOrder({navigation}) {
  return (
    <Container>
      <Header
        title="Seleção de cliente"
        iconName="bars"
        icoNameTwo="shopping-cart"
        functionOnpressIconLeft={() => navigation.openDrawer()}
      />
      <ContainerBody>
        <Container2>
          <ContainerInput>
            <InputType placeholder="Digite a Razão Social" />
            <InputType placeholder="Digite o CNPJ" />
            <InputType placeholder="Digite o Código" />
          </ContainerInput>
          <ContainerText>
            <TextInfo>Listar clientes:</TextInfo>
          </ContainerText>
          <ContainerRadius>
            <Radius nameIcon="circle" text="Ativos" />
            <Radius nameIcon="circle" text="Inativos" />
            <Radius nameIcon="circle" text="Todos" />
          </ContainerRadius>
          <ContainerButton>
            <Button titleButton="PESQUISAR" />
          </ContainerButton>
        </Container2>
      </ContainerBody>
    </Container>
  );
}
