import React from 'react';
// import {View} from 'react-native';
import PropTypes from 'prop-types';
import {
  Container,
  AreaImage,
  Image,
  AreaText,
  Line,
  Model,
  Description,
  Feacture,
} from './styles';
import Bojo from '../../../assets/image/3101.jpg';

export default function CardDetails({line, model, description, feacture}) {
  return (
    <Container>
      <AreaImage>
        <Image source={Bojo} />
      </AreaImage>
      <AreaText>
        <Line>LInha: {line}</Line>
        <Model>Modelo: {model}</Model>
        <Description>Descrição: {description}</Description>
        <Feacture>Caracteristica: {feacture}</Feacture>
      </AreaText>
    </Container>
  );
}
CardDetails.propTypes = {
  line: PropTypes.string,
  model: PropTypes.string,
  description: PropTypes.string,
  feacture: PropTypes.string,
};
CardDetails.defaultProps = {
  line: '',
  model: '',
  description: '',
  feacture: '',
};
