import React, {useState} from 'react';
// import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/Header';
import CardDetails from '../../components/CardDetails';
import CardTablePrice from '../../components/CardTablePrice';
import {Container, ContainerBody} from './styles';
import * as ActionsCatalog from '../../store/modules/catalog/actions';

export default function ProductDetails() {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.catalog);
  console.tron.log(data);
  function informationProduct() {
    dispatch(ActionsCatalog.catalogMoreDetailsProductSucess());
    dispatch(ActionsCatalog.requestTablePrice());
  }
  function backCatalogPage() {
    dispatch(ActionsCatalog.backCatalog());
  }

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
  return (
    <Container onLayout={() => informationProduct()}>
      <Header
        title="Detalhes"
        icoName="arrow-left"
        icoSize={20}
        icoNameTwo="shopping-cart"
        functionOnpressIconLeft={() => {
          backCatalogPage();
        }}
      />
      <ContainerBody onLayout={() => {}}>
        <CardDetails data={data} />
        <CardTablePrice data={dataTableState} />
      </ContainerBody>
    </Container>
  );
}
