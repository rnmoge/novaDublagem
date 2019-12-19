import React from 'react';
import {Modal} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {Container, ContainerBody} from './styles';
import Header from '../Header';
import CardCart from '../CardCart';
import Button from '../Button';
import * as ActionsCart from '../../store/modules/cart/actions';
// esse aqui é minha pagina de carrinho que é um componente que chamo em diversas partes do app
// o que o data mostra ?
// só um ?copia do reactotron xD
// {descricao: '3101', }perai
// mas cade a lista ? o flatlist -> ta dentro do component cardCart
// vai pra la cardCart
export default function({functionOnPressIcon}) {
  const {stateModal, products} = useSelector(state => state.cart);

  const dispatch = useDispatch();
  function handleCart() {
    dispatch(ActionsCart.cartClose(false));
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
          <Button titleButton="SALVAR E ENVIAR" />
        </ContainerBody>
      </Modal>
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
