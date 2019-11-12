import React from 'react';
// import {View} from 'react-native';
// import PropTypes from 'prop-types';
import {Container, Image, ContainerImage} from './styles';
import Header from '../../components/Header';
// import Logo from '../../components/Logo';
import logo from '../../../assets/image/logo-azul.png';

export default function Home({navigation}) {
  return (
    <Container>
      <Header
        title="Home"
        iconName="bars"
        icoNameTwo="shopping-cart"
        functionOnpressIconLeft={() => navigation.openDrawer()}
      />
      <ContainerImage>
        <Image source={logo} />
      </ContainerImage>
    </Container>
  );
}
