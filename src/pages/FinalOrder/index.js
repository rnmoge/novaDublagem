import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Button from '../../components/Button';
import * as ActionsFinalize from '../../store/modules/finalizeorder/actions';
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
  TotalSizes,
  Sizes,
  ContainerInfo,
  TextBoldSizes,
} from './styles';

export default function FinalOrder() {
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.common);
  const {
    id,
    client,
    table,
    charge,
    conditionPagament,
    billingDate,
    pedidoItens,
  } = useSelector(state => state.finalizeorder);
  console.tron.log('pedidoItens');
  console.tron.log(pedidoItens);
  function handleOrder() {
    dispatch(ActionsFinalize.handleOrder());
  }
  return (
    <Container>
      {loading ? (
        <ActivityIndicator
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          size="large"
          color="#fff000"
        />
      ) : (
        <Container>
          {}
          <ContainerHeader>
            <AreaIcon>
              <Icon name="check-circle" />
            </AreaIcon>
            <Text>O número do seu pedido é: {id}</Text>
          </ContainerHeader>
          <ContainerBody>
            <ContainerClient>
              <TextBold>Cliente:</TextBold>
              <TextRegular>{client}</TextRegular>
            </ContainerClient>
            <ContainerOrder>
              <TextBold>Tabela de preço:</TextBold>
              <TextRegular>{table}</TextRegular>
              <TextBold>Condição de pagamento:</TextBold>
              <TextRegular>{charge}</TextRegular>
              <TextBold>Tipo de cobrança:</TextBold>
              <TextRegular>{conditionPagament}</TextRegular>
              <TextBold>Data faturamento:</TextBold>
              <TextRegular>{billingDate}</TextRegular>
            </ContainerOrder>
            <ContainerProducts>
              <ListProducts
                data={pedidoItens}
                initialNumToRender={10}
                renderItem={({item}) => {
                  console.tron.log('item');
                  console.tron.log(item);
                  return (
                    <Card>
                      <Line>
                        Linha: <TextBoldSizes>{item.linha_cod}</TextBoldSizes>
                      </Line>
                      <Line>
                        Matriz: <TextBoldSizes>{item.matriz_cod}</TextBoldSizes>
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
                              <TextBoldSizes>
                                {' '}
                                {tamanhos.quantidade} uni.
                              </TextBoldSizes>
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
            <Button
              titleButton="CONFIRMAR"
              disabledButton={false}
              functionOnPress={() => {
                handleOrder();
              }}
            />
          </ContainerBody>
        </Container>
      )}
    </Container>
  );
}
