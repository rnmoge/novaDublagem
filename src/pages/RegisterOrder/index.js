import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  Container,
  ContainerBody,
  Container2,
  ContainerInput,
  ContainerText,
  TextInfo,
  // ContainerTextIcon,
  // TextInfoIcon,
  // ContainerButton,
  ContainerRadius,
  ContainerList,
  // Icon,
} from './styles';
import Header from '../../components/Header';
import InputType from '../../components/InputType';
import CardClient from '../../components/CardClient';
// import Button from '../../components/Button';
import Radius from '../../components/Radius';
import * as ActionsOrder from '../../store/modules/order/actions';

export default function RegisterOrder() {
  const [selectStateOne, setSelectStateOne] = useState(true);
  const [selectStateTwo, setSelectStateTwo] = useState(false);
  const [selectStateThree, setSelectStateThree] = useState(false);
  const {clients} = useSelector(state => state.order);
  const [inputReasonState, setInputReasonState] = useState('');
  const [inputCnpjState, setInputCnpjState] = useState('');
  const [dataStateAux, setDataStateAux] = useState([]);
  // const data = dataState;
  const dispatch = useDispatch();
  function handleDeatilsClient(id) {
    dispatch(ActionsOrder.handleDetailsClient(id, clients));
  }
  function backOrder() {
    dispatch(ActionsOrder.backOrder());
  }
  useEffect(() => {
    dispatch(ActionsOrder.clients());
  }, [dispatch]);
  useEffect(() => {
    if (inputReasonState === '' && inputCnpjState === '') {
      setDataStateAux([]);
    } else {
      const orderArray = clients
        .filter(element => {
          return element.cnpj.indexOf(inputCnpjState) !== -1;
        })
        .filter(element => {
          return (
            element.nome_razao
              .toLowerCase()
              .indexOf(inputReasonState.toLowerCase()) !== -1
          );
        })
        .map(element => {
          return element;
        });
      setDataStateAux(orderArray);
    }
  }, [inputReasonState, inputCnpjState]);// eslint-disable-line
  function trocaRadius1() {
    setSelectStateOne(!selectStateOne);
    setSelectStateTwo(false);
    setSelectStateThree(false);
  }
  function trocaRadius2() {
    setSelectStateTwo(!selectStateTwo);
    setSelectStateOne(false);
    setSelectStateThree(false);
  }
  function trocaRadius3() {
    setSelectStateThree(!selectStateThree);
    setSelectStateTwo(false);
    setSelectStateOne(false);
  }
  return (
    <Container>
      <Header
        title="Seleção de cliente"
        icoName="arrow-left"
        icoNameTwo=""
        functionOnpressIconLeft={() => backOrder()}
      />
      <ContainerBody>
        <ScrollView>
          <Container2>
            <ContainerInput>
              <InputType
                placeholder="Digite a Razão Social"
                valueInputText={inputReasonState}
                functionOnChangeText={text => {
                  setInputReasonState(text);
                }}
                icoName="search"
                areaIcon
              />
              <InputType
                placeholder="Digite o CNPJ"
                valueInputText={inputCnpjState}
                functionOnChangeText={text => {
                  setInputCnpjState(text);
                }}
                icoName="search"
                areaIcon
              />
            </ContainerInput>
          </Container2>
          <ContainerList>
            <CardClient
              data={dataStateAux}
              functionOnpressClient={id => {
                handleDeatilsClient(id);
              }}
            />
          </ContainerList>
        </ScrollView>
      </ContainerBody>
    </Container>
  );
}
