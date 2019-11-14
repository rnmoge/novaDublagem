import React from 'react';
import {Text} from 'react-native';

import {Container, TextInfo, ContainerPage} from './styles';
import Header from '../../components/Header';

export default function Request({navigation}) {
  return (
    <Container>
      <Header
        title="Pedidos"
        iconName="bars"
        icoNameTwo="shopping-cart"
        functionOnpressIconLeft={() => navigation.openDrawer()}
      />
      <ContainerPage>
        <TextInfo>
          Tela em construção aguarde para quando ela estiver pronta você irá
          receber uma atualização!
        </TextInfo>
      </ContainerPage>
    </Container>
  );
}
