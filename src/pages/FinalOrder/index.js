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
} from './styles';

export default function FinalOrder() {
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.common);
  const [date, setDate] = useState();
  const {
    id,
    client,
    table,
    charge,
    conditionPagament,
    billingDate,
    pedidoItens,
  } = useSelector(state => state.finalizeorder);
  function handleOrder() {
    dispatch(ActionsFinalize.handleOrder());
  }
  // function totalTudo() {
  //   const total = [...pedidoItens];

  //   total.pedidoItemTamanhos
  //     .map(element => element)
  //     .reduce((acumulador, element) => {
  //       const li = (acumulador += Number(element.quantidade));
  //       console.tron.log(li);
  //   });
  // }
  const data = billingDate;
  data.substring(0, 10);
  console.tron.log(data);
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
                <TextBold>Tabela de preço:</TextBold>
                <TextRegular>{table}</TextRegular>
                <TextBold>Condição de pagamento:</TextBold>
                <TextRegular>{conditionPagament}</TextRegular>
                <TextBold>Tipo de cobrança:</TextBold>
                <TextRegular>{charge}</TextRegular>
                <TextBold>Data faturamento:</TextBold>
                <TextRegular>{date}</TextRegular>
              </ContainerOrder>

              <ContainerProducts>
                <ListProducts
                  data={pedidoItens}
                  initialNumToRender={10}
                  renderItem={({item}) => {
                    return (
                      <Card>
                        <Line>
                          Linha: <TextBoldSizes>{item.linha_cod}</TextBoldSizes>
                        </Line>
                        <Line>
                          Matriz:{' '}
                          <TextBoldSizes>{item.matriz_cod}</TextBoldSizes>
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
                        })
                        //
                        }
                        {/* {item.pedidoItemTamanhos
                          .map(tamanhos => tamanhos)
                          .reduce((acumulador, tamanhos) => {
                            const tamanho = Number(tamanhos.quantidade);
                            const total = tamanho + acumulador;
                            console.tron.log(total);
                            console.tron.log(tamanhos.quantidade);
                            console.tron.log('acumulador');
                            console.tron.log(acumulador);
                            console.tron.log(
                              (acumulador += Number(tamanhos.quantidade))
                            );
                            return (
                              <TotalSizes>
                                <Line>{total}</Line>
                              </TotalSizes>
                            );
                          }, 0)} */}
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
        </Container>
      )}
    </Container>
  );
}
