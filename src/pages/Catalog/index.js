import React from 'react';
// import {View} from 'react-native';

import {Container, ContainerInput} from './styles';
import Header from '../../components/Header';
import Button from '../../components/Button';
import InputType from '../../components/InputType';

export default function Catalog({navigation}) {
  return (
    <Container>
      <Header
        title="Catálogo"
        iconName="bars"
        icoNameTwo="shopping-cart"
        functionOnpressIconLeft={() => navigation.openDrawer()}
      />
      <ContainerInput>
        <InputType />
        <InputType />
        <Button titleButton="AVANÇAR" />
      </ContainerInput>
    </Container>
  );
}
