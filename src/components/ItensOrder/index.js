import React from 'react';
import {View} from 'react-native';

import {
  Container,
  ContainerProducts,
  ListProducts,
  Card,
  Line,
  TextBoldSizes,
  TotalSizes,
  ContainerInfo,
  Sizes,
  Text,
} from './styles';

export default function ItensOrder({data}) {
  return (
    <Container>
      <Text>Produtos</Text>
      <ContainerProducts>
        <ListProducts
          data={data}
          initialNumToRender={10}
          renderItem={({item}) => {
            return (
              <Card>
                <Line>
                  Linha: <TextBoldSizes>{item.linha_cod}</TextBoldSizes>
                </Line>
                <Line>
                  Modelo: <TextBoldSizes>{item.matriz_cod}</TextBoldSizes>
                </Line>
                <Line>
                  Valor Unitario:{' '}
                  <TextBoldSizes>
                    R$ {item.valor_real.substring(0, 4)}
                  </TextBoldSizes>
                </Line>

                {item.pedidoItemTamanhos.map(tamanhos => {
                  return (
                    <TotalSizes>
                      <ContainerInfo>
                        <Line>Tamanho: </Line>
                        <TextBoldSizes>
                          {' '}
                          {tamanhos.tamanho.descricao}
                        </TextBoldSizes>
                      </ContainerInfo>
                      <ContainerInfo>
                        <Line>Quantidade: </Line>
                        <TextBoldSizes> {tamanhos.quantidade}</TextBoldSizes>
                      </ContainerInfo>
                      <Sizes />
                    </TotalSizes>
                  );
                })}
              </Card>
            );
          }}
        />
      </ContainerProducts>
    </Container>
  );
}
