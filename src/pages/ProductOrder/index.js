import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
// import {Snackbar} from 'react-native-paper';
import {TextInputMask} from 'react-native-masked-text';
import Header from '../../components/Header';
import InputClick from '../../components/InputClick';
import InputType from '../../components/InputType';
import Modal from '../../components/Modal';
import ModalCatalog from '../../components/ModalCatalog';
import CardSize from '../../components/CardSize';
import ModalModel from '../../components/ModalModel';
import ModalTransport from '../../components/ModalTransport';
import ModalDetails from '../../components/ModalDetails';
import ModalSize from '../../components/ModalSize';
import Cart from '../../components/Cart';
import Button from '../../components/Button';
import ButtonSecondary from '../../components/ButtonSecondary';
import * as ActionsProduct from '../../store/modules/productorder/actions';
// import * as CatalogActions from '../../store/modules/catalog/actions';
import * as NewOrderActions from '../../store/modules/neworder/actions';
import * as ActionsCart from '../../store/modules/cart/actions';
import {
  Container,
  ContainerBody,
  ContainerTotal,
  ContainerClient,
  ContainerPlaceholder,
  ContainerInfo,
  TextClient,
  List,
  Text,
  ContainerList,
  Image,
  ContainerImagem,
  ContainerModal,
  ContainerButton,
  InputMask,
} from './styles';
// import Bojo from '../../../assets/image/3101.jpg';

