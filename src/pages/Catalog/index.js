import React, {useEffect, useState} from 'react';
// import {Text} from 'react-native';

// import {Item} from 'native-base';
import {useDispatch} from 'react-redux';
import {Container, ContainerInput, ContainerList} from './styles';
import Header from '../../components/Header';
import ListView from '../../components/ListView';
import InputType from '../../components/InputType';
// import Bojo from '../../../assets/image/3101.jpg';
import * as CatalogActions from '../../store/modules/catalog/actions';

export default function Catalog({navigation}) {
  const [inputLineState, setInputLineState] = useState('');
  const [inputModelState, setInputModelState] = useState('');
  const [dataState, setDataState] = useState([
    {id: 1, Line: 'Linha: 1', Model: 'Modelo: 3101'},
    {id: 2, Line: 'Linha: P.U', Model: 'Modelo: 3105'},
    {id: 3, Line: 'Linha: P.U', Model: 'Modelo: 3106'},
    {id: 4, Line: 'Linha: P.U', Model: 'Modelo: 3107'},
    {id: 5, Line: 'Linha: P.U', Model: 'Modelo: 3108'},
    {id: 6, Line: 'Linha: P.U', Model: 'Modelo: 3109'},
    {id: 7, Line: 'Linha: P.U', Model: 'Modelo: 3111'},
  ]);
  const [dataStateAux, setDataStateAux] = useState(dataState);
  const dispatch = useDispatch();
  function handleMoreDetails() {
    dispatch(CatalogActions.catalogMoreDetailsProduct());
  }
  useEffect(() => {
    if (inputLineState === '' && inputModelState === '') {
      setDataStateAux([]);
    } else {
      const orderArray = dataState
        .filter(element => {
          return (
            element.Model.toLowerCase().indexOf(
              inputModelState.toLowerCase()
            ) !== -1
          );
        })
        .filter(element => {
          return (
            element.Line.toLowerCase().indexOf(inputLineState.toLowerCase()) !==
            -1
          );
        })
        .map(element => {
          return element;
        });
      console.tron.log(orderArray);
      setDataStateAux(orderArray);
    }
  }, [inputLineState, inputModelState]);//eslint-disable-line
  return (
    <Container>
      <Header
        title="Catálogo"
        iconName="bars"
        icoNameTwo="shopping-cart"
        functionOnpressIconLeft={() => navigation.openDrawer()}
      />
      <ContainerInput>
        <InputType
          valueInputText={inputLineState}
          functionOnChangeText={text => setInputLineState(text)}
          placeholder="Digite a linha"
          icoName="search"
          areaIcon
        />
        <InputType
          valueInputText={inputModelState}
          functionOnChangeText={text => setInputModelState(text)}
          placeholder="Digite o modelo"
          icoName="search"
          areaIcon
        />
      </ContainerInput>
      <ContainerList>
        <ListView
          data={dataStateAux}
          functionOnpressDetails={() => {
            handleMoreDetails();
          }}
        />
      </ContainerList>
    </Container>
  );
}
