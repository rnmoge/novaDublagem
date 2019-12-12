import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../../components/Header';
import InputClick from '../../components/InputClick';
import InputType from '../../components/InputType';
import Modal from '../../components/Modal';
import ModalCatalog from '../../components/ModalCatalog';
import ModalModel from '../../components/ModalModel';
import Button from '../../components/Button';
import * as ActionsProduct from '../../store/modules/productorder/actions';
import * as CatalogActions from '../../store/modules/catalog/actions';
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
  ContainerButton2,
  ContainerModal,
} from './styles';
// import Bojo from '../../../assets/image/3101.jpg';

export default function ProductOrder() {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.order);
  const {loading} = useSelector(state => state.common);
  const {data2} = useSelector(state => state.table);
  const {input, descricao1} = useSelector(state => state.catalog);
  const [inputState, setInputState] = useState('');
  const [inputLineState, setInputLineState] = useState('');
  const {table, condition} = useSelector(state => state.neworder);
  const [modalState, setModalState] = useState(false);
  useEffect(() => {
    if (input === '') {
      setInputLineState('Selecione a linha');
    } else {
      setInputLineState(input);
    }
  }, [input]);
  function backNewOrder() {
    dispatch(ActionsProduct.backNewOrder());
  }
  function searchDescription() {
    dispatch(CatalogActions.searchDescription(data2.id, inputState));
  }
  function descripition() {
    setModalState(!modalState);
    dispatch(
      CatalogActions.searchDescription(data2.id, inputState, inputLineState)
    );
  }
  function selectDescripition(linha, descricao) {
    dispatch(CatalogActions.searchModel(linha, data2.id, descricao));
    setInputLineState(descricao);
    setModalState(!modalState);
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
                textSecundary="Modelo"
                icoName="angle-down"
              />
              <InputClick
                textPrimary="Selecione o tamanho:"
                textSecundary="Grupos de tamanhos"
                icoName="angle-down"
              />
              <InputClick
                textPrimary="Selecione a cor:"
                textSecundary="Cor"
                icoName="angle-down"
              />
              <TextClient>Imagem:</TextClient>
              <ContainerImagem>
                <Image />
              </ContainerImagem>
              <TextClient>Observação:</TextClient>
              <InputType placeholder="Observação" />
              <ContainerButton2>
                <ContainerButton>
                  <Button titleButton="Adicionar" />
                </ContainerButton>
                <ContainerButton>
                  <Button titleButton="Adicionar" />
                </ContainerButton>
              </ContainerButton2>
              <ContainerButton2>
                <ContainerButton>
                  <Button titleButton="Adicionar" />
                </ContainerButton>
                <ContainerButton>
                  <Button titleButton="Adicionar" />
                </ContainerButton>
              </ContainerButton2>
            </ContainerList>
          </List>
        </ScrollView>
      </ContainerBody>
      <ContainerModal>
        {/* <Modal
          placeholder="Digite a cor"
          modalVisible={modalState}
          // data={cores}
          // valueInputText={inputState}
          // functionOnChangeText={text => setInputState(text)}
          nameIcon="times"
          nameIconTwo="search"
          functionOnPressLeft={() => setModalState(!modalState)}
        /> */}
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
        {/* <ModalModel
          loading={loading}
          valueInputText={inputState}
          functionOnChangeText={text => setInputState(text)}
          placeholder="Digite a linha"
          modalVisible={modalState}
          data={descricao1}
          nameIcon="times"
          nameIconTwo="search"
          functionOnPressLeft={() => setModalState(!modalState)}
          functionOnPressText={matriz => {
            selectDescripition(matriz);
          }}
          functionOnPressRight={() => {
            searchDescription();
          }}
        /> */}
      </ContainerModal>
    </Container>
  );
}
