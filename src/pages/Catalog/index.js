import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native';
import {
  Container,
  ContainerInput,
  ContainerList,
  ContainerModal,
} from './styles';
import Header from '../../components/Header';
import ListView from '../../components/ListView';
import InputType from '../../components/InputType';
import InputClick from '../../components/InputClick';
import ModalCatalog from '../../components/ModalCatalog';
import Cart from '../../components/Cart';
import * as CatalogActions from '../../store/modules/catalog/actions';
import * as ActionsCart from '../../store/modules/cart/actions';

export default function Catalog({navigation}) {
  const {loading} = useSelector(state => state.common);
  const {stateModal} = useSelector(state => state.cart);
  const [modalState, setModalState] = useState(false);
  const [inputState, setInputState] = useState('');
  const {data2} = useSelector(state => state.table);
  const [inputLineState, setInputLineState] = useState('');
  const [inputModelState, setInputModelState] = useState('');
  const {descricao1, model, input, input2} = useSelector(
    state => state.catalog
  );
  const [inputModelStateAux, setInputModelStateAux] = useState(input2);

  const [dataStateAux, setDataStateAux] = useState([]);
  // const [dataModalState, setDataModalState] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    if (input === '') {
      setInputLineState('Selecione a linha');
    } else {
      setInputLineState(input);
    }
    if (input2 === '') {
      setInputModelStateAux('Digite o modelo');
    } else {
      setInputModelStateAux(input2);
    }
  }, [inputState, input2, input]); // eslint-disable-line

  function handleMoreDetails(id) {
    dispatch(CatalogActions.catalogMoreDetailsProduct(id, model));
    dispatch(CatalogActions.requestTablePrice(id, data2.id));
  }
  function searchDescription() {
    dispatch(CatalogActions.searchDescription(data2.id, inputState));
  }

  function selectDescripition(linha, descricao) {
    setInputLineState(descricao);
    dispatch(
      CatalogActions.searchModel(linha, data2.id, inputModelState, descricao)
    );
    setModalState(!modalState);
  }

  function descripition() {
    setModalState(!modalState);
    dispatch(
      CatalogActions.searchDescription(data2.id, inputState, inputLineState)
    );
  }

  useEffect(() => {
    const orderArray = model
      .filter(element => {
        return element.matriz.indexOf(inputModelState) !== -1;
      })

      .map(element => {
        return element;
      });
    setDataStateAux(orderArray);
  }, [inputModelState, model]);
  function handleCart() {
    dispatch(ActionsCart.cartOpen(true));
  }
  return (
    <Container>
      <Header
        title="Catálogo"
        iconName="bars"
        icoNameTwo="shopping-cart"
        functionOnpressIconLeft={() => navigation.openDrawer()}
        functionOnpressIconRigth={() => {
          handleCart();
        }}
      />
      <ContainerInput>
        <InputClick
          textPrimary=""
          textSecundary={inputLineState}
          nameIcon="search"
          functionOnpressInput={() => {
            descripition();
          }}
        />
        <InputType
          valueInputText={inputModelState}
          functionOnChangeText={text => setInputModelState(text)}
          placeholder={inputModelStateAux}
          icoName="search"
          areaIcon
        />
      </ContainerInput>

      <ContainerList>
        {loading ? (
          <ActivityIndicator
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            color="#fff000"
            size="large"
          />
        ) : (
          <ListView
            data={dataStateAux}
            functionOnpressDetails={id => {
              handleMoreDetails(id);
            }}
          />
        )}
      </ContainerList>

      <ContainerModal>
        <ModalCatalog
          loading={loading}
          valueInputText={inputState}
          functionOnChangeText={text => setInputState(text)}
          placeholder="Digite a linha"
          modalVisible={modalState}
          data={descricao1}
          nameIcon="times"
          nameIconTwo="search"
          functionOnPressLeft={() => setModalState(!modalState)}
          functionOnPressText={(linha, descricao) => {
            selectDescripition(linha, descricao);
          }}
          functionOnPressRight={() => {
            searchDescription();
          }}
        />
        <Cart modalVisible={stateModal} />
      </ContainerModal>
    </Container>
  );
}
