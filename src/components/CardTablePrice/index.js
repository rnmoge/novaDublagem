import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
// import * as CatalogoActions from '../../store/modules/catalog/actions';
import {
  Container,
  ContainerTitle,
  ContainerSize,
  FlatList,
  Text,
  ContainerPrice,
  ContainerComission,
  Prices,
  Sizes,
  ContainerTotal,
  ContainerTotal2,
  TextComission,
} from './styles';

export default function CardTablePrice({commision, loading, data}) {
  return (
    <Container>
      <ContainerTitle>
        <Text>Preços:</Text>
      </ContainerTitle>
      <ContainerTotal>
        <ContainerSize>
          <Text>Tamanhos:</Text>
        </ContainerSize>
        <ContainerComission>
          <TextComission>{commision.comissao1}</TextComission>
        </ContainerComission>
        <ContainerComission>
          <TextComission>{commision.comissao2}</TextComission>
        </ContainerComission>
        <ContainerComission>
          <TextComission>{commision.comissao3}</TextComission>
        </ContainerComission>
      </ContainerTotal>
      {loading ? (
        <ActivityIndicator
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          size="large"
          color="#fff000"
        />
      ) : (
        <FlatList
          data={data}
          initialNumToRender={10}
          renderItem={({item}) => {
            return (
              <ContainerTotal2>
                <ContainerSize>
                  <Sizes>{item.tamanho.descricao}</Sizes>
                </ContainerSize>
                <ContainerPrice>
                  <Prices>{item.preco1}</Prices>
                </ContainerPrice>
                <ContainerPrice>
                  <Prices>{item.preco2}</Prices>
                </ContainerPrice>
                <ContainerPrice>
                  <Prices>{item.preco3}</Prices>
                </ContainerPrice>
              </ContainerTotal2>
            );
          }}
        />
      )}
    </Container>
  );
}
CardTablePrice.prototypes = {
  table: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  commision: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  size: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  price1: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  price2: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  price3: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
CardTablePrice.defaultProps = {
  commision: {
    commision_1: '8%',
    commision_2: '7%',
    commision_3: '6%',
  },
};
