import React, {useEffect} from 'react';
// import {Text} from 'react-native';
import PropTypes from 'prop-types';
import {
  Container,
  ContainerTotal,
  ContainerTotal2,
  Icon,
  AreaIcon,
  ContainerProduct,
  TextInfo,
  ContainerQuant,
  List,
  ContainerIcon,
  TextTitle,
  ContainerQuant2,
  Line,
} from './styles';

export default function CardCart({
  nameIconOne,
  nameIconTwo,
  data,
  functionOnpressIconDelete,
}) {
  const [stateData, setStateData] = [data];

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
                <TextInfo>{item.descricao}</TextInfo>
              </ContainerProduct>
              <ContainerQuant>
                <TextTitle>Valor Real</TextTitle>
                <TextInfo>R${item.value}</TextInfo>
              </ContainerQuant>
              <ContainerTotal2>
                {item.pedidoItemTamanhos.map(tamanhos => {
                  return (
                    <ContainerQuant2>
                      <Line>{tamanhos.descricao}- </Line>
                      <Line> {tamanhos.quant}</Line>
                    </ContainerQuant2>
                  );
                })}
              </ContainerTotal2>

              <ContainerIcon>
                <AreaIcon>
                  <Icon name={nameIconOne} />
                </AreaIcon>
                <AreaIcon>
                  <Icon
                    name={nameIconTwo}
                    onPress={() => {
                      functionOnpressIconDelete(index);
                    }}
                  />
                </AreaIcon>
              </ContainerIcon>
            </ContainerTotal>
          );
        }}
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
