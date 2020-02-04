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
  Model,
  ContainerLine,
} from './styles';

export default function ItensOrder({
  data,
  functionOnPressIcon,
  iconExist,
  functionOnPressIconAdd,
  functionOnPressRemove,
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
                  <ContainerLine>
                    <Line>
                      Linha:{' '}
                      <TextBoldSizes>
                        {item.linhamatriz.linha.descricao}
                      </TextBoldSizes>
                    </Line>
                    <Model>
                      Modelo: <TextBoldSizes>{item.matriz_cod}</TextBoldSizes>
                    </Model>
                  </ContainerLine>
                  <Line>
                    Cor: <TextBoldSizes>{item.cor.descricao}</TextBoldSizes>
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
                    <AreaIcon
                      onPress={() => {
                        functionOnPressRemove(index);
                      }}>
                      <Icon name="times" />
                    </AreaIcon>
                  </ContainerIcon>
                ) : null}
              </Card>
            );
          }}
        />
        {/* {iconExist ? (
          <ContainerAdd>
            <Add
              onPress={() => {
                functionOnPressIconAdd();
              }}>
              <AreaIcon>
                <Icon name="plus" />
              </AreaIcon>
              <Text>Adicionar item</Text>
            </Add>
          </ContainerAdd>
        ) : null} */}
      </ContainerProducts>
    </Container>
  );
}
ItensOrder.propTypes = {
  functionOnPressIcon: PropTypes.func,
  functionOnPressIconAdd: PropTypes.func,
  functionOnPressRemove: PropTypes.func,
};
ItensOrder.defaultProps = {
  functionOnPressIcon: () => {},
  functionOnPressIconAdd: () => {},
  functionOnPressRemove: () => {},
};
