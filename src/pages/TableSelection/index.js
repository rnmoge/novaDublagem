import React from 'react';
// import {View} from 'react-native';
import {StatusBar} from 'react-native';
import Logo from '../../components/Logo';
import {Container} from './styles';

export default function TableSelection() {
  return (
    <Container>
      <Logo />
      <StatusBar barStyle="dark-content" backgroundColor="#BBBB" />
    </Container>
  );
}
