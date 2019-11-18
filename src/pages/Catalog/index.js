import React from 'react';
// import {View} from 'react-native';

// import {Item} from 'native-base';
import {useDispatch} from 'react-redux';
import {Container, ContainerInput, ContainerList} from './styles';
import Header from '../../components/Header';
import ListView from '../../components/ListView';
import InputType from '../../components/InputType';
// import Bojo from '../../../assets/image/3101.jpg';
import * as CatalogActions from '../../store/modules/catalog/actions';

export default function Catalog({navigation}) {
  const dispatch = useDispatch();
  function handleMoreDetails() {
    dispatch(CatalogActions.catalogMoreDetailsProduct());
  }
  return (
    <Container>
      <Header
        title="Catálogo"
        iconName="bars"
        icoNameTwo="shopping-cart"
        functionOnpressIconLeft={() => navigation.openDrawer()}
      />
      <ContainerInput>
        <InputType placeholder="Digite a linha" icoName="search" areaIcon />
        <InputType placeholder="Digite o modelo" icoName="search" areaIcon />
      </ContainerInput>
      <ContainerList>
        <ListView
          functionOnpresDetails={() => {
            handleMoreDetails();
          }}
        />
      </ContainerList>
    </Container>
  );
}
