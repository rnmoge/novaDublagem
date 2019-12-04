import React from 'react';
// import {Text} from 'react-native';
import PropTypes from 'prop-types';
import {
  Container,
  Container2,
  Text,
  TextInfo,
  TextInfo2,
  ContainerText,
  ContainerTextCamp,
} from './styles';

export default function DetailsClient({client}) {
  return (
    <Container2>
      <Text>Dados cadastrais do cliente</Text>
      <Container>
        <ContainerTextCamp>
          <TextInfo>Código: </TextInfo>
          <TextInfo>R. Social:</TextInfo>
          <TextInfo>Endereço: </TextInfo>
          <TextInfo>Cidade: </TextInfo>
          <TextInfo>Bairro: </TextInfo>
          <TextInfo>UF: </TextInfo>
          <TextInfo>CNPJ: </TextInfo>
          <TextInfo>E-mail: </TextInfo>
        </ContainerTextCamp>
        <ContainerText>
          <TextInfo2>{client.cod}</TextInfo2>
          <TextInfo2>{client.razao}</TextInfo2>
          <TextInfo2>{client.rua}</TextInfo2>
          <TextInfo2>{client.cidade}</TextInfo2>
          <TextInfo2>{client.bairro}</TextInfo2>
          <TextInfo2>{client.uf}</TextInfo2>
          <TextInfo2>{client.cnpj}</TextInfo2>
          <TextInfo2>{client.email}</TextInfo2>
        </ContainerText>
      </Container>
    </Container2>
  );
}
DetailsClient.prototypes = {
  client: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
DetailsClient.defaultProps = {
  client: {
    commision_1: '8%',
    commision_2: '7%',
    commision_3: '6%',
  },
};
