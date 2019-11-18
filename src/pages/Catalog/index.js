import React from 'react';
// import {View} from 'react-native';

import {Item} from 'native-base';
import {
  Container,
  ContainerInput,
  ContainerList,
  ContainerScroll,
} from './styles';
import Header from '../../components/Header';
import ListView from '../../components/ListView';
import InputType from '../../components/InputType';
import Bojo from '../../../assets/image/3101.jpg';

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
        <InputType placeholder="Digite a linha" icoName="search" areaIcon />
        <InputType placeholder="Digite o modelo" icoName="search" areaIcon />
      </ContainerInput>

      <ContainerList>
        <ListView />
      </ContainerList>
    </Container>
  );
}
