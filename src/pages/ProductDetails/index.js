import React, {useState} from 'react';
// import {Text} from 'react-native';
import {useDispatch} from 'react-redux';
import Header from '../../components/Header';
import CardDetails from '../../components/CardDetails';
import CardTablePrice from '../../components/CardTablePrice';
import {Container, ContainerBody} from './styles';
import * as DetailsProductActions from '../../store/modules/detailsproduct/actions';

export default function ProductDetails() {
  const dispatch = useDispatch();
  const [dataState, setDataState] = useState([
    {
      id: 1,
      line: 'Linha 1',
      model: '3101',
      description: 'Bojo Liso',
      feacture: 'Bojo Liso',
    },
  ]);
  const [dataTableState, setDataTableState] = useState([
    {id: 1, size: 'PP/38 - GG/46'},
    {id: 2, size: 'PP/38 - XG/46'},
    {id: 3, size: 'P/40 - GG/46'},
    {id: 4, size: 'M/42 - XG/48'},
    {id: 5, size: 'G/44 - GG/46'},
    {id: 6, size: 'XG/48 - EEXG/54'},
    {id: 7, size: 'XG/48 - EEXXG/54'},
  ]);
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
        <CardDetails data={dataState} />
        <CardTablePrice data={dataTableState} />
      </ContainerBody>
    </Container>
  );
}
