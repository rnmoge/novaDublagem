import React, {useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Modal from '../../components/Modalteste2';
import {Container} from './styles';

export default function testeModal() {
  const [modalState, setModalState] = useState(false);
  return (
    <Container>
      <TouchableOpacity onPress={() => setModalState(!modalState)}>
        <Text>Modal</Text>
      </TouchableOpacity>
      <Modal
        placeholder="Digite a tabela"
        modalVisible={modalState}
        nameIcon="times"
        nameIconTwo="search"
        functionOnPressLeft={() => setModalState(!modalState)}
      />
    </Container>
  );
}
