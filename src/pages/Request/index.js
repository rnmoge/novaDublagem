import React from 'react';
// import {Text} from 'react-native';
import {useDispatch} from 'react-redux';
import CardRequest from '../../components/CardRequest';
import {Container, ContainerPage} from './styles';
import Header from '../../components/Header';
import * as ActionsOrder from '../../store/modules/order/actions';

export default function Request({navigation}) {
  const dispatch = useDispatch();
  function handleRegisterOrders() {
    dispatch(ActionsOrder.handleRegisterOrder());
  }
  function handleQueryOrders() {
    dispatch(ActionsOrder.handleQueryOrder());
  }
  function handleTransmitOrders() {
    dispatch(ActionsOrder.handleTransmitOrder());
  }
  return (
    <Container>
      <Header
        title="Pedidos"
        iconName="bars"
        icoNameTwo="shopping-cart"
        functionOnpressIconLeft={() => navigation.openDrawer()}
      />
      <ContainerPage>
        <CardRequest
          text="Cadastrar Pedidos"
          nameIcon="plus"
          functionOnPress={() => {
            handleRegisterOrders();
          }}
        />
        <CardRequest
          text="Consultar Pedidos"
          nameIcon="search"
          functionOnPress={() => {
            handleQueryOrders();
          }}
        />
        <CardRequest
          text="Transmitir Pedidos"
          nameIcon="rss"
          functionOnPress={() => {
            handleTransmitOrders();
          }}
        />
      </ContainerPage>
    </Container>
  );
}
