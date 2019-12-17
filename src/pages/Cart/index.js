import React from 'react';
// import {View} from 'react-native';
import CardCart from '../../components/CardCart';
import Header from '../../components/Header';
import Button from '../../components/Button';
import {Container, ContainerBody, ContainerButton} from './styles';

export default function Cart() {
  return (
    <Container>
      <Header title="Carrinho" icoName="arrow-left" />
      <ContainerBody>
        <CardCart nameIconOne="pen" nameIconTwo="times" />
      </ContainerBody>
      <ContainerButton>
        <Button titleButton="SALVAR E ENVIAR" />
      </ContainerButton>
    </Container>
  );
}
