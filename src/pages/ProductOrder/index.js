import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import Header from '../../components/Header';
import InputClick from '../../components/InputClick';
import InputType from '../../components/InputType';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
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
import Bojo from '../../../assets/image/3101.jpg';

export default function ProductOrder() {
  const {data} = useSelector(state => state.order);
  const [modalState, setModalState] = useState(false);
  return (
    <Container>
      <Header
        icoName="arrow-left"
        title="Escolha dos produtos"
        icoNameTwo="shopping-cart"
      />
      <ContainerBody>
        <ContainerTotal>
          <ContainerClient>
            <ContainerPlaceholder>
              <Text>Cliente: </Text>
            </ContainerPlaceholder>
            <ContainerInfo>
              <TextClient>{data.razao}</TextClient>
              <TextClient>Tabela de preço: </TextClient>
              <TextClient>Condição de pagamento: </TextClient>
            </ContainerInfo>
          </ContainerClient>
        </ContainerTotal>
        <ScrollView>
          <List>
            <ContainerList>
              <InputClick
                textPrimary="Selecione a linha:"
                textSecundary="Linha"
                icoName="angle-down"
                functionOnpressInput={() => {
                  setModalState(true);
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
                <Image source={Bojo} />
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
        <Modal
          placeholder="Digite a cor"
          modalVisible={modalState}
          // data={cores}
          // valueInputText={inputState}
          // functionOnChangeText={text => setInputState(text)}
          nameIcon="times"
          nameIconTwo="search"
          functionOnPressLeft={() => setModalState(!modalState)}
        />
      </ContainerModal>
    </Container>
  );
}
