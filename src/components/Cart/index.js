import React from 'react';
import {Modal} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {Container, ContainerBody} from './styles';
import Header from '../Header';
import ModalTransport from '../ModalTransport';
import CardCart from '../CardCart';
import Button from '../Button';
import * as ActionsCart from '../../store/modules/cart/actions';
import * as ActionsProduct from '../../store/modules/productorder/actions';

export default function({functionOnPressIcon}) {
  const {stateModal, products} = useSelector(state => state.cart);

  const dispatch = useDispatch();
  function handleCart() {
    dispatch(ActionsCart.cartClose(false));
  }
  function transportOpen() {
    dispatch(ActionsProduct.openTransport(true));
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
            functionOnpressIconDelete={() => {
              functionOnPressIcon();
            }}
          />
          <Button
            titleButton="SALVAR E ENVIAR"
            disabledButton={false}
            functionOnPress={() => {
              transportOpen();
            }}
          />
        </ContainerBody>
      </Modal>
      <ModalTransport modalVisible={false} />
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
