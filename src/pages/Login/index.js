import React from 'react'; //  // {useState, useEffect}
// import {useDispatch, useSelector} from 'react-redux';
import {StatusBar} from 'react-native';
// import {bindActionCreators} from 'redux';
import {Container} from './styles';
// import * as CartActions from '../../store/modules/cart/action';
// import Header from '../../components/Header';
import Logo from '../../components/Logo';

export default function Login() {
  //  const cart = useSelector(state => state.cart);
  //  const [products, setProducts] = useState([]);
  //  const dispatch = useDispatch();
  //  // state = {
  //  //  products: [],
  //  // };
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
  //
  return (
    <Container>
      <Logo />
      <StatusBar barStyle="dark-content" backgroundColor="#BBBB" />
    </Container>
  );
}
