import React from 'react';
import PropTypes from 'prop-types';
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
  AreaIcon,
  Icon,
  ContainerCard,
  ContainerIcon,
  ContainerAdd,
  Add,
} from './styles';

export default function ItensOrder({
  data,
  functionOnPressIcon,
  iconExist,
  functionOnPressIconAdd,
}) {
  return (
    <Container>
      <Text>Produtos</Text>
      <ContainerProducts>
        <ListProducts
          data={data}
          initialNumToRender={10}
          renderItem={({item, index}) => {
            return (
              <Card>
                <ContainerCard>
                  <Line>
                    Linha:{' '}
                    <TextBoldSizes>
                      {item.linhamatriz.linha.descricao}
                    </TextBoldSizes>
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
                      </TotalSizes>
                    );
                  })}
                </ContainerCard>
                {iconExist ? (
                  <ContainerIcon>
                    <AreaIcon
                      onPress={() => {
                        functionOnPressIcon(index);
                      }}>
                      <Icon name="pen" />
                    </AreaIcon>
                    <AreaIcon>
                      <Icon name="times" />
                    </AreaIcon>
                  </ContainerIcon>
                ) : null}
              </Card>
            );
          }}
        />
        <ContainerAdd>
          <Add>
            <AreaIcon
              onPress={() => {
                functionOnPressIconAdd();
              }}>
              <Icon name="plus" />
            </AreaIcon>
            <Text>Adicionar item</Text>
          </Add>
        </ContainerAdd>
      </ContainerProducts>
    </Container>
  );
}
ItensOrder.propTypes = {
  functionOnPressIcon: PropTypes.func,
  functionOnPressIconAdd: PropTypes.func,
};
ItensOrder.defaultProps = {
  functionOnPressIcon: () => {},
  functionOnPressIconAdd: () => {},
};
