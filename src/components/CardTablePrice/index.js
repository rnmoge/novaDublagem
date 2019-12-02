import React from 'react';
// import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import * as CatalogoActions from '../../store/modules/catalog/actions';
import {
  Container,
  ContainerTitle,
  Title,
  ContainerSize,
  FlatList,
  Sizes,
  Text,
  ContainerPrice,
  AreaTable,
  ContainerComission,
  Comission,
  Prices,
} from './styles';

export default function CardTablePrice({
  table,
  commision,
  price1,
  price2,
  price3,
}) {
  return (
    <Container>
      <ContainerTitle>
        <Title>Preços:</Title>
      </ContainerTitle>
      <AreaTable>
        <ContainerSize>
          <Text>Tamanhos:</Text>
          <FlatList
            data={table}
            renderItem={({item}) => {
              return <Sizes>{item.tamanho.descricao}</Sizes>;
            }}
          />
        </ContainerSize>
        <ContainerPrice>
          <ContainerComission>
            <Comission>{commision.comission_1}</Comission>
          </ContainerComission>
          <ContainerComission
            data={table}
            renderItem={({item}) => {
              return <Comission>{item.comission1}</Comission>;
            }}
          />
          <FlatList
            data={price1}
            renderItem={({item}) => {
              return <Prices>{item.preco1}</Prices>;
            }}
          />
        </ContainerPrice>
        <ContainerPrice>
          <ContainerComission>
            <Comission>{commision.comission_2}</Comission>
          </ContainerComission>
          <FlatList
            data={price2}
            renderItem={({item}) => {
              return <Prices>{item.preco2}</Prices>;
            }}
          />
        </ContainerPrice>
        <ContainerPrice>
          <ContainerComission>
            <Comission>{commision.comission_3}</Comission>
          </ContainerComission>
          <FlatList
            data={price3}
            renderItem={({item}) => {
              return <Prices>{item.preco3}</Prices>;
            }}
          />
        </ContainerPrice>
      </AreaTable>
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
