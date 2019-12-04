import React, {useState} from 'react';
// import {Text} from 'react-native';
import {useDispatch} from 'react-redux';
import Header from '../../components/Header';
import Button from '../../components/Button';
import * as ActionsOrder from '../../store/modules/order/actions';
import {
  Container,
  ContainerBody,
  List,
  ContainerDate,
  TextInfo,
  ContainerInfo,
} from './styles';

export default function TransmitOrder() {
  const dispatch = useDispatch();
  const [orderState, setOrderState] = useState([
    {id: 1, pedido: '123', data: '12/12/12', cliente: 'yuri tiofilo'},
    {id: 2, pedido: '123', data: '12/12/12', cliente: 'yuri tiofilo'},
    {id: 3, pedido: '123', data: '12/12/12', cliente: 'yuri tiofilo'},
    {id: 4, pedido: '123', data: '12/12/12', cliente: 'yuri tiofilo'},
    {id: 5, pedido: '123', data: '12/12/12', cliente: 'yuri tiofilo'},
    {id: 6, pedido: '123', data: '12/12/12', cliente: 'yuri tiofilo'},
    {id: 7, pedido: '123', data: '12/12/12', cliente: 'yuri tiofilo'},
    {id: 8, pedido: '123', data: '12/12/12', cliente: 'yuri tiofilo'},
    {id: 9, pedido: '123', data: '12/12/12', cliente: 'yuri tiofilo'},
    {id: 10, pedido: '123', data: '12/12/12', cliente: 'yuri tiofilo'},
  ]);
  function backOrder() {
    dispatch(ActionsOrder.backOrder());
  }
  return (
    <Container>
      <Header
        title="Transmitir pedidos"
        icoName="arrow-left"
        icoNameTwo="shopping-cart"
        functionOnpressIconLeft={() => backOrder()}
      />
      <ContainerBody>
        <ContainerInfo>
          <TextInfo>Pedido</TextInfo>
          <TextInfo>Data</TextInfo>
          <TextInfo>Cliente</TextInfo>
        </ContainerInfo>
        <List
          data={orderState}
          renderItem={({item}) => {
            return (
              <ContainerDate>
                <TextInfo>{item.pedido}</TextInfo>
                <TextInfo>{item.data}</TextInfo>
                <TextInfo>{item.cliente}</TextInfo>
              </ContainerDate>
            );
          }}
        />
        <Button titleButton="TRANSMITIR" />
      </ContainerBody>
    </Container>
  );
}
