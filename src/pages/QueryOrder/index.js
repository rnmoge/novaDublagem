import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as ActionsOrder from '../../store/modules/order/actions';
import * as ActionsQuery from '../../store/modules/queryorder/actions';
import Header from '../../components/Header';
import InputType from '../../components/InputType';
import CardOrder from '../../components/CardOrder';
import {Container, ContainerBody, ContainerInput} from './styles';

export default function QueryOrder() {
  const dispatch = useDispatch();
  const {orders, page} = useSelector(state => state.queryorder);
  const {loading} = useSelector(state => state.common);
  const [inputRazao, setInputRazao] = useState('');
  const [inputCodPedido, setCodPedido] = useState('');
  const [dataStateAux, setDataStateAux] = useState([]);
  const [newPage, setNewPage] = useState(page);
  console.tron.log(page);
  useEffect(() => {
    setNewPage(page);
  }, [page]);
  function loadOrders() {
    console.tron.log('entrou');
    dispatch(ActionsQuery.requestOrders(newPage));
  }
  useEffect(() => {
    loadOrders();
  }, []); // eslint-disable-line
  useEffect(() => {
    setDataStateAux(orders);
  }, [orders]);// eslint-disable-line
  useEffect(() => {
    if (orders !== null) {
      const orderArray = orders
        .filter(element => {
          return (
            element.pedidoCod
              .toLowerCase()
              .indexOf(inputCodPedido.toLowerCase()) !== -1
          );
        })
        .filter(element => {
          return (
            element.nomeRazao
              .toLowerCase()
              .indexOf(inputRazao.toLowerCase()) !== -1
          );
        })
        .map(element => {
          return element;
        });
      setDataStateAux(orderArray);
    }
  }, [inputRazao, inputCodPedido]); // eslint-disable-line
  function selectorder(id) {
    dispatch(ActionsQuery.selectOrder(id));
    dispatch(ActionsQuery.ordersSucess(orders));
  }
  function backOrder() {
    dispatch(ActionsOrder.backOrder());
  }
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
        />
      </ContainerBody>
    </Container>
  );
}
