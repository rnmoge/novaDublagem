import React, {useState, useEffect} from 'react';
import {Modal, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Header';
import InputClick from '../InputClick';
import Button from '../Button';
import * as ActionsProduct from '../../store/modules/productorder/actions';
import {
  Container,
  ContainerHeader,
  ContainerBody,
  ContainerHeader2,
  AreaIcon,
  Icon,
  Input,
  List,
  FlatList,
  ContainerList,
  Reason,
  Cod,
  ContainerTotal,
} from './styles';

export default function ModalTransport({
  nameIcon,
  functionOnPressRight,
  functionOnChangeText,
  nameIconTwo,
  functionOnpressIcon,
  data,
}) {
  const {transport, modalTransport} = useSelector(state => state.productorder);
  const {loading} = useSelector(state => state.common);
  const [transState, setTransState] = useState(false);
  const [despachState, setDespachState] = useState(false);
  const [inputTrans, setInputTrans] = useState('Nome da empresa');
  const [inputDespacho, setInputDespacho] = useState('Nome da empresa, código');
  const [dataStateAux, setDataStateAux] = useState(transport);
  const [inputModal, setInputModal] = useState();
  useEffect(() => {
    const orderArray = transport
      .filter(element => {
        return element.nome_razao.indexOf(inputModal) !== -1;
      })
      .map(element => {
        return element;
      });
    setDataStateAux(orderArray);
  }, [inputModal]);// eslint-disable-line
  const dispatch = useDispatch();
  function Transport() {
    setTransState(!transState);
    dispatch(ActionsProduct.selectTransport());
  }
  function Transport2() {
    setDespachState(!despachState);
    dispatch(ActionsProduct.selectTransport());
  }
  function selectTrans(nome_razao, id) {
    setTransState(!transState);
    dispatch(ActionsProduct.selectTransportInput(id, transport));
    setInputTrans(nome_razao);
  }
  function selectDespach(nome_razao, id) {
    setDespachState(!despachState);
    dispatch(ActionsProduct.selectDespachInput(id, transport));
    setInputDespacho(nome_razao);
  }
  function transportClose() {
    dispatch(ActionsProduct.closeTransport(false));
  }
  return (
    <Container>
      <Modal visible={modalTransport} animationType="slide">
        <ContainerHeader>
          <Header
            icoName="arrow-left"
            title="Transpotadora"
            functionOnpressIconLeft={() => {
              transportClose();
            }}
          />
        </ContainerHeader>
        <ContainerBody>
          <InputClick
            textPrimary="Transportadora"
            textSecundary={inputTrans}
            functionOnpressInput={() => {
              Transport();
            }}
          />
          <InputClick
            textPrimary="Redespacho"
            textSecundary={inputDespacho}
            functionOnpressInput={() => {
              Transport2();
            }}
          />
          <Button titleButton="CONFIRMAR" />
        </ContainerBody>
      </Modal>
      <Modal visible={transState} animationType="slide">
        <ContainerHeader2>
          <AreaIcon
            onPress={() => {
              setTransState(!transState);
            }}>
            <Icon name={nameIcon} />
          </AreaIcon>
          <Input
            placeholder="Nome da empresa"
            onChangeText={text => setInputModal(text)}
            value={inputModal}
          />
          <AreaIcon onPress={functionOnPressRight}>
            <Icon name={nameIconTwo} />
          </AreaIcon>
        </ContainerHeader2>
        <List>
          {loading ? (
            <ActivityIndicator
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
              size="large"
              color="#fff000"
            />
          ) : (
            <FlatList
              initialNumToRender={10}
              style={{flex: 1}}
              data={dataStateAux}
              renderItem={({item}) => {
                return (
                  <ContainerTotal
                    onPress={() => {
                      selectTrans(item.nome_razao, item.id);
                    }}>
                    <ContainerList>
                      <Reason>{item.nome_razao}</Reason>
                      <Cod>{item.cliente_cod}</Cod>
                    </ContainerList>
                  </ContainerTotal>
                );
              }}
            />
          )}
        </List>
      </Modal>
      <Modal visible={despachState} animationType="slide">
        <ContainerHeader2>
          <AreaIcon
            onPress={() => {
              setDespachState(!despachState);
            }}>
            <Icon name={nameIcon} />
          </AreaIcon>
          <Input
            placeholder="Nome da empresa"
            onChangeText={text => setInputModal(text)}
            value={inputModal}
          />
          <AreaIcon onPress={functionOnPressRight}>
            <Icon name={nameIconTwo} />
          </AreaIcon>
        </ContainerHeader2>
        <List>
          {loading ? (
            <ActivityIndicator
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
              size="large"
              color="#fff000"
            />
          ) : (
            <FlatList
              initialNumToRender={10}
              style={{flex: 1}}
              data={dataStateAux}
              renderItem={({item}) => {
                return (
                  <ContainerTotal
                    onPress={() => {
                      selectDespach(item.nome_razao, item.id);
                    }}>
                    <ContainerList>
                      <Reason>{item.nome_razao}</Reason>
                      <Cod>{item.cliente_cod}</Cod>
                    </ContainerList>
                  </ContainerTotal>
                );
              }}
            />
          )}
        </List>
      </Modal>
    </Container>
  );
}
ModalTransport.propTypes = {
  placeholder: PropTypes.string,
  nameIcon: PropTypes.string,
  nameIconTwo: PropTypes.string,
  functionOnPressLeft: PropTypes.func,
  functionOnPressRight: PropTypes.func,
  functionOnChangeText: PropTypes.func,
  functionOnpressIcon: PropTypes.func,
  loading: PropTypes.bool,
};
ModalTransport.defaultProps = {
  nameIcon: 'times',
  nameIconTwo: 'search',
  placeholder: 'TesteModal',
  // modalVisible: false,
  functionOnPressLeft: () => {},
  functionOnPressRight: () => {},
  functionOnChangeText: () => {},
  functionOnpressIcon: () => {},
  loading: false,
};
