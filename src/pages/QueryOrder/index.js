import React from 'react';
// import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import * as ActionsOrder from '../../store/modules/order/actions';
import Header from '../../components/Header';
import Radius from '../../components/Radius';
import {Container} from './styles';

export default function QueryOrder() {
  const dispatch = useDispatch();
  function backOrder() {
    dispatch(ActionsOrder.backOrder());
  }
  return (
    <Container>
      <Header
        title="Consulta Pedido"
        icoName="arrow-left"
        icoNameTwo="shopping-cart"
        functionOnpressIconLeft={() => backOrder()}
      />
      <Radius />
    </Container>
  );
}