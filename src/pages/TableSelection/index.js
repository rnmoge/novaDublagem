import React from 'react';
// import {View} from 'react-native';
import {StatusBar} from 'react-native';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Container, Text, ContainerScroll, TextButton} from './styles';
import {navigate} from '../../services/navigation';

export default function TableSelection() {
  return (
    <ContainerScroll
      contentContainerStyle={{
        flexGrow: 1,
        flexDirection: 'column',
      }}>
      <Container>
        <StatusBar barStyle="ligth-content" backgroundColor="#3f51b5" />
        <TextButton
          onPress={() => {
            navigate('Login');
          }}>
          SAIR
        </TextButton>
        <Logo />
        <Text>Selecione a tabela que você estará utilizando:</Text>
        <Input placeholder="Tabelas" value="" />
        <Button titleButton="AVANÇAR" />
      </Container>
    </ContainerScroll>
  );
}
