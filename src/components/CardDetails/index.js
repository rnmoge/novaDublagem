import React from 'react';
// import {View} from 'react-native';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {
  Container,
  AreaImage,
  Image,
  AreaText,
  Line,
  Model,
  Description,
  Feacture,
  ContainerText,
} from './styles';
import Bojo from '../../../assets/image/3101.jpg';

export default function CardDetails({product}) {
  return (
    <Container>
      <AreaImage>
        <Image source={Bojo} />
      </AreaImage>
      <AreaText>
        <ContainerText>
          <Line>Linha: {product.linha}</Line>
          <Model>Modelo: {product.matriz}</Model>
          <Description>Descrição: {product.descricao}</Description>
          <Feacture>Caracteristica: {product.caracteristicas}</Feacture>
        </ContainerText>
      </AreaText>
    </Container>
  );
}
CardDetails.prototypes = {
  product: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
CardDetails.defaultProps = {
  product: {
    linha: 'linha',
    modelo: 'modelo',
    descricao: 'descricao',
    caracteristica: 'caracteristica',
  },
};
