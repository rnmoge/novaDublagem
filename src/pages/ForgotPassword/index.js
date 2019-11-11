import React from 'react';
// import {StatusBar} from 'react-native';
import {Container} from './styles';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function ForgotPassword() {
  return (
    <Container>
      <Header title="Recuperação de senha" />
      <Input
        placeholder="Senha"
        // valueInputText={passwordState}
        editable
        // passwordOption={notVisiblePasswordState}
        keyboardTypeInput="default"
        areaIcon
        // icoName={notVisiblePasswordState ? 'eye' : 'eye-slash'}
        // functionOnChangeText={text => setPasswordState(text)}
        // disabledButtonIcon={false}
        // error={errorLogin}
      />
      <Button />
    </Container>
  );
}
