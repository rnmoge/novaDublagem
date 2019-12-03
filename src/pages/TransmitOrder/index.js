import React from 'react';
// import {View} from 'react-native';
import Header from '../../components/Header';

import {Container} from './styles';

export default function TransmitOrder({navigation}) {
  return (
    <Container>
      <Header
        title="Transmitir pedidos"
        iconName="bars"
        icoNameTwo="shopping-cart"
        functionOnpressIconLeft={() => navigation.openDrawer()}
      />
    </Container>
  );
}
