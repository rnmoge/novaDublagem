import React from 'react';
import PropTypes from 'prop-types';
import {FlatList, Text} from 'react-native';
import {Input, Container, Icon, AreaIcon, ContainerHeader} from './styles';

export default function Modal({
  nameIcon,
  nameIconTwo,
  placeholder,
  modalVisible,
  functionOnPressLeft,
  functionOnPressRight,
}) {
  return (
    <Container visible={modalVisible} animationType="slide">
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
        style={{flex: 1, backgroundColor: '#f65'}}
        data={[
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
          {id: 1, name: 'tabela1'},
        ]}
        renderItem={item => {
          return <Text>TablePrice</Text>;
        }}
      />
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
};
Modal.defaultProps = {
  nameIcon: 'times',
  nameIconTwo: 'search',
  placeholder: 'TesteModal',
  modalVisible: false,
  functionOnPressLeft: () => {},
  functionOnPressRight: () => {},
};
