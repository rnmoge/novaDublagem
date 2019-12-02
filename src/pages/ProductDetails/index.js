import React, {useState, useEffect} from 'react';
// import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/Header';
import CardDetails from '../../components/CardDetails';
import Button from '../../components/Button';
import CardTablePrice from '../../components/CardTablePrice';
import {Container, ContainerBody, ContainerModal} from './styles';
import * as ActionsCatalog from '../../store/modules/catalog/actions';
import Modal from '../../components/Modal';

export default function ProductDetails() {
  const dispatch = useDispatch();
  const {product, prices} = useSelector(state => state.catalog);
  const {data2} = useSelector(state => state.table);
  const [stateProduct, setStateProduct] = useState(product);
  const [stateSize, setStateSize] = useState(null);
  const [statePriceOne, setStatePriceOne] = useState(null);
  const [statePriceTwo, setStatePriceTwo] = useState(null);
  const [statePriceThree, setStatePriceThree] = useState(null);
  console.tron.log(stateSize);
  const [stateTableComission, setStateTableComission] = useState(data2);
  const [modalState, setModalState] = useState(false);
  useEffect(() => {
    setStateProduct(product);
    setStateTableComission(data2);
    setStateSize(prices);
    setStatePriceOne(prices);
    setStatePriceTwo(prices);
    setStatePriceThree(prices);
  }, [prices, product,data2]); // eslint-disable-line
  function backCatalogPage() {
    dispatch(ActionsCatalog.backCatalog());
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
        <CardDetails product={stateProduct} />
        <CardTablePrice
          table={stateSize}
          commision={stateTableComission}
          price1={statePriceOne}
          price2={statePriceTwo}
          price3={statePriceThree}
        />
        <Button
          titleButton="VER CORES"
          functionOnPress={() => setModalState(!modalState)}
          disabledButton={false}
        />
      </ContainerBody>
      <ContainerModal>
        <Modal
          // valueInputText={inputState}
          // functionOnChangeText={text => setInputState(text)}
          placeholder="Digite a cor"
          modalVisible={modalState}
          data={stateProduct}
          nameIcon="times"
          nameIconTwo="search"
          functionOnPressLeft={() => setModalState(!modalState)}
        />
      </ContainerModal>
    </Container>
  );
}
