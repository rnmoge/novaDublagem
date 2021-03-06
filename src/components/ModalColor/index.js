import React from 'react';
import PropTypes from 'prop-types';
import {FlatList, Modal, ActivityIndicator} from 'react-native';
import {
  Input,
  Container,
  Icon,
  AreaIcon,
  ContainerHeader,
  TextButton,
} from './styles';

export default function ModalColor({
  nameIcon,
  nameIconTwo,
  placeholder,
  modalVisible,
  functionOnPressLeft,
  functionOnPressRight,
  functionOnChangeText,
  functionOnPressText,
  data,
  loading,
}) {
  return (
    <Container>
      <Modal visible={modalVisible} animationType="slide">
        <ContainerHeader>
          <AreaIcon onPress={functionOnPressLeft}>
            <Icon name={nameIcon} />
          </AreaIcon>
          <Input
            placeholder={placeholder}
            onChangeText={text => functionOnChangeText(text)}
          />
          <AreaIcon onPress={functionOnPressRight}>
            <Icon name={nameIconTwo} />
          </AreaIcon>
        </ContainerHeader>

        <FlatList
          initialNumToRender={10}
          style={{flex: 1}}
          data={data}
          renderItem={({item}) => {
            return (
              <TextButton
                onPress={() => functionOnPressText(item.id, item.descricao)}>
                {item.descricao}
              </TextButton>
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
  functionOnChangeText: PropTypes.func,
  functionOnPressText: PropTypes.func,
};
Modal.defaultProps = {
  nameIcon: 'times',
  nameIconTwo: 'search',
  placeholder: 'TesteModal',
  modalVisible: false,
  functionOnPressLeft: () => {},
  functionOnPressRight: () => {},
  functionOnChangeText: () => {},
  functionOnPressText: () => {},
};
