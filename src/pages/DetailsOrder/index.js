import React, {useState, useEffect} from 'react';
import {ScrollView, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/Header';
import Button from '../../components/Button';
import ModalCopy from '../../components/ModalCopyOrder';
import ItensOrder from '../../components/ItensOrder';
import Details from '../../components/DetailsOrder';
import {Container, ContainerBody} from './styles';
import * as ActionsQuery from '../../store/modules/queryorder/actions';

export default function DetailsOrder() {
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.common);
  const {order, date, newOrders} = useSelector(state => state.queryorder);
  // const {orders, newOrders} = useSelector(state => state.queryorder);
  const [inputCod, setInputCod] = useState();
  const [inputDate, setInputDate] = useState(date);
  const [modalState, setModalState] = useState(false);
  const [textError, setTextError] = useState(false);
  const [error, setError] = useState(false);
  const [disable, setDisable] = useState(true);
  const day = new Date().getDate(); // Current Date
  const month = new Date().getMonth() + 1; // Current Month
  const year = new Date().getFullYear(); // Current Year
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const emission = `${day}/${month}/${year}T${hours}:${minutes}`;

  useEffect(() => {
    if (inputDate === '' || inputCod === '') {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [inputCod, inputDate]);
  useEffect(() => {
    setInputDate(date);
  }, [date]);
  useEffect(() => {
    setTextError(false);
    const newDate = inputDate.split('/');
    const newDateBiliing = date.split('/');
    if (
      newDate[0] < newDateBiliing[0] &&
      newDate[1] <= newDateBiliing[1] &&
      newDate[2] === newDateBiliing[2]
    ) {
      setTextError(!textError);
    } else if (
      newDate[0] > newDateBiliing[0] &&
      newDate[1] >= newDateBiliing[1] &&
      newDate[2] === newDateBiliing[2]
    ) {
      setInputDate(inputDate);
      if (textError) {
        setTextError(!textError);
      } else {
        setInputDate(inputDate);
      }
    }
  }, [date, inputDate]); // eslint-disable-line

  function backQueryOrder() {
    dispatch(ActionsQuery.backQueryOrder());
  }
  function copyOrder() {
    setModalState(!modalState);
  }
  function newOrderCopy() {
    dispatch(ActionsQuery.copyOrder(inputCod, inputDate, order, emission));
  }
  return (
    <Container>
      <Header
        title="Detalhes Pedido"
        icoName="arrow-left"
        functionOnpressIconLeft={() => {
          backQueryOrder();
        }}
      />
      {loading ? (
        <ActivityIndicator
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          size="large"
          color="#fff000"
        />
      ) : (
        <ContainerBody>
          <ScrollView>
            <Details data={order} />
            <ItensOrder data={order.pedidoItens} />
          </ScrollView>
          <Button
            titleButton="COPIAR PEDIDO"
            disabledButton={false}
            functionOnPress={() => {
              copyOrder();
            }}
          />
        </ContainerBody>
      )}
      <ModalCopy
        modalVisible={modalState}
        functionOnPressText={() => {
          newOrderCopy();
        }}
        valueInputCod={inputCod}
        valueInput={inputDate}
        onChangeText={text => {
          setInputDate(text);
        }}
        functionOnChange={te => {
          setInputCod(te);
        }}
        disabled={disable}
        textExist={textError}
        functionOnpress={() => {
          setModalState(!modalState);
        }}
      />
    </Container>
  );
}
