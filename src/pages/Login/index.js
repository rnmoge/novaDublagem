import React from 'react'; //  // {useState, useEffect}
// import {useDispatch, useSelector} from 'react-redux';
import {StatusBar} from 'react-native';
// import {bindActionCreators} from 'redux';
// import {Text} from 'react-native';
import {Container, Text, ContainerScroll} from './styles';
// import * as CartActions from '../../store/modules/cart/action';
// import Header from '../../components/Header';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {navigate} from '../../services/navigation';

export default function Login() {
  //  const cart = useSelector(state => state.cart);
  //  const [products, setProducts] = useState([]);
  //  const dispatch = useDispatch();
  //
  //  useEffect(async () => {
  //    async function loadProducts() {
  //      const response = await api.get('products');
  //      console.tron.log(response);
  //    }
  //    setProducts(response);
  //  }, []);
  //
  //  function handleAddProduct(id) {
  //    console.tron.log('data');
  //    dispatch(CartActions.addToCartRequest(1));
  //  }
  //
  //  console.tron.log(products);
  // c

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
          functionOnPress={() => {
            navigate('TableSelection');
          }}
        />
        <Text>Esqueci minha senha</Text>
      </Container>
    </ContainerScroll>
  );
}
