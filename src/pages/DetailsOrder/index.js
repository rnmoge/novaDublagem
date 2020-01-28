import React, {useState, useEffect} from 'react';
import {ScrollView, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/Header';
import Button from '../../components/Button';
import ModalCopy from '../../components/ModalCopyOrder';
import ModalUpdate from '../../components/ModalUpdate';
import ItensOrder from '../../components/ItensOrder';
import Details from '../../components/DetailsOrder';
import {
  Container,
  ContainerBody,
  ContainerButtonTotal,
  ContainerButton,
} from './styles';
import * as ActionsQuery from '../../store/modules/queryorder/actions';
import {saveOrderTotal} from '../../store/modules/finalizeorder/actions';

export default function DetailsOrder() {
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.common);
  const {order, date, newOrders, modalUpdate} = useSelector(
    state => state.queryorder
  );
  // const {orders, newOrders} = useSelector(state => state.queryorder);

  const [inputCod, setInputCod] = useState();
  const [inputDate, setInputDate] = useState(date);
  const [modalState, setModalState] = useState(false);
  const [textError, setTextError] = useState(false);
  const [specialPrice, setSpecialPrice] = useState(0);
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
    dispatch(ActionsQuery.requestOrders(1, null));
  }
  function copyOrder() {
    const specialPrice2 = order.condicaoPagamento.descricao;
    if (specialPrice2 === 'A VISTA') {
      setSpecialPrice(1);
    } else {
      setSpecialPrice(0);
    }
    setModalState(!modalState);
  }
  function newOrderCopy() {
    dispatch(
      ActionsQuery.copyOrder(inputCod, inputDate, order, emission, specialPrice)
    );
  }
  function saveOrder() {
    dispatch(ActionsQuery.saveOrderTransmit(order));
  }
  function closeModalUpdate() {
    dispatch(ActionsQuery.closeModal(false));
  }
  return (
    <Container>
      <Header
        title="Detalhes Pedido"
        icoName="arrow-left"
        functionOnpressIconLeft={() => {
          backQueryOrder();
        }}
        icoNameTwo={order.situacao_cod === 8 ? 'edit' : ''}
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

          {order.situacao_cod === 8 ? (
            <ContainerButtonTotal>
              <ContainerButton>
                <Button
                  titleButton="TRANSMITIR PEDIDO"
                  disabledButton={false}
                  functionOnPress={() => {
                    saveOrder();
                  }}
                />
              </ContainerButton>
              <ContainerButton>
                <Button
                  titleButton="COPIAR PEDIDO"
                  disabledButton={false}
                  functionOnPress={() => {
                    copyOrder();
                  }}
                />
              </ContainerButton>
            </ContainerButtonTotal>
          ) : (
            <Button
              titleButton="COPIAR PEDIDO"
              disabledButton={false}
              functionOnPress={() => {
                copyOrder();
              }}
            />
          )}
        </ContainerBody>
      )}
      <ModalUpdate
        modalVisible={modalUpdate}
        text="Pedido Transmitido"
        functionOnPressText={() => {
          closeModalUpdate();
        }}
      />
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
