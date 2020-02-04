import React, {useState, useEffect} from 'react';
import {Modal, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
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
  const {index, price, comission} = useSelector(state => state.editorder);

  const [inputComission, setInputComission] = useState();
  const [inputValue, setInputValue] = useState();
  const [size, setSize] = useState([]);
  const [condition, setCondition] = useState(null);
  const [disable, setDisable] = useState(true);
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
        setCondition(orders.condicaoPagamento.descricao);
      }
    }
  }, [data, dispatch, orders]);// eslint-disable-line
  useEffect(() => {
    if (condition !== null) {
      if (condition === 'A VISTA' || condition === '7 DD') {
      }
    }
  }, [condition]);
  useEffect(() => {
    if (data !== null) {
      const newSizes = [];
      const {pedidoItemTamanhos} = data;

      for (let i = 0; i < pedidoItemTamanhos.length; i += 1) {
        const {descricao} = pedidoItemTamanhos[i].tamanho;

        const {
          id,
          quantidade: quant,
          tamanho_id,
          tamanho_cod,
          pedidos_item_id,
          sequencia_item,
          data_faturamento,
        } = pedidoItemTamanhos[i];

        const newArray = {
          id,
          quant,
          descricao,
          tamanho_id,
          tamanho_cod,
          pedidos_item_id,
          sequencia_item,
          data_faturamento,
        };
        newSizes.push(newArray);
      }
      setSize(newSizes);
    }
  }, [data]);

  useEffect(() => {
    if (price.preco1 !== null) {
      const value = comission.desconto_vista_percent;
      let priceNew = (price.preco1 - (price.preco1 * value) / 100).toFixed(2);
      priceNew = priceNew.toString();
      let priceNew2 = (price.preco2 - (price.preco2 * value) / 100).toFixed(2);
      priceNew2 = priceNew2.toString();
      let priceNew3 = (price.preco3 - (price.preco3 * value) / 100).toFixed(2);
      priceNew3 = priceNew3.toString();

      if (condition === 'A VISTA' || condition === '7 DD') {
        if (inputValue === '') {
          setInputComission('Digite um preço');
        }
        if (inputValue >= priceNew) {
          setInputComission(comission.comissao1);
        } else if (inputValue < priceNew && inputValue >= priceNew2) {
          setInputComission(comission.comissao2);
        } else if (inputValue < priceNew2 && inputValue >= priceNew3) {
          setInputComission(comission.comissao3);
        } else if (
          inputValue < priceNew3 &&
          inputValue !== '' &&
          inputValue !== 0
        ) {
          setInputComission('0.00 - situação especial');
        } else if (inputValue === 0.0) {
          setInputValue('digite um valor');
        }
      } else {
        if (inputValue === '') {
          setInputComission('Digite um preço');
        }
        if (inputValue >= price.preco1) {
          setInputComission(comission.comissao1);
        } else if (inputValue < price.preco1 && inputValue >= price.preco2) {
          setInputComission(comission.comissao2);
        } else if (inputValue < price.preco2 && inputValue >= price.preco3) {
          setInputComission(comission.comissao3);
        } else if (
          inputValue < price.preco3 &&
          inputValue !== '' &&
          inputValue !== 0
        ) {
          setInputComission('0.00 - situação especial');
        } else if (inputValue === 0.0) {
          setInputValue('digite um valor');
        }
      }
    }
  }, [inputValue, price.preco1, price.preco2, price.preco3]);// eslint-disable-line
  function changeQuant(index, add) {
    const newSize = size.map((element, elementIndex) => {
      if (add) {
        if (index === elementIndex) {
          const {
            id,
            quant,
            descricao,
            tamanho_id,
            tamanho_cod,
            pedidos_item_id,
            sequencia_item,
            data_faturamento,
          } = element;
          return {
            id,
            quant: Number(quant) + 60,
            descricao,
            tamanho_id,
            tamanho_cod,
            pedidos_item_id,
            sequencia_item,
            data_faturamento,
          };
        }
        const {
          id,
          quant,
          descricao,
          tamanho_id,
          tamanho_cod,
          pedidos_item_id,
          sequencia_item,
          data_faturamento,
        } = element;
        return {
          id,
          quant,
          descricao,
          tamanho_id,
          tamanho_cod,
          pedidos_item_id,
          sequencia_item,
          data_faturamento,
        };
      }
      if (index === elementIndex) {
        if (element.quant >= 60) {
          const {
            id,
            quant,
            descricao,
            tamanho_id,
            tamanho_cod,
            pedidos_item_id,
            sequencia_item,
            data_faturamento,
          } = element;
          return {
            id,
            quant: Number(quant) - 60,
            descricao,
            tamanho_id,
            tamanho_cod,
            pedidos_item_id,
            sequencia_item,
            data_faturamento,
          };
        }
      } // else
      const {
        id,
        quant,
        descricao,
        tamanho_id,
        tamanho_cod,
        pedidos_item_id,
        sequencia_item,
        data_faturamento,
      } = element;
      return {
        id,
        quant,
        descricao,
        tamanho_id,
        tamanho_cod,
        pedidos_item_id,
        sequencia_item,
        data_faturamento,
      };
    });
    const newDetails = newSize;

    setSize(newDetails);
  }
  function requestUpdateOrder() {
    dispatch(
      ActionsEdit.requestUpdateOrder(
        size,
        inputComission,
        inputValue,
        orders,
        index,
        data
      )
    );
    dispatch(ActionsEdit.closeModalEdit(false));
  }
  function closeModal() {
    dispatch(ActionsEdit.closeModalEdit(false));
  }
  useEffect(() => {
    if (inputValue === '') {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [inputValue]);
  return (
    <Container>
      <Modal visible={modalVisible}>
        <Header
          icoName="times"
          title="Editar Pedido"
          functionOnpressIconLeft={() => {
            closeModal();
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
