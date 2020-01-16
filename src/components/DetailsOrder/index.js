import React from 'react';
import {TextRegular, TextBold, ContainerText} from '../../styles/fonts';
import {
  Container,
  ContainerClient,
  ContainerInfo,
  ContainerBody,
} from './styles';

export default function DetailsOrder({data}) {
  return (
    <Container>
      <ContainerBody>
        <ContainerClient>
          <TextRegular>
            Cliente: <TextBold>{data.cliente.nome_razao}</TextBold>
          </TextRegular>
        </ContainerClient>
        <ContainerInfo>
          <ContainerText>
            <TextRegular>
              Cod Pedido:
              <TextBold> {data.pedido_cod}</TextBold>
            </TextRegular>
          </ContainerText>
          <ContainerText>
            <TextRegular>
              Emissão:
              <TextBold> {data.emissao.substring(0, 10)}</TextBold>
            </TextRegular>
          </ContainerText>
          <ContainerText>
            <TextRegular>
              Situação:
              <TextBold> Em avaliação</TextBold>
            </TextRegular>
          </ContainerText>
          <ContainerText>
            <TextRegular>
              Data Prevista:
              <TextBold> 18-02-2019</TextBold>
            </TextRegular>
          </ContainerText>
          <ContainerText>
            <TextRegular>
              Data Faturamento:
              <TextBold>
                {' '}
                {data.pedidoItens[0].data_faturamento.substring(0, 10)}
              </TextBold>
            </TextRegular>
          </ContainerText>
          <ContainerText>
            <TextRegular>
              Valor Total:
              <TextBold> R$ 30,00</TextBold>
            </TextRegular>
          </ContainerText>
          <ContainerText>
            <TextRegular>
              Quantidade Total:
              <TextBold> 240</TextBold>
            </TextRegular>
          </ContainerText>
        </ContainerInfo>
      </ContainerBody>
    </Container>
  );
}
