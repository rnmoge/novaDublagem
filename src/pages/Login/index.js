import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StatusBar, TextInput} from 'react-native';
import {Container, Text, ContainerScroll} from './styles';
import * as CommonActions from '../../store/modules/common/actions';
import * as LoginActions from '../../store/modules/login/actions';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Login() {
  const {loading, message, error} = useSelector(state => state.common);
  const {errorLogin} = useSelector(state => state.login);
  const dispatch = useDispatch();
  const [userState, setUserState] = useState(null);
  const [passwordState, setPasswordState] = useState(null);
  const [notVisiblePasswordState, setNotVisiblePasswordState] = useState(true);
  useEffect(() => {
    console.tron.log(
      (!userState || userState === null) &&
        (!passwordState || passwordState === null)
    );
  }, [passwordState, userState]);
  //
  console.tron.log(userState);
  console.tron.log(passwordState);
  return (
    <ContainerScroll
      contentContainerStyle={{
        flexGrow: 1,
        flexDirection: 'column',
      }}>
      <Container>
        <StatusBar barStyle="ligth-content" backgroundColor="#3f51b5" />
        <Logo message={message} error={error} />
        <Input
          placeholder="Usuário"
          valueInputText={userState}
          editable
          passwordOption={false}
          keyboardTypeInput="default"
          functionOnChangeText={text => setUserState(text)}
          disabledButtonIcon
          error={errorLogin}
        />
        <Input
          placeholder="Senha"
          valueInputText={passwordState}
          editable
          passwordOption={notVisiblePasswordState}
          keyboardTypeInput="default"
          areaIcon
          icoName={notVisiblePasswordState ? 'eye' : 'eye-slash'}
          functionOnChangeText={text => setPasswordState(text)}
          functionOnPressIcon={() =>
            setNotVisiblePasswordState(!notVisiblePasswordState)
          }
          disabledButtonIcon={false}
          error={errorLogin}
        />
        <Button
          titleButton="ENTRAR"
          disabledButton={
            (!userState || userState === null) &&
            (!passwordState || passwordState === null)
          }
        />
        <Text>Esqueci minha senha</Text>
      </Container>
    </ContainerScroll>
  );
}
