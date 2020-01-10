import React from 'react';
// import {View} from 'react-native';
import {useSelector} from 'react-redux';
import Button from '../../components/Button';
import {
  Container,
  ContainerHeader,
  ContainerBody,
  ContainerOrder,
  Icon,
  Text,
  ContainerClient,
  TextBold,
  TextRegular,
  AreaIcon,
  ContainerProducts,
  ListProducts,
  Card,
  Line,
} from './styles';

export default function FinalOrder() {
  const {response} = useSelector(state => state.finalizeorder);

  return (
    <Container>
      <ContainerHeader>
        <AreaIcon>
          <Icon name="check-circle" />
        </AreaIcon>
        <Text>O número do seu pedido é: {response.id}</Text>
      </ContainerHeader>
      <ContainerBody>
        <ContainerClient>
          <TextBold>Cliente:</TextBold>
          <TextRegular />
        </ContainerClient>
        <ContainerOrder>
          <TextBold>Tabela de preço:</TextBold>
          <TextRegular />
          <TextBold>Condição de pagamento:</TextBold>
          <TextRegular />
          <TextBold>Tipo de cobrança:</TextBold>
          <TextRegular />
          <TextBold>Data faturamento:</TextBold>
          <TextRegular />
        </ContainerOrder>
        <ContainerProducts>
          <ListProducts
            data={response}
            initialNumToRender={10}
            renderItem={({item}) => {
              return (
                <Card>
                  <Line>{item.pedidoItens.linha_cod}</Line>
                  <Line>{item.pedidoItens.matriz_cod}</Line>
                  <Line>
                    {item.pedidoItens.pedidoItemTamanhos.tamanho.descricao}
                  </Line>
                  <Line>{item.pedidoItens.pedidoItemTamanhos.quantidade}</Line>
                </Card>
              );
            }}
          />
        </ContainerProducts>
        <Button
          titleButton="CONFIRMAR"
          disabledButton={false}
          functionOnPress={() => {}}
        />
      </ContainerBody>
    </Container>
  );
}
