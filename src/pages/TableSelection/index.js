import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// import {useSelector} from 'react-redux';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Container, Text, ContainerScroll} from './styles';
import {navigate} from '../../services/navigation';
import Modal from '../../components/Modalteste2';
import * as ActionsTable from '../../store/modules/table/actions';

export default function TableSelection() {
  const {data} = useSelector(state => state.table);
  const dispatch = useDispatch();
  // const {loading} = useSelector(state => state.common);
  const [modalState, setModalState] = useState(false);
  const [inputState, setInputState] = useState('');
  useEffect(() => {
    // if (inputState === '') {
    //   setDataStateAux(dataState);
    // } else {
    //   const orderArray = dataState
    //     .filter(element => {
    //       return element.name.indexOf(inputState) !== -1;
    //     })
    //     .map(element => {
    //       return element;
    //     });
    //   setDataStateAux(orderArray);
    // }
    dispatch(ActionsTable.requestTablePrice());
  }, [dispatch]);

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
          Selecione a tabela que você estará utilizando, clique na lupa para
          pesquisar
        </Text>
        <Input
          placeholder="Tabelas"
          keyboardTypeInput="default"
          areaIcon
          icoName="search"
          disabledButtonIcon={false}
          valueInputText=""
          functionOnPressIcon={() => setModalState(!modalState)}
        />
        <Button titleButton="AVANÇAR" />
      </Container>
      <Container>
        <Modal
          valueInputText={inputState}
          functionOnChangeText={text => setInputState(text)}
          placeholder="Digite a tabela"
          modalVisible={modalState}
          data={data}
          nameIcon="times"
          nameIconTwo="search"
          functionOnPressLeft={() => setModalState(!modalState)}
          functionOnPressText={() => {
            navigate('Home');
          }}
        />
      </Container>
    </ContainerScroll>
  );
}
