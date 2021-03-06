import React from 'react';
// import {StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';
import {StatusBar} from 'react-native';
import * as ForgotPasswordActions from '../../store/modules/forgotpassword/actions';
import {Container, Text, ContainerPage} from './styles';
import Header from '../../components/Header';
// import Logo from '../../components/Logo';
// import Input from '../../components/Input2';
// import {navigate} from '../../services/navigation';
import Button from '../../components/Button';
import InputType from '../../components/InputType';

export default function ForgotPassword() {
  // const {loading, message, error} = useSelector(state => state.common);
  const dispatch = useDispatch();
  function handleLogin() {
    dispatch(ForgotPasswordActions.cleanLogin());
  }
  return (
    <Container>
      <Header
        title=""
        icoName="arrow-left"
        button
        cartExist={null}
        functionOnpressIconLeft={() => handleLogin()}
      />

      <ContainerPage>
        <Text>Digite seu e-mail para enviar-mos sua nova senha:</Text>
        <StatusBar backgroundColor="#002984" />
        <InputType placeholder="E-mail" />
        <Button titleButton="AVANÇAR" />
      </ContainerPage>
    </Container>
  );
}
