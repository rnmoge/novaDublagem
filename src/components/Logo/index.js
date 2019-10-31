import React from 'react';
// import  from 'react-native';
// import {SvgUri} from 'react-native-svg';
import {Container, Image} from './styles';
import logo from '../../../assets/image/Logo-oficial.png';

export default function Logo() {
  return (
    <Container>
      <Image source={logo} />
    </Container>
  );
}
