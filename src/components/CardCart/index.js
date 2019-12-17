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
} from './styles';

export default function CardCart({nameIconOne, nameIconTwo}) {
  const [cart, setCart] = useState([
    {id: 1, produto: 'BOJINHO', descricao: 'BOJINHO', quant: 60, valor: '1,36'},
    {id: 2, produto: 'BOJINHO', descricao: 'BOJINHO', quant: 60, valor: '1,36'},
    {id: 3, produto: 'BOJINHO', descricao: 'BOJINHO', quant: 60, valor: '1,36'},
    {id: 5, produto: 'BOJINHO', descricao: 'BOJINHO', quant: 60, valor: '1,36'},
    {id: 6, produto: 'BOJINHO', descricao: 'BOJINHO', quant: 60, valor: '1,36'},
    {id: 7, produto: 'BOJINHO', descricao: 'BOJINHO', quant: 60, valor: '1,36'},
    {id: 8, produto: 'BOJINHO', descricao: 'BOJINHO', quant: 60, valor: '1,36'},
  ]);
  return (
    <Container>
      <List
        data={cart}
        initialNumToRender={10}
        ListEmptyComponent={
          <TextInfo>
            Digite um dos filtros acima para acessar o catálogo
          </TextInfo>
        }
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <ContainerTotal>
              <ContainerProduct>
                <TextInfo>Produto</TextInfo>
                <TextInfo>{item.produto}</TextInfo>
                <TextInfo>Descrição</TextInfo>
                <TextInfo>{item.descricao}</TextInfo>
              </ContainerProduct>
              <ContainerQuant>
                <TextInfo>Quantidade</TextInfo>
                <TextInfo>Valor Real</TextInfo>
              </ContainerQuant>
              <AreaIcon>
                <Icon name={nameIconOne} />
              </AreaIcon>
              <AreaIcon>
                <Icon name={nameIconTwo} />
              </AreaIcon>
            </ContainerTotal>
          );
        }}
      />
    </Container>
  );
}
CardCart.propTypes = {
  // functionOnPress: PropTypes.func,
  nameIconOne: PropTypes.string,
  nameIconTwo: PropTypes.string,
  // iconAparence: PropTypes.bool,
};
CardCart.defaultProps = {
  // functionOnPress: () => {},
  nameIconOne: 'fonticons',
  nameIconTwo: 'fonticons',
  // iconAparence: false,
};
