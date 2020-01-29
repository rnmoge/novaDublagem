import React, {useState, useEffect} from 'react';
import {Modal, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import InputClick from '../InputClick';
import Header from '../Header';
import InputType from '../InputType';
import ModalPrice from '../Modalteste2';
import InputMask from '../InputMask';
import Button from '../Button';
import CardSize from '../CardSize';
import {Container, ContainerBody, Text} from './styles';
import * as ActionsEdit from '../../store/modules/editorder/actions';

export default function EditOrder({
  itensExist,
  modalVisible,
  functionOnpressIconLeft,
  data,
  orders,
}) {
  const dispatch = useDispatch();
  console.tron.log(orders);
  const [inputComission, setInputComission] = useState();
  const [inputValue, setInputValue] = useState();
  const [size, setSize] = useState([]);
  // useEffect(() => {
  //   if (orders !== null || data !== null) {
  //     dispatch(
  //       ActionsEdit.requestPriceAndComission(
  //         orders.grupotamanho_id,
  //         orders.tabela_preco_id
  //       )
  //     );
  //   }
  // }, [orders]);// eslint-disable-line
  useEffect(() => {
    if (data !== null) {
      setInputComission(data.comissao);
      setInputValue(data.valor_real);
      if (orders !== null) {
        dispatch(
          ActionsEdit.requestPriceAndComission(
            data.linha_matriz_id,
            data.grupotamanho_id,
            orders.tabela_preco_id
          )
        );
      }
    }
  }, [data, dispatch, orders]);
  useEffect(() => {
    if (data !== null) {
      const newSizes = [];
      const {pedidoItemTamanhos} = data;
      console.tron.log(pedidoItemTamanhos);
      for (let i = 0; i < pedidoItemTamanhos.length; i += 1) {
        const {descricao} = pedidoItemTamanhos[i].tamanho;
        console.tron.log(newSizes);
        const {
          quantidade: quant,
          tamanho_id,
          tamanho_cod,
          pedidos_item_id,
          sequencia_item,
        } = pedidoItemTamanhos[i];

        const newArray = {
          quant,
          descricao,
          tamanho_id,
          tamanho_cod,
          pedidos_item_id,
          sequencia_item,
        };
        newSizes.push(newArray);
      }
      setSize(newSizes);
    }
  }, [data]);
  console.tron.log(data);
  function changeQuant(index, add) {
    console.tron.log(index);
    console.tron.log(add);
    const newSize = size.map((element, elementIndex) => {
      if (add) {
        if (index === elementIndex) {
          const {
            quant,
            descricao,
            tamanho_id,
            tamanho_cod,
            pedidos_item_id,
            sequencia_item,
          } = element;
          return {
            quant: Number(quant) + 60,
            descricao,
            tamanho_id,
            tamanho_cod,
            pedidos_item_id,
            sequencia_item,
          };
        }
        const {
          quant,
          descricao,
          tamanho_id,
          tamanho_cod,
          pedidos_item_id,
          sequencia_item,
        } = element;
        return {
          quant,
          descricao,
          tamanho_id,
          tamanho_cod,
          pedidos_item_id,
          sequencia_item,
        };
      }
      if (index === elementIndex) {
        if (element.quant >= 60) {
          const {
            quant,
            descricao,
            tamanho_id,
            tamanho_cod,
            pedidos_item_id,
            sequencia_item,
          } = element;
          return {
            quant: Number(quant) - 60,
            descricao,
            tamanho_id,
            tamanho_cod,
            pedidos_item_id,
            sequencia_item,
          };
        }
      } // else
      const {
        quant,
        descricao,
        tamanho_id,
        tamanho_cod,
        pedidos_item_id,
        sequencia_item,
      } = element;
      return {
        quant,
        descricao,
        tamanho_id,
        tamanho_cod,
        pedidos_item_id,
        sequencia_item,
      };
    });
    const newDetails = newSize;
    console.tron.log(newDetails);
    setSize(newDetails);
  }
  function requestUpdateOrder() {
    console.tron.log('emdfnm');
    dispatch(
      ActionsEdit.requestUpdateOrder(size, inputComission, inputValue, orders)
    );
  }
  return (
    <Container>
      <Modal visible={modalVisible}>
        <Header
          icoName="times"
          title="Editar Pedido"
          functionOnpressIconLeft={() => {
            functionOnpressIconLeft();
          }}
        />
        <ContainerBody>
          <ScrollView>
            <Text>Tamanhos: </Text>
            <CardSize
              data={size}
              nameIcon="minus"
              nameIcon2="plus"
              functionOnpressIconLeft={(index, add) => {
                changeQuant(index, add);
              }}
            />
            <Text>Comissão: </Text>
            <InputType
              placeholder="Comissão"
              valueInputText={inputComission}
              functionOnChangeText={text => {
                setInputComission(text);
              }}
            />
            <Text>Valor Real: </Text>
            <InputType
              placeholder="Valor Real"
              valueInputText={inputValue}
              functionOnChangeText={text => {
                setInputValue(text);
              }}
            />
            <Button
              titleButton="ATUALIZAR"
              functionOnPress={() => {
                requestUpdateOrder();
              }}
              disabledButton={false}
            />
          </ScrollView>
        </ContainerBody>
      </Modal>
    </Container>
  );
}
EditOrder.propTypes = {
  modalVisible: PropTypes.bool,
  itensExist: PropTypes.bool,
  functionOnpressIconLeft: PropTypes.func,
};
EditOrder.defaultProps = {
  modalVisible: true,
  itensExist: false,
  functionOnpressIconLeft: () => {},
};
