import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container, ContainerInput, ContainerList} from './styles';
import Header from '../../components/Header';
import ListView from '../../components/ListView';
import InputType from '../../components/InputType';
import * as CatalogActions from '../../store/modules/catalog/actions';

export default function Catalog({navigation}) {
  const [inputLineState, setInputLineState] = useState('');
  const [inputModelState, setInputModelState] = useState('');
  const {data} = useSelector(state => state.catalog);
  console.tron.log(data);
  console.tron.log('data');
  const [dataStateAux, setDataStateAux] = useState(data);
  const dispatch = useDispatch();
  function handleMoreDetails() {
    dispatch(CatalogActions.catalogMoreDetailsProduct());
  }
  function products1() {
    dispatch(CatalogActions.requestProductsCatalog());
  }
  useEffect(() => {
    if (inputLineState === '' && inputModelState === '') {
      setDataStateAux([]);
    } else {
      const orderArray = data
        .filter(element => {
          return (
            element.matriz
              .toLowerCase()
              .indexOf(inputModelState.toLowerCase()) !== -1
          );
        })
        .filter(element => {
          return (
            element.linha
              .toLowerCase()
              .indexOf(inputLineState.toLowerCase()) !== -1
          );
        })
        .map(element => {
          return element;
        });
      setDataStateAux(orderArray);
    }
  }, [inputLineState, inputModelState]);// eslint-disable-line
  return (
    <Container
      onLayout={() => {
        products1();
      }}>
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
