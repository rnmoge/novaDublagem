import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Logo from '../../components/Logo';
// import Input from '../../components/Input';
import Button from '../../components/Button';
import {Container, Text, ContainerScroll, AreaButton} from './styles';
// import {navigate} from '../../services/navigation';
import Modal from '../../components/Modalteste2';
import * as ActionsTable from '../../store/modules/table/actions';

export default function TableSelection() {
  const dispatch = useDispatch();
  const [modalState, setModalState] = useState(false);
  const [inputState, setInputState] = useState('');
  const {table} = useSelector(state => state.table);
  const [tableStateAux, settableStateAux] = useState(table);

  useEffect(() => {
    const orderArray = table
      .filter(element => {
        return (
          element.tabelapreco
            .toLowerCase()
            .indexOf(inputState.toLowerCase()) !== -1
        );
      })
      .map(element => {
        return element;
      });
    settableStateAux(orderArray);
  }, [dispatch, inputState, table]); // eslint-disable-line

  useEffect(() => {
    dispatch(ActionsTable.requestTablePrice());
  }, [dispatch]);
  function selectTablePrice(id) {
    dispatch(ActionsTable.selectTablePrice(id, table));
  }
  return (
    <ContainerScroll
      contentContainerStyle={{
        flexGrow: 1,
        flexDirection: 'column',
      }}>
      <Container>
        <StatusBar barStyle="ligth-content" backgroundColor="#3f51b5" />
        <Logo />
        <Text>
          Selecione a tabela que você estará utilizando, clique em Selecionar
          tabela para pesquisar suas tabelas
        </Text>
        <AreaButton onPress={() => setModalState(!modalState)}>
          {/* <Input
            placeholder="Tabelas"
            keyboardTypeInput="default"
            areaIcon
            icoName="search"
            disabledButtonIcon={false}
            valueInputText=""
            functionOnPressIcon={() => setModalState(!modalState)}
          /> */}
        </AreaButton>
        <Button
          titleButton="SELECIONAR TABELA"
          functionOnPress={() => setModalState(!modalState)}
          disabledButton={false}
        />
      </Container>
      <Container>
        <Modal
          valueInputText={inputState}
          functionOnChangeText={text => setInputState(text)}
          placeholder="Digite a tabela"
          modalVisible={modalState}
          data={tableStateAux}
          nameIcon="times"
          nameIconTwo="search"
          functionOnPressLeft={() => setModalState(!modalState)}
          functionOnPressText={id => {
            selectTablePrice(id);
          }}
        />
      </Container>
    </ContainerScroll>
  );
}