export default function ProductOrder() {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.order);
  const {loading, error} = useSelector(state => state.common);
  // const {data2} = useSelector(state => state.table);
  const {input} = useSelector(state => state.catalog);
  const [inputState, setInputState] = useState('');
  const [inputStateModel, setInputStateModel] = useState('');
  const [inputLineState, setInputLineState] = useState('Selecione a linha');
  const [inputModelState, setInputModelState] = useState('Selecione o modelo');
  const [inputSizeState, setInputSizeState] = useState('Grupo de tamanho');
  const [inputColorState, setInputColorState] = useState('Cor');
  const [inputNoteState, setInputNoteState] = useState('');
  const [inputComissionState, setInputComissionState] = useState('5.00');
  const [imageState, setImageState] = useState();
  const [snackVisible, setSnackVisible] = useState(false);
  const {stateModal, products} = useSelector(state => state.cart);
  const {
    table,
    condition,
    idTable,
    dataDescription,
    line,
    cores,
    sizes,
    comission,
    price,
    idProduct,
  } = useSelector(state => state.neworder);
  function handleCart() {
    dispatch(ActionsCart.cartOpen(true));
  }
  const [stateError, setStateError] = useState(false);
  const [modalDetails, setModalDetails] = useState(false);
  const [dataStateAuxModel, setDataStateAuxModel] = useState([]);
  const [dataStateAuxLine, setDataStateAuxLine] = useState([]);
  const [dataStateAuxColor, setDataStateAuxColor] = useState([]);
  const [dateValueState, setDataValueState] = useState('0,00');
  const [modalState, setModalState] = useState(false);
  const [modalModelState, setModalModelState] = useState(false);
  const [modalSizeState, setModalSizeState] = useState(false);
  const [colorModalState, setColorModalState] = useState(false);
  const day = new Date().getDate(); // Current Date
  const month = new Date().getMonth() + 1; // Current Month
  const year = new Date().getFullYear(); // Current Year
  // const date = Date.now();
  const date = `${day}/${month}/${year}`;
  const [dateState, setDataState] = useState(date);
  const [inputMask, setInputMask] = useState();
  useEffect(() => {
    // if (input === '') {
    //   setInputLineState('Selecione a linha');
    // } else {
    //   setInputLineState(input);
    // }
    setInputComissionState(comission.comissao1);
  }, [comission]);
  const priceReal = dateValueState;
  useEffect(() => {
    if (priceReal === '') {
      setInputComissionState('Digite um preço');
      setStateError(true);
    }
    if (priceReal >= price.preco1) {
      setInputComissionState(comission.comissao1);
      setStateError(false);
    } else if (priceReal < price.preco1 && priceReal >= price.preco2) {
      setInputComissionState(comission.comissao2);
      setStateError(false);
    } else if (priceReal < price.preco2 && priceReal >= price.preco3) {
      setInputComissionState(comission.comissao3);
      setStateError(false);
    } else if (
      priceReal < price.preco3 &&
      priceReal !== '' &&
      priceReal !== 0
    ) {
      setInputComissionState('0.00 - situação especial');
      setStateError(false);
    } else if (priceReal === 0.0) {
      setStateError(true);
      setDataValueState('digite um valor');
    }
  }, [dateValueState, price.preco1, price.preco2]);// eslint-disable-line

  useEffect(() => {
    const orderArrayLine = dataDescription
      .filter(element => {
        return element.descricao.indexOf(inputState) !== -1;
      })

      .map(element => {
        return element;
      });
    setDataStateAuxLine(orderArrayLine);
  }, [dataDescription, inputState]);
  useEffect(() => {
    const orderArrayModel = line
      .filter(element => {
        return element.matriz.indexOf(inputStateModel) !== -1;
      })

      .map(element => {
        return element;
      });
    setDataStateAuxModel(orderArrayModel);
  }, [inputStateModel, line]); // eslint-disable-line
  useEffect(() => {
    const orderArrayColor = cores
      .filter(element => {
        return (
          element.descricao.toLowerCase().indexOf(inputState.toLowerCase()) !==
          -1
        );
      })
      .map(element => {
        return element;
      });
    setDataStateAuxColor(orderArrayColor);
  }, [inputState, cores]); // eslint-disable-line
  // function conditionVista() {}
  function backNewOrder() {
    dispatch(ActionsProduct.backNewOrder());
  }
  function searchDescription() {}
  function descripition() {
    setModalState(!modalState);
    dispatch(NewOrderActions.searchDescription(idTable, inputState));
  }
  function selectDescripition(linha, descricao) {
    dispatch(
      NewOrderActions.searchModel(linha, idTable, inputState, descricao)
    );
    setInputLineState(descricao);
    setModalState(!modalState);
  }
  function modelFunc() {
    setModalModelState(!modalModelState);
  }
  function selectModel(id, matriz, imageUrl) {
    setInputModelState(matriz);
    setImageState(imageUrl);
    setModalModelState(!modalModelState);
    dispatch(NewOrderActions.colorAndSizes(idTable, id));
  }
  function sizeFunc() {
    setModalSizeState(!modalSizeState);
  }
  function selectSize(id, descricao) {
    setInputSizeState(descricao);
    setDataValueState(price.preco1);
    setModalSizeState(!modalSizeState);
    dispatch(NewOrderActions.sizePriceOne(id, sizes));
  }
  function colorFunc() {
    setColorModalState(!colorModalState);
  }

  function selectColor(descricao) {
    setInputColorState(descricao);
    setColorModalState(!colorModalState);
  }

  function addProduct() {
    const productExist = products.findIndex(product => {
      return product.id === idProduct;
    });

    if (productExist !== -1) {
      const newList = products.map((element, index) => {
        if (index === productExist) {
          return {
            quant: element.quant + 120,
            id: element.id,
            produto: element.produto,
            descricao: element.descricao,
            value: Number(element.value) + Number(dateValueState),
          };
        }
        return {
          quant: element.quant,
          id: element.id,
          produto: element.produto,
          descricao: element.descricao,
          value: element.value,
        };
      });
      dispatch(ActionsCart.addToCart([...newList]));
    } else {
      dispatch(
        ActionsCart.addToCart([
          ...products,
          {
            id: idProduct,
            produto: inputLineState,
            descricao: inputModelState,
            quant: 120,
            value: dateValueState,
          },
        ])
      );
    }
    setInputLineState('Selecione a linha');
    setInputModelState('Selecione o modelo');
    setInputSizeState('Grupo de tamanho');
    setInputColorState('Cor');
    setInputNoteState();
    setImageState();
    setInputComissionState(comission.comissao1);
    setDataValueState();
    dispatch(NewOrderActions.cleanState());
  }
  function excluirProductList(index) {
    const newList = [...products];
    const newProductList = newList.splice(1, index);
    dispatch(ActionsCart.removeToCart([...newProductList]));
  }
  return (
    <Container>
      <Header
        icoName="arrow-left"
        title="Escolha dos produtos"
        icoNameTwo="shopping-cart"
        functionOnpressIconLeft={() => {
          backNewOrder();
        }}
        functionOnpressIconRigth={() => {
          handleCart();
        }}
      />
      <ContainerBody>
        <ContainerTotal>
          <ContainerClient>
            <ContainerPlaceholder>
              <Text>Cliente: </Text>
            </ContainerPlaceholder>
            <ContainerInfo>
              <TextClient>{data.nome_razao}</TextClient>
              <TextClient>Tabela de preço: {table}</TextClient>
              <TextClient>Condição de pagamento: {condition}</TextClient>
            </ContainerInfo>
          </ContainerClient>
        </ContainerTotal>
        <ScrollView>
          <List>
            <InputMask />
            <TextInputMask
              type="datetime"
              options={{
                format: 'DD-MM-YYYY'
              }}
              value={inputMask}
              onChangeText={text => {
                setInputMask(text);
              }}
            />

            <ContainerList>
              <InputClick
                textPrimary="Selecione a linha:"
                textSecundary={inputLineState}
                icoName="angle-down"
                functionOnpressInput={() => {
                  descripition();
                }}
              />
              <InputClick
                textPrimary="Selecione o modelo:"
                textSecundary={inputModelState}
                icoName="angle-down"
                functionOnpressInput={() => {
                  modelFunc();
                }}
              />
              <InputClick
                textPrimary="Selecione o tamanho:"
                textSecundary={inputSizeState}
                icoName="angle-down"
                functionOnpressInput={() => {
                  sizeFunc();
                }}
              />
              <InputClick
                textPrimary="Selecione a cor:"
                textSecundary={inputColorState}
                icoName="angle-down"
                functionOnpressInput={() => {
                  colorFunc();
                }}
              />
              <TextClient>Imagem:</TextClient>
              <ContainerImagem>
                <Image source={{uri: imageState}} />
              </ContainerImagem>
              <CardSize nameIcon="minus" nameIcon2="plus" />
              <TextClient>Comissão:</TextClient>
              <InputType
                placeholder="Comissão"
                valueInputText={inputComissionState}
              />
              <TextClient>Valor real:</TextClient>
              <InputType
                functionOnChangeText={text => {
                  setDataValueState(text);
                }}
                placeholder="Valor Real"
                valueInputText={dateValueState}
                error={stateError}
              />
              <TextClient>Data faturamento:</TextClient>
              <InputType
                placeholder="Data"
                areaIcon
                icoName="calendar"
                disabledButtonIcon
                valueInputText={dateState}
                functionOnChangeText={text => {
                  setDataState(text);
                }}
              />
              <TextClient>Observação:</TextClient>
              <InputType
                placeholder="Observação"
                functionOnChangeText={text => setInputNoteState(text)}
                valueInputText={inputNoteState}
              />
              <Button
                titleButton="Adicionar"
                disabledButton={false}
                functionOnPress={() => {
                  addProduct();
                }}
              />
              <ButtonSecondary titleButton="Finalizar Pedido" />
              <ContainerButton
                onPress={() => {
                  setModalDetails(!modalDetails);
                }}>
                <Text>Tabela de preço</Text>
              </ContainerButton>
            </ContainerList>
          </List>
        </ScrollView>
      </ContainerBody>
      <ContainerModal>
        <ModalCatalog
          loading={loading}
          valueInputText={inputState}
          functionOnChangeText={text => setInputState(text)}
          placeholder="Digite a linha"
          modalVisible={modalState}
          data={dataStateAuxLine}
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
        <Modal
          loading={loading}
          valueInputText={inputState}
          functionOnChangeText={text => setInputState(text)}
          placeholder="Digite a cor"
          modalVisible={colorModalState}
          data={dataStateAuxColor}
          nameIcon="times"
          nameIconTwo="search"
          functionOnPressLeft={() => setColorModalState(!colorModalState)}
          functionOnPressText={descricao => {
            selectColor(descricao);
          }}
          functionOnPressRight={() => {
            searchDescription();
          }}
        />
        <ModalSize
          loading={loading}
          valueInputText={inputState}
          functionOnChangeText={text => setInputState(text)}
          placeholder="Digite o tamanho"
          modalVisible={modalSizeState}
          data={sizes}
          nameIcon="times"
          nameIconTwo="search"
          functionOnPressLeft={() => setModalSizeState(!modalSizeState)}
          functionOnPressText={(id, descricao) => {
            selectSize(id, descricao);
          }}
          functionOnPressRight={() => {
            searchDescription();
          }}
        />

        <ModalModel
          loading={loading}
          valueInputText={inputStateModel}
          functionOnChangeText={text => setInputStateModel(text)}
          placeholder="Digite o modelo"
          modalVisible={modalModelState}
          data={dataStateAuxModel}
          nameIcon="times"
          nameIconTwo="search"
          functionOnPressLeft={() => setModalModelState(!modalModelState)}
          functionOnPressText={(id, matriz, imageUrl) => {
            selectModel(id, matriz, imageUrl);
          }}
          functionOnPressRight={() => {
            searchDescription();
          }}
        />
        <ModalDetails
          modalVisible={modalDetails}
          nameIcon="arrow-left"
          functionOnPressLeft={() => setModalDetails(!modalDetails)}
        />
        <Cart
          modalVisible={stateModal}
          functionOnPressIcon={() => {
            excluirProductList();
          }}
        />
        {/* snackVisible, setSnackVisible */}
        <ModalTransport />
      </ContainerModal>
    </Container>
  );
}
