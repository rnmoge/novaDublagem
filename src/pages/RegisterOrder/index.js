import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  Container,
  ContainerBody,
  Container2,
  ContainerInput,
  ContainerText,
  TextInfo,
  // ContainerTextIcon,
  // TextInfoIcon,
  // ContainerButton,
  ContainerRadius,
  ContainerList,
  // Icon,
} from './styles';
import Header from '../../components/Header';
import InputType from '../../components/InputType';
import CardClient from '../../components/CardClient';
// import Button from '../../components/Button';
import Radius from '../../components/Radius';
import * as ActionsOrder from '../../store/modules/order/actions';

export default function RegisterOrder() {
  const [selectStateOne, setSelectStateOne] = useState(true);
  const [selectStateTwo, setSelectStateTwo] = useState(false);
  const [selectStateThree, setSelectStateThree] = useState(false);
  const {clients} = useSelector(state => state.order);
  const [inputReasonState, setInputReasonState] = useState('');
  const [inputCnpjState, setInputCnpjState] = useState('');
  // const [dataState, setDataState] = useState([
  //   {
  //     id: 1,
  //     cod: '11600',
  //     razao: 'MANA MODA PRAIA ACESSORIOS E SERVICOS LT',
  //     rua: 'Rua Pio Avelino',
  //     email: 'manaModa@gmail.com',
  //     cidade: 'SALVADOR',
  //     bairro: 'PITUBA',
  //     uf: 'BA',
  //     cnpj: '23.397.131/0001-50',
  //   },
  //   {
  //     id: 2,
  //     cod: '11601',
  //     razao: 'INDUSTRIA CALCADOS FPX EIRELI',
  //     rua: 'AGENOR OLIMPIO DE CARVALHO 335',
  //     email: 'fpxeireli@gmail.com',
  //     cidade: 'NOVA SERRANA',
  //     bairro: 'PARQUE DONA GUIMERCINDA',
  //     uf: 'MG',
  //     cnpj: '17.921.111/0001-33',
  //   },
  //   {
  //     id: 3,
  //     cod: '11602',
  //     razao: 'BURIGOTTO S/A IND E COM',
  //     rua: 'RUA MARTINO DRAGONE 280 ',
  //     email: 'burigotto@gmail.com',
  //     cidade: 'LIMEIRA',
  //     bairro: 'JARDIM SANTA BARBAR',
  //     uf: 'SP',
  //     cnpj: '51.460.277/0001-38',
  //   },
  //   {
  //     id: 4,
  //     cod: '11603',
  //     razao: 'MAIA E SCHOTT COMERCIO DE TECIDOS E AV. LTDA',
  //     rua: 'ESTRADA PARA BOA ESPERANÇA 1009',
  //     email: 'maiaschott@gmail.com',
  //     cidade: 'NOVA FRIBURGO',
  //     bairro: 'LUMIAR',
  //     uf: 'RJ',
  //     cnpj: '13.316.715/0001-08',
  //   },
  //   {
  //     id: 5,
  //     cod: '11604',
  //     razao: 'D M LOBO BOAZ',
  //     rua: 'AVENIDA PRINCIPAL 1 LOJA  01',
  //     email: 'loboboaz@gmail.com',
  //     cidade: 'SÃO LUÍS  ',
  //     bairro: 'SANTA EFIGÊNIA',
  //     uf: 'MA',
  //     cnpj: '29.832.955/0001-97',
  //   },
  //   {
  //     id: 6,
  //     cod: '11605',
  //     razao: 'CYELLE BEACH WEAR CONFECAO EIRELI ME',
  //     rua: 'Rua Pio Avelino',
  //     email: 'cyellebeach@gmail.com',
  //     cidade: 'GOIANA',
  //     bairro: 'SETOR RECANTO DAS MINAS GERAIS',
  //     uf: 'GO',
  //     cnpj: '12.842.840/0001-80',
  //   },
  // ]);
  const [dataStateAux, setDataStateAux] = useState([]);
  // const data = dataState;
  const dispatch = useDispatch();
  function handleDeatilsClient(id) {
    dispatch(ActionsOrder.handleDetailsClient(id, clients));
  }
  function backOrder() {
    dispatch(ActionsOrder.backOrder());
  }
  useEffect(() => {
    dispatch(ActionsOrder.clients());
  }, [dispatch]);
  useEffect(() => {
    if (inputReasonState === '' && inputCnpjState === '') {
      setDataStateAux([]);
    } else {
      const orderArray = clients
        .filter(element => {
          return element.cnpj.indexOf(inputCnpjState) !== -1;
        })
        .filter(element => {
          return (
            element.nome_razao
              .toLowerCase()
              .indexOf(inputReasonState.toLowerCase()) !== -1
          );
        })
        .map(element => {
          return element;
        });
      setDataStateAux(orderArray);
    }
  }, [inputReasonState, inputCnpjState]);// eslint-disable-line
  function trocaRadius1() {
    setSelectStateOne(!selectStateOne);
    setSelectStateTwo(false);
    setSelectStateThree(false);
  }
  function trocaRadius2() {
    setSelectStateTwo(!selectStateTwo);
    setSelectStateOne(false);
    setSelectStateThree(false);
  }
  function trocaRadius3() {
    setSelectStateThree(!selectStateThree);
    setSelectStateTwo(false);
    setSelectStateOne(false);
  }
  return (
    <Container>
      <Header
        title="Seleção de cliente"
        icoName="arrow-left"
        icoNameTwo="shopping-cart"
        functionOnpressIconLeft={() => backOrder()}
      />
      <ContainerBody>
        <ScrollView>
          <Container2>
            <ContainerInput>
              <InputType
                placeholder="Digite a Razão Social"
                valueInputText={inputReasonState}
                functionOnChangeText={text => {
                  setInputReasonState(text);
                }}
                icoName="search"
                areaIcon
              />
              <InputType
                placeholder="Digite o CNPJ"
                valueInputText={inputCnpjState}
                functionOnChangeText={text => {
                  setInputCnpjState(text);
                }}
                icoName="search"
                areaIcon
              />
            </ContainerInput>

            <ContainerText>
              <TextInfo>Listar clientes:</TextInfo>
            </ContainerText>
            <ContainerRadius>
              <Radius
                iconAparence={selectStateOne}
                nameIcon={selectStateOne ? 'dot-circle' : 'circle'}
                functionOnPress={() => {
                  trocaRadius1();
                }}
                text="Ativos"
              />
              <Radius
                iconAparence={selectStateTwo}
                nameIcon={selectStateTwo ? 'dot-circle' : 'circle'}
                functionOnPress={() => {
                  trocaRadius2();
                }}
                text="Inativos"
              />
              <Radius
                text="Todos"
                nameIcon={selectStateThree ? 'dot-circle' : 'circle'}
                functionOnPress={() => {
                  trocaRadius3();
                }}
              />
            </ContainerRadius>
          </Container2>
          <ContainerList>
            <CardClient
              data={dataStateAux}
              functionOnpressClient={id => {
                handleDeatilsClient(id);
              }}
            />
          </ContainerList>
        </ScrollView>
      </ContainerBody>
    </Container>
  );
}
