import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {FlatList, Modal, ActivityIndicator, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as NewOrderActions from '../../store/modules/neworder/actions';
import * as ActionsEdit from '../../store/modules/editorder/actions';
import {
  Input,
  Container,
  Icon,
  AreaIcon,
  ContainerHeader,
  TextButton,
  ContainerInitial,
  TextInitial,
  ContainerHeader2,
  AreaIcon2,
  ContainerBody,
  ContainerImagem,
  Image,
  TextClient,
} from './styles';
import InputClick from '../InputClick';
import Button from '../Button';
import InputType from '../InputType';
import CardSize from '../CardSize';
import InputMask from '../InputMask';
import ModalCatalog from '../ModalCatalog';
import ModalSize from '../ModalSize';
import ModalModel from '../ModalModel';
import ModalInfo from '../ModalInfo';
import ModalColor from '../ModalColor';

export default function ModalTypeCharge({
  nameIcon,
  nameIconTwo,
  placeholder,
  modalVisible,
  functionOnPressLeft,
  functionOnPressRight,
  functionOnChangeText,
  data,
  order,
  loading,
  functionOnPressText,
  addExist,
}) {
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
    dateBillingNew,
  } = useSelector(state => state.neworder);
  const dispatch = useDispatch();
  const {loading: load} = useSelector(state => state.common);
  // const {order} = useSelector(state => state.queryorder);

  const [lineState, setLineState] = useState('Linha');
  const [inputState, setInputState] = useState('');
  const [model, setModel] = useState('Modelo');
  const [inputStateModel, setInputStateModel] = useState('');
  const [groupSize, setGroupSize] = useState('Grupo de tamanho');
  const [color, setColor] = useState('Cor');
  const [dataValueState, setDataValueState] = useState();
  const [inputComissionState, setInputComissionState] = useState();
  const [specialPrice, setSpecialPrice] = useState(0);
  const [imageState, setImageState] = useState();
  const [idSize, setIdSize] = useState();
  const [colorId, setColorId] = useState();
  const [inputMask, setInputMask] = useState('');
  const [inputObservacion, setInputObservacion] = useState(null);
  const [modalLine, setModalLine] = useState(false);
  const [modalModelState, setModalModelState] = useState(false);
  const [modalSizeState, setModalSizeState] = useState(false);
  const [colorModalState, setColorModalState] = useState(false);
  const [dataStateAuxLine, setDataStateAuxLine] = useState([]);
  const [dataStateAuxModel, setDataStateAuxModel] = useState([]);
  const [dataStateAuxColor, setDataStateAuxColor] = useState([]);
  const [modalInfoOne, setModalInfoOne] = useState(false);
  const [modalInfoTwo, setModalInfoTwo] = useState(false);
  const [modalInfoTheere, setModalInfoTheere] = useState(false);
  const [pagament, setPagament] = useState(null);
  const [tablePrice, setTablePrice] = useState(null);
  const dateNew = dateBillingNew.split('/');
  const dateInput = inputMask.split('/');
  // useEffect(() => {
  //   if (order !== undefined) {
  //     setInputComissionState(order.tabelaPreco.comissao1);
  //   }
  // }, [order]);
  useEffect(() => {
    if (order !== null && order !== [] && order !== undefined) {
      setPagament('A VISTA');
      setTablePrice(order.tabelaPreco);
    }
  }, [order]);
  useEffect(() => {
    // setInputComissionState(comission.comissao1);

    if (dateBillingNew !== undefined || dateBillingNew !== null) {
      if (inputMask !== '') {
        setInputMask(inputMask);
      } else {
        setInputMask(dateBillingNew);
      }
    }
  }, [dateBillingNew]);// eslint-disable-line
  useEffect(() => {
    if (
      dateInput[0] < dateNew[0] &&
      dateInput[1] <= dateNew[1] &&
      dateInput[2] === dateNew[2]
    ) {
      setInputMask(dateBillingNew);
      setModalInfoTwo(!modalInfoTwo);
    } else if (
      dateInput[0] > dateNew[0] &&
      dateInput[1] >= dateNew[1] &&
      dateInput[2] === dateNew[2]
    ) {
      setInputMask(inputMask);
      setModalInfoTheere(!modalInfoTheere);
    }
  }, [inputMask, dateBillingNew]); // eslint-disable-line
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
    const orderArrayLine = dataDescription
      .filter(element => {
        return element.descricao.indexOf(inputState) !== -1;
      })
      .map(element => {
        return element;
      });
    setDataStateAuxLine(orderArrayLine);
  }, [dataDescription, inputState]);// eslint-disable-line
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
  function descripition() {
    setModalLine(!modalLine);
    dispatch(
      NewOrderActions.searchDescription(order.tabela_preco_id, inputState)
    );
  }
  function selectDescripition(linha, descricao) {
    dispatch(
      NewOrderActions.searchModel(
        linha,
        order.tabela_preco_id,
        inputState,
        descricao
      )
    );
    setLineState(descricao);
    setModalLine(!modalLine);
  }
  function modelFunc() {
    setModalModelState(!modalModelState);
  }
  function selectModel(id, matriz, imageUrl) {
    setModel(matriz);
    setImageState(imageUrl);
    setModalModelState(!modalModelState);
    dispatch(NewOrderActions.colorAndSizes(idTable, id));
    dispatch(NewOrderActions.billingDate(id));
    setIdSize(id);
  }
  function sizeFunc() {
    setModalSizeState(!modalSizeState);
    dispatch(NewOrderActions.colorAndSizes(order.tabela_preco_id, idSize));
  }
  function selectSize(id, grupotamanho_id, descricao) {
    setGroupSize(descricao);
    dispatch(
      NewOrderActions.sizePriceOne(id, grupotamanho_id, sizes, idProduct)
    );
    setModalSizeState(!modalSizeState);
    // setGroupId(grupotamanho_id);
    // groupId, setGroupId
  }

  useEffect(() => {
    if (order !== null) {
      if (price.preco1 === undefined || price.preco1 === null) {
        setDataValueState('Valor Real');
      } else if (
        order.condicaoPagamento.descricao === 'A VISTA' ||
        order.condicaoPagamento.descricao === '7 DD'
      ) {
        const value = order.tabelaPreco.desconto_vista_percent;
        let priceNew1 = (price.preco1 - (price.preco1 * value) / 100).toFixed(
          2
        );
        priceNew1 = priceNew1.toString();
        setDataValueState(priceNew1);
        setInputComissionState(order.tabelaPreco.comissao1);
        setSpecialPrice(1);
      } else {
        setDataValueState(price.preco1);
        setInputComissionState(order.tabelaPreco.comissao1);
      }
    }
  }, [price.preco1, order]); // eslint-disable-line

  useEffect(() => {
    if (order !== null && order !== [] && order !== undefined) {
      setPagament('A VISTA');
    } else {
      setPagament(null);
    }
  }, [order]);

  // useEffect(() => {
  //   if (pagament !== null) {
  //     const value = 1;
  //     // const value = order.tabelaPreco.desconto_vista_percent;
  //     let priceNew = (price.preco1 - (price.preco1 * value) / 100).toFixed(2);
  //     priceNew = priceNew.toString();
  //     let priceNew2 = (price.preco2 - (price.preco2 * value) / 100).toFixed(2);
  //     priceNew2 = priceNew2.toString();
  //     let priceNew3 = (price.preco3 - (price.preco3 * value) / 100).toFixed(2);
  //     priceNew3 = priceNew3.toString();

  //     if (pagament === 'A VISTA' || pagament === '7 DD') {
  //       if (dataValueState === '') {
  //         setInputComissionState('Digite um preço');
  //       }
  //       if (dataValueState >= priceNew) {
  //         setInputComissionState(order.tabelaPreco.comissao1);
  //       } else if (dataValueState < priceNew && dataValueState >= priceNew2) {
  //         setInputComissionState(order.tabelaPreco.comissao2);
  //       } else if (dataValueState < priceNew2 && dataValueState >= priceNew3) {
  //         setInputComissionState(comission.comissao3);
  //       } else if (
  //         dataValueState < priceNew3 &&
  //         dataValueState !== '' &&
  //         dataValueState !== 0
  //       ) {
  //         setInputComissionState('0.00 - situação especial');
  //       } else if (dataValueState === 0.0) {
  //         setDataValueState('digite um valor');
  //       }
  //     } else {
  //       if (dataValueState === '') {
  //         setInputComissionState('Digite um preço');
  //       }
  //       if (dataValueState >= price.preco1) {
  //         setInputComissionState(order.tabelaPreco.comissao1);
  //       } else if (
  //         dataValueState < price.preco1 &&
  //         dataValueState >= price.preco2
  //       ) {
  //         setInputComissionState(order.tabelaPreco.comissao2);
  //       } else if (
  //         dataValueState < price.preco2 &&
  //         dataValueState >= price.preco3
  //       ) {
  //         setInputComissionState(order.tabelaPreco.comissao3);
  //       } else if (
  //         dataValueState < price.preco3 &&
  //         dataValueState !== '' &&
  //         dataValueState !== 0
  //       ) {
  //         setInputComissionState('0.00 - situação especial');
  //       } else if (dataValueState === 0.0) {
  //         setDataValueState('digite um valor');
  //       }
  //     }
  //   }
  // }, [dataValueState, order]);// eslint-disable-line
  function colorFunc() {
    setColorModalState(!colorModalState);
  }
  function selectColor(id, descricao) {
    setColor(descricao);
    setColorModalState(!colorModalState);
    setColorId(id);
  }
  function completeDate() {
    setModalInfoTwo(!modalInfoTwo);
  }
  function addItem() {
    dispatch(
      ActionsEdit.requestAddItemOrder(
        order,
        idProduct,
        colorId,
        idSize,
        order.pedido_cod,
        inputObservacion,
        inputMask,
        inputComissionState,
        tamanhos
      )
    );
  }
  return (
    <Container>
      <Modal visible={modalVisible} animationType="slide">
        {addExist ? (
          <>
            <ContainerHeader>
              <AreaIcon onPress={functionOnPressLeft}>
                <Icon name={nameIcon} />
              </AreaIcon>
              <Input
                placeholder={placeholder}
                onChangeText={text => functionOnChangeText(text)}
              />
              <AreaIcon onPress={functionOnPressRight}>
                <Icon name={nameIconTwo} />
              </AreaIcon>
            </ContainerHeader>
            {loading ? (
              <ActivityIndicator
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                size="large"
                color="#fff000"
              />
            ) : (
              <FlatList
                // ListEmptyComponent={
                //   <ContainerInitial>
                //     <TextInitial>
                //       Digite algo para pesquisar a descrição do produto desejado
                //     </TextInitial>
                //   </ContainerInitial>
                // }
                initialNumToRender={10}
                style={{flex: 1}}
                data={data}
                renderItem={({item}) => {
                  return (
                    <TextButton
                      onPress={() =>
                        functionOnPressText(item.id, item.descricao)
                      }>
                      {item.descricao}
                    </TextButton>
                  );
                }}
              />
            )}
          </>
        ) : (
          <>
            <ContainerHeader2>
              <AreaIcon2 onPress={functionOnPressLeft}>
                <Icon name={nameIcon} />
              </AreaIcon2>
            </ContainerHeader2>
            <ContainerBody>
              <ScrollView>
                <InputClick
                  textPrimary="Selecione a linha"
                  textSecundary={lineState}
                  functionOnpressInput={() => {
                    descripition();
                  }}
                />
                <InputClick
                  textPrimary="Selecione o modelo"
                  textSecundary={model}
                  functionOnpressInput={() => {
                    modelFunc();
                  }}
                />
                <InputClick
                  textPrimary="Selecione o grupo de tamanho"
                  textSecundary={groupSize}
                  functionOnpressInput={() => {
                    sizeFunc();
                  }}
                />
                <InputClick
                  textPrimary="Selecione a cor"
                  textSecundary={color}
                  functionOnpressInput={() => {
                    colorFunc();
                  }}
                />
                <TextClient>Imagem</TextClient>
                <ContainerImagem>
                  <Image source={{uri: imageState}} />
                </ContainerImagem>
                <CardSize
                  nameIcon="minus"
                  nameIcon2="plus"
                  data={tamanhos}
                  functionOnpressIconLeft={(index, add) => {
                    changeQuant(index, add);
                  }}
                />
                <TextClient>Comissão</TextClient>
                <InputType
                  placeholder="Comissão"
                  valueInputText={inputComissionState}
                  functionOnChangeText={text => {
                    setInputComissionState(text);
                  }}
                />
                <TextClient>Valor real:</TextClient>
                <InputType
                  placeholder="Valor real"
                  valueInputText={dataValueState}
                  functionOnChangeText={text => {
                    setDataValueState(text);
                  }}
                />
                <TextClient>Data entrega</TextClient>
                <InputMask
                  icoName="search"
                  placeholder="Data de Entrega"
                  valueInput={inputMask}
                  onChangeText={text => {
                    setInputMask(text);
                  }}
                />
                <TextClient>Observação:</TextClient>
                <InputType
                  placeholder="Observação"
                  valueInputText={inputObservacion}
                  functionOnChangeText={text => {
                    setInputObservacion(text);
                  }}
                />
                <Button
                  titleButton="ADICIONAR"
                  functionOnPress={() => {
                    addItem();
                  }}
                  disabledButton={false}
                />
              </ScrollView>
            </ContainerBody>
          </>
        )}
      </Modal>
      <ModalCatalog
        modalExist
        loading={load}
        valueInputText={inputState}
        functionOnChangeText={text => setInputState(text)}
        placeholder="Digite a linha"
        modalVisible={modalLine}
        data={dataStateAuxLine}
        nameIcon="times"
        nameIconTwo="search"
        functionOnPressLeft={() => setModalLine(!modalLine)}
        functionOnPressText={(linha, descricao) => {
          selectDescripition(linha, descricao);
        }}
      />
      <ModalModel
        loading={load}
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
      />
      <ModalSize
        loading={load}
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
      <ModalColor
        loading={load}
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
      />
      <ModalInfo
        text="Produto Adicionado ao carrinho!"
        modalVisible={modalInfoOne}
        functionOnPressText={() => {
          setModalInfoOne(!modalInfoOne);
        }}
      />
      <ModalInfo
        icoName="times-circle"
        text="Data inválida, informe apartir da data liberada"
        modalVisible={modalInfoTwo}
        functionOnPressText={() => {
          completeDate();
        }}
      />
      <ModalInfo
        icoName="check-circle"
        text="Data válida"
        modalVisible={modalInfoTheere}
        functionOnPressText={() => {
          setModalInfoTheere(!modalInfoTheere);
        }}
      />
    </Container>
  );
}
ModalTypeCharge.propTypes = {
  placeholder: PropTypes.string,
  nameIcon: PropTypes.string,
  nameIconTwo: PropTypes.string,
  modalVisible: PropTypes.bool,
  functionOnPressLeft: PropTypes.func,
  functionOnPressRight: PropTypes.func,
  functionOnChangeText: PropTypes.func,
  functionOnPressText: PropTypes.func,
  loading: PropTypes.bool,
  addExist: PropTypes.bool,
};
ModalTypeCharge.defaultProps = {
  nameIcon: 'times',
  nameIconTwo: 'search',
  placeholder: 'TesteModal',
  modalVisible: false,
  functionOnPressLeft: () => {},
  functionOnPressRight: () => {},
  functionOnChangeText: () => {},
  functionOnPressText: () => {},
  loading: false,
  addExist: true,
};
