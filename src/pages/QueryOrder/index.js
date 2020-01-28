import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native';
import * as ActionsOrder from '../../store/modules/order/actions';
import * as ActionsQuery from '../../store/modules/queryorder/actions';
import Header from '../../components/Header';
import InputType from '../../components/InputType';
import CardOrder from '../../components/CardOrder';
import {Container, ContainerBody, ContainerInput, Loading} from './styles';

export default function QueryOrder() {
  const dispatch = useDispatch();
  const {orders, page, last} = useSelector(state => state.queryorder);
  const {loading} = useSelector(state => state.common);
  const [inputRazao, setInputRazao] = useState('');
  const [inputCodPedido, setCodPedido] = useState('');
  const [dataStateAux, setDataStateAux] = useState([]);
  const [iconHeader, setIconHeader] = useState(false);
  const [newPage, setNewPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setNewPage(page);
  }, [page]);
  function loadOrders() {
    if (last === page) return;
    dispatch(ActionsQuery.requestOrders(Number(newPage)));
  }
  useEffect(() => {
    loadOrders();
  }, []); // eslint-disable-line

  useEffect(() => {
    if (dataStateAux === null || dataStateAux.length === 0) {
      setDataStateAux(orders);
    } else {
      const newOrders = [...orders];
      setDataStateAux([...dataStateAux, ...newOrders]);
    }
  }, [orders]); // eslint-disable-line

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
  // function selectOnlongPress() {
  //
  //   setIconHeader(true);
  // }
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
          // functionOnLongOnPress={() => {
          //   selectOnlongPress();
          // }}
          functionOnEndReached={() => {
            loadOrders();
          }}
        />
      </ContainerBody>
    </Container>
  );
}
