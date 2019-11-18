import React from 'react';
// import {Text} from 'react-native';
import Header from '../../components/Header';
import {
  Container,
  Details,
  ContainerBody,
  Tables,
  ContainerTable,
} from './styles';

export default function ProductDetails() {
  function backCatalog() {}
  return (
    <Container>
      <Header
        title="Detalhes"
        icoName="arrow-left"
        icoSize={20}
        icoNameTwo="shopping-cart"
        functionOnpressIconLeft={() => {
          backCatalog();
        }}
      />
      <ContainerBody>
        <Details />
        <ContainerTable>
          <Tables />
        </ContainerTable>
      </ContainerBody>
    </Container>
  );
}
