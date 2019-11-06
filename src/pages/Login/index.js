import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StatusBar} from 'react-native';
import {Container, Text, ContainerScroll} from './styles';
import * as CommonActions from '../../store/modules/common/actions';
import * as LoginActions from '../../store/modules/login/action';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Login() {
  const {loading, message, error} = useSelector(state => state.common);
  const dispatch = useDispatch();
 // const [products, setProducts] = useState([]);

  //  useEffect(async () => {
  //    async function loadProducts() {
  //      const response = await api.get('products');
  //      console.tron.log(response);
  //    }
  //    setProducts(response);
  //  }, []);
  //

  return (
    <ContainerScroll
      contentContainerStyle={{
        flexGrow: 1,
        flexDirection: 'column',
      }}>
      <Container>
        <StatusBar barStyle="ligth-content" backgroundColor="#3f51b5" />
        <Logo />
        <Input placeholder="Usuário" value="" />
        <Input placeholder="Senha" value="" />
        <Button
          titleButton="ENTRAR"
        />
        <Text>Esqueci minha senha</Text>
      </Container>
    </ContainerScroll>
  );
}
