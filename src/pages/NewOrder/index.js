import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {
  Container,
  ContainerTotal,
  ContainerClient,
  ContainerPlaceholder,
  ContainerInfo,
  TextClient,
  Text,
  ContainerBody,
  ContainerOrder,
} from './styles';
import Header from '../../components/Header';
import Button from '../../components/Button';
import InputClick from '../../components/InputClick';
import InputType from '../../components/InputType';
import Modal from '../../components/Modalteste2';
// import * as ActionsOrder from '../../store/modules/order/actions';
import * as ActionsNewOrder from '../../store/modules/neworder/actions';
import * as ActionsTable from '../../store/modules/table/actions';

export default function NewOrder() {
  useEffect(() => {
    const date = new Date().getDate();
  });
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.order);
  function backDetailsClient() {
    dispatch(ActionsNewOrder.backDetailsClient());
  }
  const [modalState, setModalState] = useState(false);
  const [dateState, setDateState] = useState('24/11');
  const [inputState, setInputState] = useState('');
  const [inputDateState, setInputDateState] = useState('');
  const [inputClientState, setInputClientState] = useState('');
  const [inputNoteState, setInputNoteState] = useState('');
  const {table} = useSelector(state => state.table);
  const [dataStateAux, setDataStateAux] = useState(table);
  function selectTablePrice(id) {
    dispatch(ActionsTable.selectTablePrice(id, table));
  }

  // function dateNew() {
  //   const now = new `${Date}`();
  //   setDateState(now);
  // }
  return (
    <Container>
      <Header
        title="Novo Pedido"
        icoName="arrow-left"
        icoNameTwo="shopping-cart"
        functionOnpressIconLeft={() => {
          backDetailsClient();
        }}
      />
      <ContainerTotal>
        <ContainerClient>
          <ContainerPlaceholder>
            <Text>Cliente: </Text>
          </ContainerPlaceholder>
          <ContainerInfo>
            <TextClient>Pedido: 8096</TextClient>
            <TextClient>R. Social: {data.razao}</TextClient>
          </ContainerInfo>
        </ContainerClient>
      </ContainerTotal>
      <ScrollView>
        <ContainerBody>
          <ContainerOrder>
            <Text>Data de emissão:</Text>
            <InputType
              placeholder={dateState}
              areaIcon
              icoName="calendar"
              disabledButtonIcon
              valueInputText={dateState}
              functionOnChangeText={text => {
                setInputDateState(text);
              }}
            />
            <InputClick
              textPrimary="Tipo de cobrança:"
              textSecundary="Selecione o tipo"
              icoName="angle-down"
            />
            <InputClick
              textPrimary="Embalagem:"
              textSecundary="Selecione a embalagem"
              icoName="angle-down"
            />
            <InputClick
              textPrimary="Tabela de preço:"
              textSecundary="Selecione a tabela"
              icoName="angle-down"
              functionOnpressInput={() => setModalState(!modalState)}
            />
            <Text>Pedido do cliente: </Text>
            <InputType
              placeholder="Ex: 0000"
              valueInputText={inputClientState}
              functionOnChangeText={text => {
                setInputClientState(text);
              }}
            />
            <InputClick
              textPrimary="Condição de pagamento:"
              textSecundary="Selecione o pagamento"
              icoName="angle-down"
            />
            <Text>Observação: </Text>
            <InputType
              placeholder="Observação"
              valueInputText={inputNoteState}
              functionOnChangeText={text => {
                setInputNoteState(text);
              }}
            />
            <InputClick
              textPrimary="Permitir faturamento antecipado"
              textSecundary="Selecione o faturamento"
              icoName="angle-down"
            />
            <Button titleButton="PROXIMO" />
          </ContainerOrder>
        </ContainerBody>
      </ScrollView>
      <Modal
        valueInputText={inputState}
        functionOnChangeText={text => setInputState(text)}
        placeholder="Digite a tabela"
        modalVisible={modalState}
        data={table}
        nameIcon="times"
        nameIconTwo="search"
        functionOnPressLeft={() => setModalState(!modalState)}
        functionOnPressText={id => {
          selectTablePrice(id);
        }}
      />
    </Container>
  );
}
