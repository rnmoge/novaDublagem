import React from 'react';
// import {View} from 'react-native';
import {Container, TextFooter} from './styles';
import {navigate} from '../../services/navigation';

const FooterDrawer = () => (
  <Container>
    <TextFooter
      onPress={() => {
        navigate('Login');
      }}>
      Sair
    </TextFooter>
  </Container>
);

export default FooterDrawer;
