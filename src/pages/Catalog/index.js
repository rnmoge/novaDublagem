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
import * as CatalogActions from '../../store/modules/catalog/actions';

export default function Catalog({navigation}) {
  const {loading} = useSelector(state => state.common);
  const [modalState, setModalState] = useState(false);
  const [inputState, setInputState] = useState('');
  const {data2} = useSelector(state => state.table);
  const [inputLineState, setInputLineState] = useState('Selecione a linha');
  const [inputModelState, setInputModelState] = useState('');
  const {data, descricao1, model} = useSelector(state => state.catalog);

  console.tron.log(model);
  // const [descriptionState, setDescriptionState] = useState(descricao);
  // const [descriptionStateAux, setDescriptionStateAux] = useState(descricao);
  // const data1 = useSelector(state => state.catalog);
  // const [dataStateAux, setDataStateAux] = useState(data);
  // const [loadingState, setLoadingState] = useState(loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CatalogActions.requestProductsCatalog(data2.id));
  }, [dispatch]); // eslint-disable-line

  useEffect(() => {
    dispatch(CatalogActions.searchDescription(data2.id, inputState));
  }, [dispatch,inputState]);// eslint-disable-line

  function handleMoreDetails(id) {
    dispatch(CatalogActions.catalogMoreDetailsProduct(id, data));
    dispatch(CatalogActions.requestTablePrice(id, data2.id));
  }
  function searchDescription() {
    dispatch(CatalogActions.searchDescription(data2.id, inputState));
  }

  function selectDescripition(linha, descricao) {
    setInputLineState(descricao);
    dispatch(CatalogActions.searchModel(linha, data2.id, inputModelState));
    setModalState(!modalState);
  }
  // useEffect(() => {
  //   dispatch(CatalogActions.searchDescription(data2.id, inputState));
  // }, [data2.id, dispatch, inputState]); // eslint-disable-line

  function descripition() {
    setModalState(!modalState);
  }
  useEffect(() => {
    dispatch(CatalogActions.searchModel(data2.id, inputModelState));
  }, [dispatch, inputModelState]);// eslint-disable-line
  // useEffect(() => {
  //   if (inputLineState === '' && inputModelState === '') {
  //     setDataStateAux([]);
  //   } else {
  //     const orderArray = data
  //       .filter(element => {
  //         return (
  //           element.matriz
  //             .toLowerCase()
  //             .indexOf(inputModelState.toLowerCase()) !== -1
  //         );
  //       })
  //       .filter(element => {
  //         return (
  //           element.linha
  //             .toLowerCase()
  //             .indexOf(inputLineState.toLowerCase()) !== -1
  //         );
  //       })
  //       .map(element => {
  //         return element;
  //       });
  //     setDataStateAux(orderArray);
  //   }
  // }, [inputLineState, inputModelState]);// eslint-disable-line
  return (
    <Container>
      <Header
        title="Catálogo"
        iconName="bars"
        icoNameTwo="shopping-cart"
        functionOnpressIconLeft={() => navigation.openDrawer()}
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
          placeholder="Digite o modelo"
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
            data={model}
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
            console.tron.log(descricao);
          }}
          functionOnPressRight={() => {
            searchDescription();
          }}
        />
      </ContainerModal>
    </Container>
  );
}
