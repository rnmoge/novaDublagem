import React from 'react';
// import {View} from 'react-native';

import Header from '../../components/Header';
import Radius from '../../components/Radius';
import {Container} from './styles';

export default function QueryOrder({navigation}) {
  return (
    <Container>
      <Header
        title="Consultar"
        iconName="bars"
        icoNameTwo="shopping-cart"
        functionOnpressIconLeft={() => navigation.openDrawer()}
      />
      <Radius />
    </Container>
  );
}
