import React, {useState, useEffect} from 'react';
// import {View} from 'react-native';
import {useDispatch} from 'react-redux';
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
  // const [selectStateOne, setSelectStateOne] = useState(false);
  // const [selectStateTwo, setSelectStateTwo] = useState(false);
  // const [selectStateThree, setSelectStateThree] = useState(false);
  const [inputReasonState, setInputReasonState] = useState('');
  const [inputCnpjState, setInputCnpjState] = useState('');
  const [dataState, setDataState] = useState([
    {
      id: 1,
      cod: '45666',
      razao: 'Debora LTDA',
      rua: 'Rua Pio Avelino',
      email: 'lavinia@incca.com.br',
      cidade: 'Franca',
      bairro: '2',
      uf: 'SP',
      cnpj: '41.569.52/0001-91',
    },
    {
      id: 2,
      cod: '45667',
      razao: 'Fransisco LTDA',
      rua: 'Rua Pio Avelino',
      email: 'lavinia@incca.com.br',
      cidade: 'Franca',
      bairro: '2',
      uf: 'SP',
      cnpj: '41.569.52/0001-91',
    },
    {
      id: 3,
      cod: '45698',
      razao: 'Lavinia LTDA',
      rua: ' Rua Pio Avelino',
      email: 'lavinia@incca.com.br',
      cidade: 'Franca',
      bairro: '2',
      uf: 'SP',
      cnpj: '41.569.52/0001-91',
    },
    {
      id: 4,
      cod: '45669',
      razao: 'Celma LTDA',
      rua: ' Rua Pio Avelino',
      email: 'lavinia@incca.com.br',
      cidade: 'Franca',
      bairro: '2',
      uf: 'SP',
      cnpj: '41.569.52/0001-91',
    },
    {
      id: 5,
      cod: '45670',
      razao: 'Gleison LTDA',
      rua: ' Rua Pio Avelino',
      email: 'lavinia@incca.com.br',
      cidade: 'Franca',
      bairro: '2',
      uf: 'SP',
      cnpj: '41.569.52/0001-91',
    },
    {
      id: 6,
      cod: '45630S',
      razao: 'yuri LTDA',
      rua: 'Rua Pio Avelino',
      email: 'lavinia@incca.com.br',
      cidade: 'Franca',
      bairro: '2',
      uf: 'SP',
      cnpj: '41.569.52/0001-91',
    },
  ]);
  const [dataStateAux, setDataStateAux] = useState([]);
  const data = dataState;
  const dispatch = useDispatch();
  function handleDeatilsClient(id) {
    dispatch(ActionsOrder.handleDetailsClient(id, data));
  }
  function backOrder() {
    dispatch(ActionsOrder.backOrder());
  }
  useEffect(() => {
    if (inputReasonState === '' && inputCnpjState === '') {
      setDataStateAux([]);
    } else {
      const orderArray = data
        .filter(element => {
          return (
            element.cnpj.toLowerCase().indexOf(inputCnpjState.toLowerCase()) !==
            -1
          );
        })
        .filter(element => {
          return (
            element.razao
              .toLowerCase()
              .indexOf(inputReasonState.toLowerCase()) !== -1
          );
        })
        .map(element => {
          return element;
        });
      setDataStateAux(orderArray);
    }
  }, [inputReasonState]);// eslint-disable-line
  return (
    <Container>
      <Header
        title="Seleção de cliente"
        icoName="arrow-left"
        icoNameTwo="shopping-cart"
        functionOnpressIconLeft={() => backOrder()}
      />
      <ContainerBody>
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

          <ContainerText>
            <TextInfo>Listar clientes:</TextInfo>
          </ContainerText>
          <ContainerRadius>
            <Radius nameIcon="circle" text="Ativos" />
            <Radius nameIcon="circle" text="Inativos" />
            <Radius nameIcon="dot-circle" text="Todos" />
          </ContainerRadius>
        </Container2>
        <ContainerList>
          <CardClient
            data={dataStateAux}
            functionOnpressClient={id => {
              handleDeatilsClient(id);
            }}
          />
        </ContainerList>
      </ContainerBody>
    </Container>
  );
}
