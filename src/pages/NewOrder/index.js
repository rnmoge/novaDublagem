import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import * as ActionsTable from '../../store/modules/table/actions';
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
import Cart from '../../components/Cart';
import ModalTypeCharge from '../../components/ModalTypeCharge';
import * as ActionsNewOrder from '../../store/modules/neworder/actions';
import * as ActionsCart from '../../store/modules/cart/actions';
import * as ActionsFinalize from '../../store/modules/finalizeorder/actions';

export default function NewOrder() {
  const dispatch = useDispatch();
  const {
    charges,
    packings,
    pagaments,
    idTable,
    comission,
    valueTypeCharge,
    valueTablePrice,
    valueClientState,
    valuePagament,
    valueNoteState,
    valueBillings,
    valuePacking,
    idTypeCharge,
    idPacking,
    idPagament,
    idBilling,
  } = useSelector(state => state.neworder);
  const {clientId, representativeId, typeOrder} = useSelector(
    state => state.finalizeorder
  );
  const {data} = useSelector(state => state.order);
  const [dataBillings, setdataBillings] = useState([
    {id: 1, descricao: 'SIM'},
    {id: 2, descricao: 'NÃO'},
  ]);
  const day = new Date().getDate(); // Current Date
  const month = new Date().getMonth() + 1; // Current Month
  const year = new Date().getFullYear(); // Current Year
  const date = `${day}/${month}/${year}`;
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const complete = `${day}/${month}/${year}T${hours}:${minutes}`;
  const [modalState, setModalState] = useState(false);
  const [inputTablePrice, setInputTablePrice] = useState('Selecione a tabela');
  const [inputTypeCharge, setInputTypeCharge] = useState(
    'Selecione o tipo de cobrança'
  );
  const [disableButton, setDisableButton] = useState(true);
  const [typeChargeId, setTypeChargeId] = useState(null);
  const [packingId, setPackingId] = useState(null);
  const [pagamentId, setPagamentId] = useState(null);
  const [billingId, setBillingId] = useState(null);
  const [inputPacking, setInputPacking] = useState('Selecione a embalagem');
  const [inputPagament, setInputPagament] = useState('Selecione o pagamento');
  const [inputBillings, setInputBillings] = useState('Selecione o faturamento');
  const [modalStateType, setModalStateType] = useState(false);
  const [modalStatePacking, setModalStatePacking] = useState(false);
  const [modalStatePagament, setModalStatePagament] = useState(false);
  const [modalStateBillings, setModalStateBillings] = useState(false);
  const [dateState, setDateState] = useState(date);
  const [completeState, setCompleteState] = useState(complete);
  const [inputState, setInputState] = useState('');
  const [inputDateState, setInputDateState] = useState(dateState);
  const [inputClientState, setInputClientState] = useState('');
  const [inputNoteState, setInputNoteState] = useState(null);
  const {table} = useSelector(state => state.table);
  const {stateModal} = useSelector(state => state.cart);

  useEffect(() => {
    if (valueTypeCharge !== '') {
      setInputTypeCharge(valueTypeCharge);
    } else {
      setInputTypeCharge('Selecione o tipo de cobrança');
    }
    if (valueTablePrice !== '') {
      setInputTablePrice(valueTablePrice);
    } else {
      setInputTablePrice('Selecione a tabela');
    }
    if (valueClientState !== '') {
      setInputClientState(valueClientState);
    } else {
      setInputClientState('');
    }
    if (valuePagament !== '') {
      setInputPagament(valuePagament);
    } else {
      setInputPagament('Selecione o pagamento');
    }
    if (valueNoteState !== '') {
      setInputNoteState(valueNoteState);
    } else if (valueNoteState === null) {
      setInputNoteState('');
    } else {
      setInputNoteState('');
    }
    if (valueBillings !== '') {
      setInputBillings(valueBillings);
    } else {
      setInputBillings('Selecione o faturamento');
    }
    if (valuePacking !== '') {
      setInputPacking(valuePacking);
    } else {
      setInputPacking('Selecione a embalagem');
    }
  }, [
    valueBillings,
    valueClientState,
    valueNoteState,
    valuePacking,
    valuePagament,
    valueTablePrice,
    valueTypeCharge,
  ]);
  useEffect(() => {
    if (
      inputTablePrice === 'Selecione a tabela' ||
      inputTypeCharge === 'Selecione o tipo de cobrança' ||
      inputPacking === 'Selecione a embalagem' ||
      inputPagament === 'Selecione o pagamento' ||
      inputBillings === 'Selecione o faturamento'
    ) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [
    inputBillings,
    inputPacking,
    inputPagament,
    inputTablePrice,
    inputTypeCharge,
  ]);
  useEffect(() => {
    if (idPacking !== '' || idPacking !== null) {
      setPackingId(idPacking);
    }
    if (idTypeCharge !== '' || idTypeCharge !== null) {
      setTypeChargeId(idTypeCharge);
    }
    if (idPagament !== '' || idPagament !== null) {
      setPagamentId(idPagament);
    }
    if (idBilling !== '' || idBilling !== null) {
      setBillingId(idBilling);
    }
  }, [idBilling, idPacking, idPagament, idTypeCharge]);
  // ->funções da pagina<-
  // Função voltar
  function backDetailsClient() {
    dispatch(ActionsNewOrder.backDetailsClient());
    // dispatch(ActionsNewOrder.cleanTotal());
  }
  // Funçoes do modal tabela preço
  function selectInputTablePrice() {
    dispatch(ActionsTable.requestTablePrice());
    setModalState(!modalState);
  }
  function selectTablePrice(id, tabelapreco) {
    setInputTablePrice(tabelapreco);
    dispatch(ActionsNewOrder.selectTableOrder(id));
    setModalState(!modalState);
  }
  // função de tipo de cobrança
  function typeCharge() {
    dispatch(ActionsNewOrder.selectTypeCharge());
    setModalStateType(!modalStateType);
  }
  function selectTypeCharge(id, descricao) {
    setInputTypeCharge(descricao);
    setModalStateType(!modalStateType);
    setTypeChargeId(id);
  }
  // função de embalagem
  function packingTwo() {
    setModalStatePacking(!modalStatePacking);
  }
  function selectPacking(id, descricao) {
    setInputPacking(descricao);
    setModalStatePacking(!modalStatePacking);
    setPackingId(id);
  }
  // função forma de pagamento
  function pagament() {
    setModalStatePagament(!modalStatePagament);
  }
  function selectPagament(id, descricao) {
    setInputPagament(descricao);
    setModalStatePagament(!modalStatePagament);
    setPagamentId(id);
  }
  // função de faturamento antecipado
  function billings() {
    setModalStateBillings(!modalStateBillings);
  }
  function selectBillings(id, descricao) {
    setInputBillings(descricao);
    setModalStateBillings(!modalStateBillings);
    setBillingId(id);
  }
  function handleCart() {
    dispatch(ActionsCart.cartOpen(true));
    dispatch(ActionsCart.requestCart());
  }
  function handleProducts() {
    dispatch(ActionsNewOrder.handleProducts(inputTablePrice, inputPagament));
    dispatch(
      ActionsNewOrder.saveState(
        inputTypeCharge,
        inputTablePrice,
        inputClientState,
        inputPagament,
        inputNoteState,
        inputBillings,
        inputPacking,
        typeChargeId,
        packingId,
        pagamentId,
        billingId
      )
    );

    dispatch(
      ActionsFinalize.saveNewOrder(
        completeState,
        inputClientState,
        typeChargeId,
        packingId,
        idTable,
        comission.desconto_vista_percent,
        pagamentId,
        inputNoteState,
        billingId,
        clientId,
        representativeId,
        typeOrder
      )
    );
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
        functionOnpressIconRigth={() => {
          handleCart();
        }}
      />
      <ContainerTotal>
        <ContainerClient>
          <ContainerPlaceholder>
            <Text>Cliente: {data.nome_razao}</Text>
          </ContainerPlaceholder>
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
                packingTwo();
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
              number={14}
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
              titleButton="PRÓXIMO"
              disabledButton={disableButton}
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

      <ModalTypeCharge
        valueInputText={inputState}
        functionOnChangeText={text => setInputState(text)}
        placeholder="Digite o tipo de cobrança"
        modalVisible={modalStateType}
        data={charges}
        nameIcon="times"
        nameIconTwo="search"
        functionOnPressLeft={() => setModalStateType(!modalStateType)}
        functionOnPressText={(id, descricao) => {
          selectTypeCharge(id, descricao);
        }}
      />
      <ModalTypeCharge
        valueInputText={inputState}
        functionOnChangeText={text => setInputState(text)}
        placeholder="Digite a embalagem"
        modalVisible={modalStatePacking}
        data={packings}
        nameIcon="times"
        nameIconTwo="search"
        functionOnPressLeft={() => setModalStatePacking(!modalStatePacking)}
        functionOnPressText={(id, descricao) => {
          selectPacking(id, descricao);
        }}
      />
      <ModalTypeCharge
        valueInputText={inputState}
        functionOnChangeText={text => setInputState(text)}
        placeholder="Digite o pagamento"
        modalVisible={modalStatePagament}
        data={pagaments}
        nameIcon="times"
        nameIconTwo="search"
        functionOnPressLeft={() => setModalStatePagament(!modalStatePagament)}
        functionOnPressText={(id, descricao) => {
          selectPagament(id, descricao);
        }}
      />
      <ModalTypeCharge
        valueInputText={inputState}
        functionOnChangeText={text => setInputState(text)}
        placeholder="Digite o faturamento"
        modalVisible={modalStateBillings}
        data={dataBillings}
        nameIcon="times"
        nameIconTwo="search"
        functionOnPressLeft={() => setModalStateBillings(!modalStateBillings)}
        functionOnPressText={(id, descricao) => {
          selectBillings(id, descricao);
        }}
      />
      <Cart modalVisible={stateModal} />
    </Container>
  );
}
