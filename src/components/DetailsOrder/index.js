import React, {useState, useEffect} from 'react';
import {TextRegular, TextBold, ContainerText} from '../../styles/fonts';
import {
  Container,
  ContainerClient,
  ContainerInfo,
  ContainerBody,
  ContainerEdit,
} from './styles';
import {openModal} from '../../store/modules/queryorder/actions';

export default function DetailsOrder({data, openModal}) {
  const [datePreview, setDatePreview] = useState(' - ');
  // useEffect(() => {
  //   if (data.data_faturamento === null) {
  //     setDatePreview(' - ');
  //   } else {
  //     setDatePreview(data_faturamento);
  //   }
  // }, [data.data_faturamento]);
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
              <TextBold> {data.situacao}</TextBold>
            </TextRegular>
          </ContainerText>
          <ContainerText>
            <TextRegular>
              Data de entrega:
              <TextBold>
                {' '}
                {data.pedidoItens[0].data_entrega.substring(0, 10)}
              </TextBold>
            </TextRegular>
          </ContainerText>
          <ContainerText>
            <TextRegular>
              Data de faturamento:
              <TextBold>{datePreview}</TextBold>
            </TextRegular>
          </ContainerText>
          <ContainerText>
            <TextRegular>
              Valor Total:
              <TextBold> R$ {data.valor_total_pedido}</TextBold>
            </TextRegular>
          </ContainerText>
          <ContainerText>
            <TextRegular>
              Quantidade Total:
              <TextBold> {data.quantidade_pares_total}</TextBold>
            </TextRegular>
          </ContainerText>
        </ContainerInfo>
      </ContainerBody>
    </Container>
  );
}
