import React from 'react';
// import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import Header from '../../components/Header';
import {Container} from './styles';
import * as ActionsOrder from '../../store/modules/order/actions';

export default function DetailsClient() {
  const dispatch = useDispatch();
  function backRegisterOrder() {
    dispatch(ActionsOrder.backRegisterOrder());
  }
  return (
    <Container>
      <Header
        title="Consulta Cliente"
        icoName="arrow-left"
        icoNameTwo="shopping-cart"
        functionOnpressIconLeft={() => {
          backRegisterOrder();
        }}
      />
    </Container>
  );
}
