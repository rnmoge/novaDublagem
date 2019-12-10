import React from 'react';
// import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import Header from '../../components/Header';
// import navigate from '../../services/navigation';
import {
  Container,
  Number,
  TextInfo,
  ContainerBody,
  ContainerHeader,
} from './styles';
// import {backOrder} from '../../store/modules/order/actions';
import * as ActionsNewOrder from '../../store/modules/neworder/actions';

export default function Testestando() {
  const dispatch = useDispatch();
  function backDetailsClient() {
    dispatch(ActionsNewOrder.backDetailsClient());
  }
  return (
    <Container>
      <ContainerHeader>
        <Header
          icoName="arrow-left"
          icoNameTwo=""
          functionOnpressIconLeft={() => {
            backDetailsClient();
          }}
        />
      </ContainerHeader>
      <ContainerBody>
        <Number>Error 401</Number>
        <TextInfo>Acesso negado</TextInfo>
        <TextInfo>Pagina em desenvolvimento</TextInfo>
      </ContainerBody>
    </Container>
  );
}
