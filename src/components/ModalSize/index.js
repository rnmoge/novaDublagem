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

export default function ModalSize({
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
        {loading ? (
          <ActivityIndicator
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            size="large"
            color="#fff000"
          />
        ) : (
          <FlatList
            initialNumToRender={10}
            style={{flex: 1}}
            data={data}
            renderItem={({item}) => {
              return (
                <TextButton
                  onPress={() =>
                    functionOnPressText(
                      item.id,
                      item.grupotamanho_id,
                      item.tamanho.descricao,
                      item.preco1,
                      item.preco2,
                      item.preco3
                    )
                  }>
                  {item.tamanho.descricao}
                </TextButton>
              );
            }}
          />
        )}
      </Modal>
    </Container>
  );
}
ModalSize.propTypes = {
  placeholder: PropTypes.string,
  nameIcon: PropTypes.string,
  nameIconTwo: PropTypes.string,
  modalVisible: PropTypes.bool,
  functionOnPressLeft: PropTypes.func,
  functionOnPressRight: PropTypes.func,
  functionOnChangeText: PropTypes.func,
  functionOnPressText: PropTypes.func,
  loading: PropTypes.bool,
};
ModalSize.defaultProps = {
  nameIcon: 'times',
  nameIconTwo: 'search',
  placeholder: 'TesteModal',
  modalVisible: false,
  functionOnPressLeft: () => {},
  functionOnPressRight: () => {},
  functionOnChangeText: () => {},
  functionOnPressText: () => {},
  loading: false,
};
