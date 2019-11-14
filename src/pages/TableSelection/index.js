import React, {useState} from 'react';
// import {View} from 'react-native';
import {StatusBar} from 'react-native';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Container, Text, ContainerScroll} from './styles';
import {navigate} from '../../services/navigation';
import Modal from '../../components/Modalteste2';

export default function TableSelection() {
  const [modalState, setModalState] = useState(false);
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
          placeholder="Digite a tabela"
          modalVisible={modalState}
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
