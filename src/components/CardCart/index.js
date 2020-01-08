import React, {useState} from 'react';
// import {Text} from 'react-native';
import PropTypes from 'prop-types';
import {
  Container,
  ContainerTotal,
  Icon,
  AreaIcon,
  ContainerProduct,
  TextInfo,
  ContainerQuant,
  List,
  ContainerIcon,
  TextTitle,
} from './styles';

export default function CardCart({
  nameIconOne,
  nameIconTwo,
  data,
  functionOnpressIconDelete,
}) {
  const [stateData, setStateData] = [data];
  // function excluirProductList(index) {
  //   const newProductList = productList.splice(1, index);
  //   setProductList(newProductList);
  // },
  return (
    <Container>
      <List
        data={stateData}
        ListEmptyComponent={
          <TextInfo>
            Você não possui nenhum produto em seu carrinho. Vá até o pedido e
            realize algum.
          </TextInfo>
        }
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <ContainerTotal>
              <ContainerProduct>
                <TextTitle>Produto</TextTitle>
                <TextInfo>{item.produto}</TextInfo>
                <TextTitle>Descrição</TextTitle>
                <TextInfo>{item.matriz_cod}</TextInfo>
              </ContainerProduct>
              <ContainerQuant>
                <TextTitle>Quantidade</TextTitle>
                <TextInfo>{item.quant}</TextInfo>
                <TextTitle>Valor Real</TextTitle>
                <TextInfo>R${item.value}</TextInfo>
              </ContainerQuant>
              <ContainerIcon>
                <AreaIcon>
                  <Icon name={nameIconOne} />
                </AreaIcon>
                <AreaIcon>
                  <Icon
                    name={nameIconTwo}
                    onPress={functionOnpressIconDelete}
                  />
                </AreaIcon>
              </ContainerIcon>
            </ContainerTotal>
          );
        }}
        // testa aew yuri
        // di
        keyExtractor={({item}, index) => index.toString()}
      />
    </Container>
  );
}
CardCart.propTypes = {
  functionOnpressIconDelete: PropTypes.func,
  nameIconOne: PropTypes.string,
  nameIconTwo: PropTypes.string,
  // iconAparence: PropTypes.bool,
  data: PropTypes.objectOf(PropTypes.string),
};
CardCart.defaultProps = {
  functionOnpressIconDelete: () => {},
  nameIconOne: 'fonticons',
  nameIconTwo: 'fonticons',
  data: [
    {
      id: 1,
      produto: 'BOJINHO',
      descricao: 'BOJINHO',
      quant: 60,
      valor: '1,36',
    },
    {id: 2, produto: 'BOJINHO', descricao: 'BOJINHO', quant: 60, valor: '1,36'},
    {id: 3, produto: 'BOJINHO', descricao: 'BOJINHO', quant: 60, valor: '1,36'},
    {id: 5, produto: 'BOJINHO', descricao: 'BOJINHO', quant: 60, valor: '1,36'},
    {id: 6, produto: 'BOJINHO', descricao: 'BOJINHO', quant: 60, valor: '1,36'},
    {id: 7, produto: 'BOJINHO', descricao: 'BOJINHO', quant: 60, valor: '1,36'},
    {id: 8, produto: 'BOJINHO', descricao: 'BOJINHO', quant: 60, valor: '1,36'},
    {id: 9, produto: 'BOJINHO', descricao: 'BOJINHO', quant: 60, valor: '1,36'},
  ],
  // iconAparence: false,
};
