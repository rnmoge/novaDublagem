import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as ActionsOrder from '../../store/modules/order/actions';
import * as ActionsQuery from '../../store/modules/queryorder/actions';
import Header from '../../components/Header';
import InputType from '../../components/InputType';
import CardOrder from '../../components/CardOrder';
import {Container, ContainerBody, ContainerInput} from './styles';

export default function QueryOrder() {
  const dispatch = useDispatch();
  const {orders} = useSelector(state => state.queryorder);
  const {loading} = useSelector(state => state.common);
  const [inputRazao, setInputRazao] = useState('');
  const [page, setPage] = useState(1);
  const [inputCodPedido, setCodPedido] = useState('');
  const [dataStateAux, setDataStateAux] = useState('');
  function backOrder() {
    dispatch(ActionsOrder.backOrder());
  }
  console.tron.log(orders);
  useEffect(() => {
    setDataStateAux(orders);
    const orderArray = orders
      .filter(element => {
        return (
          element.pedido_cod
            .toLowerCase()
            .indexOf(inputCodPedido.toLowerCase()) !== -1
        );
      })
      .filter(element => {
        return (
          element.cliente.nome_razao
            .toLowerCase()
            .indexOf(inputRazao.toLowerCase()) !== -1
        );
      })
      .map(element => {
        return element;
      });
    setDataStateAux(orderArray);
  }, [inputRazao, inputCodPedido]); // eslint-disable-line
  function selectorder(id) {
    dispatch(ActionsQuery.selectOrder(id));
  }
  function loadOrders() {
    dispatch(ActionsQuery.requestOrders(page));
  }
  useEffect(() => {
    loadOrders();
  }, []);// eslint-disable-line
  return (
    <Container>
      <Header
        title="Consulta Pedido"
        icoName="arrow-left"
        icoNameTwo=""
        functionOnpressIconLeft={() => backOrder()}
      />
      <ContainerBody>
        <ContainerInput>
          <InputType
            placeholder="Nome Cliente"
            valueInputText={inputRazao}
            functionOnChangeText={text => setInputRazao(text)}
          />
          <InputType
            placeholder="Código pedido"
            valueInputText={inputCodPedido}
            functionOnChangeText={text => setCodPedido(text)}
          />
        </ContainerInput>
        <CardOrder
          loading={loading}
          orders={dataStateAux}
          functionOnpress={id => {
            selectorder(id);
          }}
          functionOnEndReached={() => {
            loadOrders();
          }}
          FunctionListFooterComponent={loading && <ActivityIndicator />}
        />
      </ContainerBody>
    </Container>
  );
}
