import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
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
import ModalInfo from '../../components/ModalInfo';
import Cart from '../../components/Cart';
import InputMask from '../../components/InputMask';
import Button from '../../components/Button';
import ButtonSecondary from '../../components/ButtonSecondary';
import * as ActionsProduct from '../../store/modules/productorder/actions';
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
} from './styles';

import functions from '../../functions/index';

export default function ProductOrder() {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.order);
  const {loading, error} = useSelector(state => state.common);
  const [inputState, setInputState] = useState('');
  const [inputStateModel, setInputStateModel] = useState('');
  const [inputLineState, setInputLineState] = useState('Selecione a linha');
  const [inputModelState, setInputModelState] = useState('Selecione o modelo');
  const [inputSizeState, setInputSizeState] = useState('Grupo de tamanho');
  const [inputColorState, setInputColorState] = useState('Cor');
  const [inputNoteState, setInputNoteState] = useState('');
  const [inputComissionState, setInputComissionState] = useState('5.00');
  const [imageState, setImageState] = useState();
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
  const [modalInfoOne, setModalInfoOne] = useState(false);
  const [modalInfoTwo, setModalInfoTwo] = useState(false);
  const [textPrimary, setTextPrimary] = useState('Data Faturamento');
  const [errorTwo, setErrorTwo] = useState(false);
  const [dataStateAuxModel, setDataStateAuxModel] = useState([]);
  const [dataStateAuxLine, setDataStateAuxLine] = useState([]);
  const [dataStateAuxColor, setDataStateAuxColor] = useState([]);
  const [dataValueState, setDataValueState] = useState('0,00');
  const [modalState, setModalState] = useState(false);
  const [modalModelState, setModalModelState] = useState(false);
  const [modalSizeState, setModalSizeState] = useState(false);
  const [colorModalState, setColorModalState] = useState(false);
  const [inputMask, setInputMask] = useState('');
  console.tron.log(inputMask);
  function testeInput(text) {
    console.tron.log(text);
  }
  useEffect(() => {
    setInputComissionState(comission.comissao1);
  }, [comission]);
  useEffect(() => {
    const value = comission.desconto_vista_percent;
    let priceNew = (price.preco1 - (price.preco1 * value) / 100).toFixed(2);
    priceNew = priceNew.toString();
    let priceNew2 = (price.preco2 - (price.preco2 * value) / 100).toFixed(2);
    priceNew2 = priceNew2.toString();
    let priceNew3 = (price.preco3 - (price.preco3 * value) / 100).toFixed(2);
    priceNew3 = priceNew3.toString();

    if (condition === 'A VISTA' || condition === '7 DD') {
      if (dataValueState === '') {
        setInputComissionState('Digite um preço');
        setStateError(true);
      }
      if (dataValueState >= priceNew) {
        setInputComissionState(comission.comissao1);
        setStateError(false);
      } else if (dataValueState < priceNew && dataValueState >= priceNew2) {
        setInputComissionState(comission.comissao2);
        setStateError(false);
      } else if (dataValueState < priceNew2 && dataValueState >= priceNew3) {
        setInputComissionState(comission.comissao3);
        setStateError(false);
      } else if (
        dataValueState < priceNew3 &&
        dataValueState !== '' &&
        dataValueState !== 0
      ) {
        setInputComissionState('0.00 - situação especial');
        setStateError(false);
      } else if (dataValueState === 0.0) {
        setStateError(true);
        setDataValueState('digite um valor');
      }
    } else {
      if (dataValueState === '') {
        setInputComissionState('Digite um preço');
        setStateError(true);
      }
      if (dataValueState >= price.preco1) {
        setInputComissionState(comission.comissao1);
        setStateError(false);
      } else if (
        dataValueState < price.preco1 &&
        dataValueState >= price.preco2
      ) {
        setInputComissionState(comission.comissao2);
        setStateError(false);
      } else if (
        dataValueState < price.preco2 &&
        dataValueState >= price.preco3
      ) {
        setInputComissionState(comission.comissao3);
        setStateError(false);
      } else if (
        dataValueState < price.preco3 &&
        dataValueState !== '' &&
        dataValueState !== 0
      ) {
        setInputComissionState('0.00 - situação especial');
        setStateError(false);
      } else if (dataValueState === 0.0) {
        setStateError(true);
        setDataValueState('digite um valor');
      }
    }
  }, [dataValueState, price.preco1, price.preco2, price.preco3]);// eslint-disable-line
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
  useEffect(() => {
    if (price.preco1 === undefined || price.preco1 === null) {
      setDataValueState('Valor Real');
    } else if (condition === 'A VISTA' || condition === '7 DD') {
      const value = comission.desconto_vista_percent;
      let priceNew1 = (price.preco1 - (price.preco1 * value) / 100).toFixed(2);
      priceNew1 = priceNew1.toString();
      setDataValueState(priceNew1);
      setInputComissionState(comission.comissao1);
    } else {
      setDataValueState(price.preco1);
    }
  }, [price.preco1]);// eslint-disable-line
  function selectSize(id, descricao) {
    setInputSizeState(descricao);
    dispatch(NewOrderActions.sizePriceOne(id, sizes));
    setModalSizeState(!modalSizeState);
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
            value: Number(element.value) + Number(dataValueState),
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
            value: dataValueState,
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
    setInputMask('Data faturamento');
    setInputComissionState(comission.comissao1);
    setDataValueState();
    dispatch(NewOrderActions.cleanState());
    setModalInfoOne(!modalInfoOne);
  }
  function excluirProductList(index) {
    const newList = [...products];
    const newProductList = newList.splice(1, index);
    dispatch(ActionsCart.removeToCart([...newProductList]));
  }
  const {message, errorDate, messageDate, modal} = useSelector(
    state => state.productorder
  );
  function dateValidator() {
    dispatch(ActionsProduct.dateValidator(idProduct, inputMask));
    if (message) {
      setModalInfoTwo(modal);
      setTextPrimary('Data Faturamento');
      setErrorTwo(errorDate);
    } else {
      setErrorTwo(errorDate);
      setTextPrimary('Data faturamento invalida');
      setInputMask('Data faturamento');
    }
  }
  function completeDate() {
    setModalInfoTwo(!modalInfoTwo);
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
                keyboardTypeInput="numeric"
                placeholder="Valor Real"
                valueInputText={dataValueState}
                error={stateError}
              />

              <TextClient error={errorTwo}>{textPrimary}</TextClient>

              <InputMask
                error={errorTwo}
                areaIcon
                icoName="search"
                value={inputMask}
                placeholder="Data Faturamento"
                valueInput={inputMask}
                onChangeText={text => {
                  setInputMask(text);
                }}
                onEndEditing={() => {
                  dateValidator();
                }}
                functionOnPressIcon={() => {
                  dateValidator();
                }}
              />
              <TextClient>Observação:</TextClient>
              <InputType
                placeholder="Observação"
                functionOnChangeText={text => setInputNoteState(text)}
                valueInputText={inputNoteState}
              />
              <Button
                titleButton="ADICIONAR"
                disabledButton={false}
                functionOnPress={() => {
                  addProduct();
                }}
              />
              <Button titleButton="FINALIZAR PEDIDO" />
              {/* <ButtonSecondary titleButton="FINALIZAR/TRANSMITIR" /> */}
              <ButtonSecondary
                disabledButton={false}
                titleButton="TABELA DE PREÇO"
                functionOnPress={() => {
                  setModalDetails(!modalDetails);
                }}
              />
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
        <ModalTransport />
        <ModalInfo
          text="Produto Adicionado ao carrinho!"
          modalVisible={modalInfoOne}
          functionOnPressText={() => {
            setModalInfoOne(!modalInfoOne);
          }}
        />
        <ModalInfo
          icoName="check-circle"
          text={messageDate}
          modalVisible={modalInfoTwo}
          functionOnPressText={() => {
            completeDate();
          }}
        />
      </ContainerModal>
    </Container>
  );
}
