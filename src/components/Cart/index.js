import React, {useState, useEffect} from 'react';
import {Modal, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {
  Container,
  ContainerBody,
  ContainerValue,
  ContainerButton,
  ContainerButtonTotal,
} from './styles';
import Header from '../Header';
import ModalTransport from '../ModalTransport';
import ModalTransportTow from '../ModalTransportTwo';
import CardCart from '../CardCart';
import Button from '../Button';
import * as ActionsCart from '../../store/modules/cart/actions';
import * as ActionsProduct from '../../store/modules/productorder/actions';
import * as ActionsFinalize from '../../store/modules/finalizeorder/actions';
import {ContainerText, TextBold, TextRegular} from '../../styles/fonts';

export default function({functionOnPressIcon}) {
  const {stateModal, products} = useSelector(state => state.cart);

  const [disable, setDisable] = useState();
  const [valueState, setValueState] = useState();
  const [quantState, setQuantState] = useState();
  useEffect(() => {
    const list = [];
    const listQuant = [];
    if (products.length > 0) {
      for (let i = 0; i < products.length; i += 1) {
        const {pedidoItemTamanhos, value} = products[i];
        let valueTotalQuant = 0;
        for (let j = 0; j < pedidoItemTamanhos.length; j += 1) {
          valueTotalQuant += Number(pedidoItemTamanhos[j].quant);
        }
        const valueProductTotal = valueTotalQuant * value;
        list.push(valueProductTotal);
        listQuant.push(valueTotalQuant);
      }
      const newValue = list.reduce(
        (acumulador, element) => (acumulador += element),
        0
      );
      const newQuant = listQuant.reduce(
        (acumulador, element) => (acumulador += element),
        0
      );
      setValueState(newValue.toFixed(2));
      setQuantState(newQuant);
    }
  }, [products]);
  useEffect(() => {
    if (products.length !== 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
   }, [products]); // eslint-disable-line

  const dispatch = useDispatch();
  function handleCart() {
    dispatch(ActionsCart.cartClose(false));
  }
  function transportOpen() {
    if (quantState >= 1499) {
      dispatch(ActionsFinalize.saveOrderTotal(null, null, 7));
    } else if (quantState === 720) {
      dispatch(ActionsFinalize.saveOrderTotal(null, null, 7));
    } else {
      dispatch(ActionsProduct.openTransport(true));
      dispatch(ActionsFinalize.statusOrder(7));
    }
  }
  function transportOpenTwo() {
    if (quantState >= 1499) {
      dispatch(ActionsFinalize.saveOrderTotal(null, null, 8));
    } else if (quantState === 720) {
      dispatch(ActionsFinalize.saveOrderTotal(null, null, 8));
    } else {
      dispatch(ActionsProduct.openTransport(true));
      dispatch(ActionsFinalize.statusOrder(8));
    }
  }
  function excluirProductList(index) {
    const newList = products.filter((product, indexProduct) => {
      if (indexProduct !== index) {
        return product;
      }
    });
    dispatch(ActionsCart.removeToCart([...newList]));
  }
  return (
    <Container>
      <Modal visible={stateModal} animationType="slide">
        <Header
          icoName="arrow-left"
          title="Carrinho"
          functionOnpressIconLeft={() => {
            handleCart();
          }}
        />
        <ContainerBody>
          <CardCart
            nameIconOne="pen"
            nameIconTwo="times"
            data={products}
            functionOnpressIconDelete={index => {
              excluirProductList(index);
            }}
          />
          {products.length !== 0 ? (
            <>
              <ContainerValue>
                <ContainerText>
                  <TextRegular>
                    Valor Total: <TextBold>R${valueState}</TextBold>
                  </TextRegular>
                </ContainerText>
                <ContainerText>
                  <TextRegular>
                    Quantidade total: <TextBold>{quantState}</TextBold>
                  </TextRegular>
                </ContainerText>
              </ContainerValue>
              <ContainerButtonTotal>
                <ContainerButton>
                  <Button
                    titleButton="SALVAR E ENVIAR"
                    disabledButton={disable}
                    functionOnPress={() => {
                      transportOpen();
                    }}
                  />
                </ContainerButton>
                <ContainerButton>
                  {/* <TextBold>OU</TextBold> */}
                  <Button
                    titleButton="SALVAR APENAS"
                    disabledButton={disable}
                    functionOnPress={() => {
                      transportOpenTwo();
                    }}
                  />
                </ContainerButton>
              </ContainerButtonTotal>
            </>
          ) : null}
        </ContainerBody>
      </Modal>
      <ModalTransport modalVisible={false} />
      <ModalTransportTow />
    </Container>
  );
}
Modal.propTypes = {
  modalVisible: PropTypes.bool,
  functionOnPressIcon: PropTypes.func,
};
Modal.defaultProps = {
  modalVisible: false,
  functionOnPressLeft: () => {},
  functionOnPressRight: () => {},
  functionOnChangeText: () => {},
  functionOnPressText: () => {},
  functionOnPressIcon: () => {},
  loading: false,
};
