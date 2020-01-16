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

export default function ProductOrder() {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.order);
  const {loading} = useSelector(state => state.common);
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
  const {codPedido} = useSelector(state => state.finalizeorder);
  const {
    table,
    condition,
    idTable,
    dataDescription,
    line,
    colors,
    sizes,
    comission,
    price,
    idProduct,
    details,
    tamanhos,
  } = useSelector(state => state.neworder);

  function handleCart() {
    dispatch(ActionsCart.cartOpen(true));
    dispatch(ActionsCart.requestCart());
  }
  // const {quant} = useSelector(state => state.finalizeorder);
  const [stateError, setStateError] = useState(false);
  const [modalDetails, setModalDetails] = useState(false);
  const [modalInfoOne, setModalInfoOne] = useState(false);
  const [modalInfoTwo, setModalInfoTwo] = useState(false);
  const [textPrimary, setTextPrimary] = useState('Data de Entrega');
  const [errorTwo, setErrorTwo] = useState(false);
  const [colorId, setColorId] = useState(null);
  const [groupId, setGroupId] = useState(null);
  const [dataStateAuxModel, setDataStateAuxModel] = useState([]);
  const [dataStateAuxLine, setDataStateAuxLine] = useState([]);
  const [dataStateAuxColor, setDataStateAuxColor] = useState([]);
  const [dataValueState, setDataValueState] = useState('0,00');
  const [modalState, setModalState] = useState(false);
  const [modalModelState, setModalModelState] = useState(false);
  const [modalSizeState, setModalSizeState] = useState(false);
  const [colorModalState, setColorModalState] = useState(false);
  const [inputMask, setInputMask] = useState('');
  const [disable, setDisable] = useState(true);
  const [idSize, setIdSize] = useState('');

  useEffect(() => {
    setInputComissionState(comission.comissao1);
  }, [comission]);
  useEffect(() => {
    if (
      inputLineState === 'Selecione a linha' ||
      inputModelState === 'Selecione o modelo' ||
      inputSizeState === 'Grupo de tamanho' ||
      inputColorState === 'Cor' ||
      inputMask === ''
    ) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [
    inputColorState,
    inputLineState,
    inputMask,
    inputModelState,
    inputSizeState,
  ]);
  function changeQuant(index, add) {
    const newSizes = tamanhos.map((element, elementIndex) => {
      if (add) {
        if (index === elementIndex) {
          const {
            id,
            tamanho_order,
            descricao,
            created_at,
            updated_at,
            quant,
          } = element;
          return {
            id,
            tamanho_order,
            descricao,
            created_at,
            updated_at,
            quant: Number(quant) + 60,
          };
        }
        const {
          id,
          tamanho_order,
          descricao,
          created_at,
          updated_at,
          quant,
        } = element;
        return {
          id,
          tamanho_order,
          descricao,
          created_at,
          updated_at,
          quant,
        };
      } // else
      if (index === elementIndex) {
        if (element.quant >= 60) {
          const {
            id,
            tamanho_order,
            descricao,
            created_at,
            updated_at,
            quant,
          } = element;
          return {
            id,
            tamanho_order,
            descricao,
            created_at,
            updated_at,
            quant: Number(quant) - 60,
          };
        }
      } // else
      const {
        id,
        tamanho_order,
        descricao,
        created_at,
        updated_at,
        quant,
      } = element;
      return {
        id,
        tamanho_order,
        descricao,
        created_at,
        updated_at,
        quant,
      };
    });
    const newDetails = newSizes;
    dispatch(NewOrderActions.changeDetails(newDetails));
  }
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
    const orderArrayColor = colors
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
  }, [inputState, colors]); // eslint-disable-line
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
    setIdSize(id);
  }
  function sizeFunc() {
    setModalSizeState(!modalSizeState);
    dispatch(NewOrderActions.colorAndSizes(idTable, idSize));
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
  function selectSize(id, grupotamanho_id, descricao) {
    setInputSizeState(descricao);
    dispatch(
      NewOrderActions.sizePriceOne(id, grupotamanho_id, sizes, idProduct)
    );
    setModalSizeState(!modalSizeState);
    setGroupId(grupotamanho_id);
    // groupId, setGroupId
  }
  function colorFunc() {
    setColorModalState(!colorModalState);
  }

  function selectColor(id, descricao) {
    setInputColorState(descricao);
    setColorModalState(!colorModalState);
    setColorId(id);
  }

  function addProduct() {
    const productExist = products.findIndex(product => {
      return product.id === idProduct;
    });
    if (productExist !== -1) {
      const newList = products.map((element, index) => {
        if (index === productExist) {
          return {
            cod_pedido: element.codPedido,
            id: element.id,
            produto: element.produto,
            descricao: element.descricao,
            quant: element.quant + 120,
            value: Number(element.value) + Number(dataValueState),
            observacao_item: element.observavao_item,
            comissao: element.comissao,
            data_faturamento: element.data_faturamento,
            color_id: element.color_id,
            grupotamanho_id: element.grupotamanho_id,
            linha_cod: element.linha_cod,
            matriz_cod: element.matriz_cod,
            grupo_tamanho_cod: element.grupo_tamanho_cod,
            cor_cod: element.cor_cod,
            pedidoItemTamanhos: element.pedidoItemTamanhos,
          };
        }
        return {
          cod_pedido: element.codPedido,
          quant: element.quant,
          produto: element.produto,
          descricao: element.descricao,
          id: element.id,
          value: element.value,
          observacao_item: element.observavao_item,
          comissao: element.comissao,
          data_faturamento: element.data_faturamento,
          color_id: element.color_id,
          grupotamanho_id: element.grupotamanho_id,
          matriz_cod: element.matriz_cod,
          linha_cod: element.linha_cod,
          grupo_tamanho_cod: element.grupo_tamanho_cod,
          cor_cod: element.cor_cod,
          pedidoItemTamanhos: element.pedidoItemTamanhos,
        };
      });
      dispatch(ActionsCart.addToCart([...newList]));
    } else {
      dispatch(
        ActionsCart.addToCart([
          ...products,
          {
            cod_pedido: codPedido,
            id: idProduct,
            produto: inputLineState,
            quant: 120,
            descricao: details.matriz,
            value: dataValueState,
            observacao_item: inputNoteState,
            comissao: inputComissionState,
            data_faturamento: inputMask,
            color_id: colorId,
            grupotamanho_id: groupId,
            matriz_cod: null,
            linha_cod: null,
            grupo_tamanho_cod: null,
            cor_cod: null,
            pedidoItemTamanhos: tamanhos,
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
    setGroupId(null);
    dispatch(NewOrderActions.cleanState());
    setModalInfoOne(!modalInfoOne);
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
              <Text>Cliente: {data.nome_razao}</Text>
            </ContainerPlaceholder>
            {/* <ContainerInfo>
              <TextClient>{data.nome_razao}</TextClient>
              <TextClient>Tabela de preço: {table}</TextClient>
              <TextClient>Condição de pagamento: {condition}</TextClient>
            </ContainerInfo> */}
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
                textPrimary="Selecione o grupo de tamanho:"
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

              <CardSize
                data={tamanhos}
                functionOnpressIconLeft={(index, add) => {
                  changeQuant(index, add);
                }}
                nameIcon="minus"
                nameIcon2="plus"
              />

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
                placeholder="Data de Entrega"
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
                disabledButton={disable}
                functionOnPress={() => {
                  addProduct();
                }}
              />
              {/* <Button titleButton="FINALIZAR PEDIDO" /> */}
              {/* <ButtonSecondary titleButton="FINALIZAR/TRANSMITIR" /> */}
              <ButtonSecondary
                disabledButton={disable}
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
          functionOnPressText={(id, descricao) => {
            selectColor(id, descricao);
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
          functionOnPressText={(id, grupotamanho_id, descricao) => {
            selectSize(id, grupotamanho_id, descricao);
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
        <Cart modalVisible={stateModal} />

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
