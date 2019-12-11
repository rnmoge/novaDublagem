import React, {useState, useEffect} from 'react';
// import {ActivityIndicator} from 'react-native';
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
  const {product, cores} = useSelector(state => state.catalog);
  const {loading} = useSelector(state => state.common);
  const {data2} = useSelector(state => state.table);
  const [stateProduct, setStateProduct] = useState(product);
  const [stateTableComission, setStateTableComission] = useState(data2);
  const [modalState, setModalState] = useState(false);
  const [inputState, setInputState] = useState('');
  // const [colorsState, setColorState] = useState();
  const [colorAux, setColorAux] = useState(cores);

  useEffect(() => {
    setStateProduct(product);
    setStateTableComission(data2);
    setColorAux(cores);
  }, [product, data2, cores]); // eslint-disable-line
  useEffect(() => {
    const orderArray = cores
      .filter(element => {
        return (
          element.descricao.toLowerCase().indexOf(inputState.toLowerCase()) !==
          -1
        );
      })
      .map(element => {
        return element;
      });
    setColorAux(orderArray);
  }, [dispatch, inputState]); // eslint-disable-line

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
        <CardTablePrice commision={stateTableComission} loading={loading} />
        <Button
          titleButton="VER CORES"
          functionOnPress={() => setModalState(!modalState)}
          disabledButton={false}
        />
      </ContainerBody>
      <ContainerModal>
        <Modal
          placeholder="Digite a cor"
          modalVisible={modalState}
          data={colorAux}
          valueInputText={inputState}
          functionOnChangeText={text => setInputState(text)}
          nameIcon="times"
          nameIconTwo="search"
          functionOnPressLeft={() => setModalState(!modalState)}
        />
      </ContainerModal>
    </Container>
  );
}
