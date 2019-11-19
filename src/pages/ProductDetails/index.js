import React from 'react';
// import {Text} from 'react-native';
import {useDispatch} from 'react-redux';
import Header from '../../components/Header';
import CardDetails from '../../components/CardDetails';
import CardTablePrice from '../../components/CardTablePrice';
import {Container, ContainerBody} from './styles';
import * as DetailsProductActions from '../../store/modules/detailsproduct/actions';

export default function ProductDetails() {
  const dispatch = useDispatch();

  function backCatalogPage() {
    dispatch(DetailsProductActions.backCatalog());
  }
  return (
    <Container>
      <Header
        title="Detalhes"
        icoName="arrow-left"
        icoSize={20}
        icoNameTwo="shopping-cart"
        functionOnpressIconLeft={() => {
          backCatalogPage();
        }}
      />
      <ContainerBody>
        <CardDetails
          line="P.U"
          model="3101"
          description="3101 BJ LIS"
          feacture="Liso com cabo"
        />
        <CardTablePrice />
      </ContainerBody>
    </Container>
  );
}
