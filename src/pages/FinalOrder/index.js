import React, {useState, useEffect} from 'react';
import {ActivityIndicator, ScrollView} from 'react-native';
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
  ContainerError,
} from './styles';

export default function FinalOrder() {
  const dispatch = useDispatch();
  const {loading, error} = useSelector(state => state.common);
  const [date, setDate] = useState();

  const {
    id,
    client,
    table,
    charge,
    conditionPagament,
    billingDate,
    status,
    pedidoItens,
    price,
    quantTotal,
  } = useSelector(state => state.finalizeorder);

  function handleOrder() {
    dispatch(ActionsFinalize.handleOrder());
  }
  useEffect(() => {});

  const data = billingDate;
  data.substring(0, 10);
  data.substring(0, 10);
  useEffect(() => {
    setDate(data.substring(0, 10));
    // totalTudo();
  }, [data]); // eslint-disable-line

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
          {error ? (
            <>
              <ContainerError>
                <Text>Erro no pedido pedido</Text>
              </ContainerError>
              <Button
                titleButton="CONFIRMAR"
                disabledButton={false}
                functionOnPress={() => {
                  handleOrder();
                }}
              />
            </>
          ) : (
            <>
              <ContainerHeader>
                <AreaIcon>
                  <Icon name="check-circle" />
                </AreaIcon>
                <Text>O número do seu pedido é: {id}</Text>
              </ContainerHeader>
              <ScrollView>
                <ContainerBody>
                  <ContainerClient>
                    <TextBold>Cliente:</TextBold>
                    <TextRegular>{client}</TextRegular>
                  </ContainerClient>
                  <ContainerOrder>
                    <TextBold>Status do pedido:</TextBold>
                    <TextRegular>{status}</TextRegular>
                    <TextBold>Tabela de preço:</TextBold>
                    <TextRegular>{table}</TextRegular>
                    <TextBold>Condição de pagamento:</TextBold>
                    <TextRegular>{conditionPagament}</TextRegular>
                    <TextBold>Tipo de cobrança:</TextBold>
                    <TextRegular>{charge}</TextRegular>
                    <TextBold>Data de entrega:</TextBold>
                    <TextRegular>{date}</TextRegular>
                    <TextBold>Valor total:</TextBold>
                    <TextRegular>R$ {price}</TextRegular>
                    <TextBold>Quantidade total:</TextBold>
                    <TextRegular>{quantTotal}</TextRegular>
                  </ContainerOrder>

                  <ContainerProducts>
                    <ListProducts
                      data={pedidoItens}
                      initialNumToRender={10}
                      renderItem={({item}) => {
                        return (
                          <Card>
                            <Line>
                              Linha:{' '}
                              <TextBoldSizes>{item.linha_cod}</TextBoldSizes>
                            </Line>
                            <Line>
                              Matriz:{' '}
                              <TextBoldSizes>{item.matriz_cod}</TextBoldSizes>
                            </Line>
                            <Line>
                              Quantidade total do item:{' '}
                              <TextBoldSizes>
                                {item.quantidade_item_total}
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
                                    <TextBoldSizes>
                                      {' '}
                                      {tamanhos.quantidade}
                                    </TextBoldSizes>
                                  </ContainerInfo>
                                  <Sizes />
                                </TotalSizes>
                              );
                            })
                            //
                            }
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
              </ScrollView>
            </>
          )}
        </Container>
      )}
    </Container>
  );
}
