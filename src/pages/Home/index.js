import React, {useEffect, useState} from 'react';
// import {View} from 'react-native';
// import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {Container, Image, ContainerImage} from './styles';
import Header from '../../components/Header';
import Cart from '../../components/Cart';
// import Logo from '../../components/Logo';
import logo from '../../../assets/image/logo-azul.png';
import * as ActionsHome from '../../store/modules/home/actions';
import * as ActionsCart from '../../store/modules/cart/actions';

export default function Home({navigation}) {
  const [modalState, setModalState] = useState(false);
  const {data2} = useSelector(state => state.table);
  const {stateModal} = useSelector(state => state.cart);
  const dispatch = useDispatch();
  function handleCart() {
    dispatch(ActionsCart.cartOpen(true));
    dispatch(ActionsCart.requestCart());
  }
  useEffect(() => {
    dispatch(ActionsHome.homeClean());
  }, [data2.id]); // eslint-disable-line
  return (
    <Container>
      <Header
        title="Home"
        iconName="bars"
        icoNameTwo="shopping-cart"
        functionOnpressIconLeft={() => navigation.openDrawer()}
        functionOnpressIconRigth={() => {
          handleCart();
        }}
      />
      <ContainerImage>
        <Image source={logo} />
      </ContainerImage>
      <Cart modalVisible={stateModal} />
    </Container>
  );
}
