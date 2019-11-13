import React from 'react';
import PropTypes from 'prop-types';
import {FlatList, Modal, ScrollView} from 'react-native';
import {
  Input,
  Container,
  Icon,
  AreaIcon,
  ContainerHeader,
  TextButton,
} from './styles';

export default function ModalTeste2({
  nameIcon,
  nameIconTwo,
  placeholder,
  modalVisible,
  functionOnPressLeft,
  functionOnPressRight,
  functionOnPressText,
}) {
  return (
    <Container>
      <Modal visible={modalVisible} animationType="slide">
        <ContainerHeader>
          <AreaIcon onPress={functionOnPressLeft}>
            <Icon name={nameIcon} />
          </AreaIcon>
          <Input placeholder={placeholder} />
          <AreaIcon onPress={functionOnPressRight}>
            <Icon name={nameIconTwo} />
          </AreaIcon>
        </ContainerHeader>
        <FlatList
          style={{flex: 1}}
          data={[
            {id: 1, name: 'tabela1'},
            {id: 2, name: 'tabela1'},
            {id: 3, name: 'tabela1'},
            {id: 4, name: 'tabela1'},
            {id: 5, name: 'tabela1'},
            {id: 6, name: 'tabela1'},
            {id: 7, name: 'tabela1'},
            {id: 8, name: 'tabela1'},
            {id: 9, name: 'tabela1'},
            {id: 10, name: 'tabela1'},
            {id: 11, name: 'tabela1'},
            {id: 12, name: 'tabela1'},
            {id: 13, name: 'tabela1'},
            {id: 14, name: 'tabela1'},
            {id: 15, name: 'tabela1'},
            {id: 16, name: 'tabela1'},
            {id: 17, name: 'tabela1'},
            {id: 18, name: 'tabela1'},
            {id: 19, name: 'tabela1'},
          ]}
          renderItem={item => {
            return (
              <TextButton onPress={functionOnPressText}>Tabelas</TextButton>
            );
          }}
        />
      </Modal>
    </Container>
  );
}
Modal.propTypes = {
  placeholder: PropTypes.string,
  nameIcon: PropTypes.string,
  nameIconTwo: PropTypes.string,
  modalVisible: PropTypes.bool,
  functionOnPressLeft: PropTypes.func,
  functionOnPressRight: PropTypes.func,
  functionOnPressText: PropTypes.func,
};
Modal.defaultProps = {
  nameIcon: 'times',
  nameIconTwo: 'search',
  placeholder: 'TesteModal',
  modalVisible: false,
  functionOnPressLeft: () => {},
  functionOnPressRight: () => {},
  functionOnPressText: () => {},
};
