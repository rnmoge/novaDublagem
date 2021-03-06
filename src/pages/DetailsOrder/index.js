import React, {useState, useEffect} from 'react';
import {ScrollView, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/Header';
import Button from '../../components/Button';
import ModalCopy from '../../components/ModalCopyOrder';
import ModalUpdate from '../../components/ModalUpdate';
import ItensOrder from '../../components/ItensOrder';
import Details from '../../components/DetailsOrder';
import EditOrder from '../../components/EditOrder';
import ModalTypeCharge from '../../components/ModalTypeCharge';
import {
  Container,
  ContainerBody,
  ContainerButtonTotal,
  ContainerButton,
} from './styles';
import * as ActionsQuery from '../../store/modules/queryorder/actions';
import * as ActionsEdit from '../../store/modules/editorder/actions';

import {TextBold} from '../../styles/fonts';

export default function DetailsOrder() {
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.common);
  const {modalEdit, modalRemove, modalAdd} = useSelector(
    state => state.editorder
  );
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
  const [modalBody, setModalBody] = useState(false);
  const [modalItens, setModalItens] = useState(false);
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);
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
  useEffect(() => {
    if (order !== []) {
      setData2(order);
    } else {
      setData2(null);
    }
  }, [order]);
  function openModal(index) {
    setData(order.pedidoItens[index]);
    dispatch(ActionsEdit.selectItem(index));
    dispatch(ActionsEdit.openModalEdit(true));
  }
  function removeItem(index) {
    dispatch(ActionsEdit.removeItem(order, index));
  }
  function addItem() {
    dispatch(ActionsEdit.openModalAdd(true));
  }
  function closeModalRemove() {
    dispatch(ActionsEdit.closeModalRemove(false));
  }
  function closeModalAdd() {
    dispatch(ActionsEdit.closeModalAdd(false));
  }
  return (
    <Container>
      <Header
        title="Detalhes Pedido"
        icoName="arrow-left"
        functionOnpressIconLeft={() => {
          backQueryOrder();
        }}
        icoNameTwo={order.situacao_cod === 22 ? 'edit' : ''}
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
            <Details
              data={order}
              openModal={() => {
                setModalBody(!modalBody);
              }}
            />
            <ItensOrder
              data={order.pedidoItens}
              iconExist={order.situacao_cod === 8}
              functionOnPressIcon={index => {
                openModal(index);
              }}
              functionOnPressRemove={index => {
                removeItem(index);
              }}
              functionOnPressIconAdd={() => {
                addItem();
              }}
            />
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
      <>
        <ModalUpdate
          modalVisible={modalUpdate}
          text="Pedido Transmitido"
          functionOnPressText={() => {
            closeModalUpdate();
          }}
        />
        <ModalUpdate
          modalVisible={modalRemove}
          text="Não é possivel remover esse item"
          functionOnPressText={() => {
            closeModalRemove();
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
        <EditOrder
          modalVisible={modalEdit}
          // functionOnpressIconLeft={() => {
          //   setModalItens(!modalItens);
          // }}
          data={data}
          orders={order}
        />
        <ModalTypeCharge
          modalVisible={modalAdd}
          addExist={false}
          order={data2}
          functionOnPressLeft={() => {
            closeModalAdd();
          }}
        />
        {/* <EditOrder
        modalVisible={modalItens}
        functionOnpressIconLeft={() => {

        }}
        itensExist={false}
      /> */}
      </>
    </Container>
  );
}
