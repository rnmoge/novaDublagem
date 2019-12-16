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
import ModalSize from '../../components/ModalSize';
import Button from '../../components/Button';
import ButtonSecondary from '../../components/ButtonSecondary';
import * as ActionsProduct from '../../store/modules/productorder/actions';
// import * as CatalogActions from '../../store/modules/catalog/actions';
import * as NewOrderActions from '../../store/modules/neworder/actions';
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
  ContainerButton,
  TextButton,
  ContainerModal,
} from './styles';
// import Bojo from '../../../assets/image/3101.jpg';

export default function ProductOrder() {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.order);
  const {loading} = useSelector(state => state.common);
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
  } = useSelector(state => state.neworder);
  console.tron.log('sizes');
  console.tron.log(sizes);
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
  useEffect(() => {
    // if (input === '') {
    //   setInputLineState('Selecione a linha');
    // } else {
    //   setInputLineState(input);
    // }
    setInputComissionState(comission);
  }, [comission, input]);
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
      NewOrderActions.searchModel(linha, idTable, inputStateModel, descricao)
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
    setModalSizeState(!modalSizeState);
    dispatch(NewOrderActions.sizePriceOne(id, sizes));
    setDataValueState(price.preco1);
  }
  function colorFunc() {
    setColorModalState(!colorModalState);
  }
  function selectColor(descricao) {
    setInputColorState(descricao);
    setColorModalState(!colorModalState);
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
      />
      <ContainerBody>
        <ContainerTotal>
          <ContainerClient>
            <ContainerPlaceholder>
              <Text>Cliente: </Text>
            </ContainerPlaceholder>
            <ContainerInfo>
              <TextClient>{data.razao}</TextClient>
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
                placeholder="Valor Real"
                valueInputText={dateValueState}
              />
              <TextClient>Data faturamento:</TextClient>
              <InputType
                placeholder="Yuri"
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
              <Button titleButton="Adicionar" />
              <ButtonSecondary titleButton="Finalizar Pedido" />
              {/* <ContainerButton>
                <TextButton>Trocar tabela de preço</TextButton>
              </ContainerButton> */}
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
          data={dataDescription}
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
          data={cores}
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
          placeholder="Digite a linha"
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
          placeholder="Digite a linha"
          modalVisible={modalModelState}
          data={line}
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
      </ContainerModal>
    </Container>
  );
}
