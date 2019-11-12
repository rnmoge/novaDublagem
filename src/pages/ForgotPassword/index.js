import React from 'react';
// import {StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';
import * as ForgotPasswordActions from '../../store/modules/forgotpassword/actions';
import {Container, Text, ContainerPage} from './styles';
import Header from '../../components/Header';
// import Logo from '../../components/Logo';
import Input from '../../components/Input2';
// import {navigate} from '../../services/navigation';
import Button from '../../components/Button';

export default function ForgotPassword() {
  const dispatch = useDispatch();
  function handleForgotPassword() {
    dispatch(ForgotPasswordActions.cleanLogin());
  }
  return (
    <Container>
      <Header
        title=""
        icoName="arrow-left"
        button
        cartExist={null}
        functionOnpressIconLeft={() => handleForgotPassword()}
      />

      <ContainerPage>
        <Text>Digite seu e-mail para enviar-mos sua nova senha:</Text>
        <Input />
        <Button titleButton="AVANÇAR" />
      </ContainerPage>
    </Container>
  );
}
