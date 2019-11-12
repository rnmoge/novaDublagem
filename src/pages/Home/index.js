import React from 'react';
// import {View} from 'react-native';
import {StatusBar} from 'react-native';
import {Container, Image, ContainerImage} from './styles';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import logo from '../../../assets/image/logo-azul.png';

export default function Home() {
  return (
    <Container>
      <StatusBar barStyle="ligth-content" backgroundColor="#3f51b5" />
      <Header title="Home" iconName="bars" icoName2="shopping-cart" />
      <ContainerImage>
        <Image source={logo} />
      </ContainerImage>
    </Container>
  );
}
