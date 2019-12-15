import React, {useState} from 'react';
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
import ModalPrice from '../../components/Modalteste2';
import ModalCatalog from '../../components/ModalCatalog';
import * as ActionsNewOrder from '../../store/modules/neworder/actions';

export default function NewOrder() {
  // useEffect(() => {
  //   const date = new Date().getDate();
  // });
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.order);
  const [dataTypeCharge, setDataTypeCharge] = useState([
    {id: 1, descricao: 'BANCÁRIA'},
    {id: 2, descricao: 'DEPÓSITO'},
    {id: 3, descricao: 'BNDES'},
  ]);
  const [dataPacking, setDataPacking] = useState([
    {id: 1, descricao: 'INDIVIDUAL/ CX 60PRS'},
  ]);
  const [dataPagament, setDataPagament] = useState([
    {id: 1, descricao: 'A VISTA'},
    {id: 2, descricao: '28 / 42 / 56 '},
    {id: 3, descricao: '28 / 56 / 84 '},
    {id: 4, descricao: '30 / 60'},
    {id: 5, descricao: '30 / 60 / 90 '},
    {id: 6, descricao: ' 42 DD'},
    {id: 7, descricao: ' 56 DD'},
  ]);
  const [dataBillings, setdataBillings] = useState([
    {id: 1, descricao: 'SIM'},
    {id: 2, descricao: 'NÃO'},
  ]);

  const [modalState, setModalState] = useState(false);
  const [inputTablePrice, setInputTablePrice] = useState('Selecione a tabela');
  const [inputTypeCharge, setInputTypeCharge] = useState('Selecione o tipo');
  const [inputPacking, setInputPacking] = useState('Selecione a embalagem');
  const [inputPagament, setInputPagament] = useState('Selecione o pagamento');
  const [inputBillings, setInputBillings] = useState('Selecione o faturamento');
  const [modalStateType, setModalStateType] = useState(false);
  const [modalStatePacking, setModalStatePacking] = useState(false);
  const [modalStatePagament, setModalStatePagament] = useState(false);
  const [modalStateBillings, setModalStateBillings] = useState(false);
  const [dateState, setDateState] = useState('12/12/2019');
  const [inputState, setInputState] = useState('');
  const [inputDateState, setInputDateState] = useState('');
  const [inputClientState, setInputClientState] = useState('');
  const [inputNoteState, setInputNoteState] = useState('');
  const {table} = useSelector(state => state.table);
  // const [dataStateAux, setDataStateAux] = useState(table);

  // ->funções da pagina<-

  // Função voltar
  function backDetailsClient() {
    dispatch(ActionsNewOrder.backDetailsClient());
  }
  // Funçoes do modal
  function selectInputTablePrice() {
    setModalState(!modalState);
  }
  function selectTablePrice(id, tabelapreco) {
    setInputTablePrice(tabelapreco);
    dispatch(ActionsNewOrder.selectTableOrder(id));
    setModalState(!modalState);
  }
  // função de tipo de cobrança
  function typeCharge() {
    setModalStateType(!modalStateType);
  }
  function selectTypeCharge(id, descricao) {
    setInputTypeCharge(descricao);
    setModalStateType(!modalStateType);
  }
  // função de embalagem
  function packing() {
    setModalStatePacking(!modalStatePacking);
  }
  function selectPacking(id, descricao) {
    setInputPacking(descricao);
    setModalStatePacking(!modalStatePacking);
  }
  // função forma de pagamento
  function pagament() {
    setModalStatePagament(!modalStatePagament);
  }
  function selectPagament(id, descricao) {
    setInputPagament(descricao);
    setModalStatePagament(!modalStatePagament);
  }
  // função de faturamento antecipado
  function billings() {
    setModalStateBillings(!modalStateBillings);
  }
  function selectBillings(id, descricao) {
    setInputBillings(descricao);
    setModalStateBillings(!modalStateBillings);
  }
  function handleProducts() {
    dispatch(ActionsNewOrder.handleProducts(inputTablePrice, inputPagament));
  }
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
            <Text>Cliente:</Text>
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
              textSecundary={inputTypeCharge}
              icoName="angle-down"
              functionOnpressInput={() => {
                typeCharge();
              }}
            />
            <InputClick
              textPrimary="Embalagem:"
              textSecundary={inputPacking}
              icoName="angle-down"
              functionOnpressInput={() => {
                packing();
              }}
            />
            <InputClick
              textPrimary="Tabela de preço:"
              textSecundary={inputTablePrice}
              icoName="angle-down"
              functionOnpressInput={() => selectInputTablePrice()}
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
              textSecundary={inputPagament}
              icoName="angle-down"
              functionOnpressInput={() => {
                pagament();
              }}
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
              textSecundary={inputBillings}
              icoName="angle-down"
              functionOnpressInput={() => {
                billings();
              }}
            />
            <Button
              titleButton="PROXIMO"
              disabledButton={false}
              functionOnPress={() => {
                handleProducts();
              }}
            />
          </ContainerOrder>
        </ContainerBody>
      </ScrollView>
      <ModalPrice
        valueInputText={inputState}
        functionOnChangeText={text => setInputState(text)}
        placeholder="Digite a tabela"
        modalVisible={modalState}
        data={table}
        nameIcon="times"
        nameIconTwo="search"
        functionOnPressLeft={() => setModalState(!modalState)}
        functionOnPressText={(id, tabelapreco) => {
          selectTablePrice(id, tabelapreco);
        }}
      />

      <ModalCatalog
        valueInputText={inputState}
        functionOnChangeText={text => setInputState(text)}
        placeholder="Digite o tipo de cobrança"
        modalVisible={modalStateType}
        data={dataTypeCharge}
        nameIcon="times"
        nameIconTwo="search"
        functionOnPressLeft={() => setModalStateType(!modalStateType)}
        functionOnPressText={(id, descricao) => {
          selectTypeCharge(id, descricao);
        }}
      />
      <ModalCatalog
        valueInputText={inputState}
        functionOnChangeText={text => setInputState(text)}
        placeholder="Digite a embalagem"
        modalVisible={modalStatePacking}
        data={dataPacking}
        nameIcon="times"
        nameIconTwo="search"
        functionOnPressLeft={() => setModalStatePacking(!modalStatePacking)}
        functionOnPressText={(id, descricao) => {
          selectPacking(id, descricao);
        }}
      />
      <ModalCatalog
        valueInputText={inputState}
        functionOnChangeText={text => setInputState(text)}
        placeholder="Digite o pagamento"
        modalVisible={modalStatePagament}
        data={dataPagament}
        nameIcon="times"
        nameIconTwo="search"
        functionOnPressLeft={() => setModalStatePagament(!modalStatePagament)}
        functionOnPressText={(id, descricao) => {
          selectPagament(id, descricao);
        }}
      />
      {/* setModalStateBillings(!setModalStateBillings); */}
      <ModalCatalog
        valueInputText={inputState}
        functionOnChangeText={text => setInputState(text)}
        placeholder="Digite o faturamento"
        modalVisible={modalStateBillings}
        data={dataBillings}
        nameIcon="times"
        nameIconTwo="search"
        functionOnPressLeft={() => setModalStateBillings(modalStateBillings)}
        functionOnPressText={(id, descricao) => {
          selectBillings(id, descricao);
        }}
      />
    </Container>
  );
}
