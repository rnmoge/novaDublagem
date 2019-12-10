import React from 'react';
import PropTypes from 'prop-types';
import {FlatList, Modal, Text, ActivityIndicator} from 'react-native';
import {
  Input,
  Container,
  Icon,
  AreaIcon,
  ContainerHeader,
  TextButton,
} from './styles';

export default function ModalCatalog({
  nameIcon,
  nameIconTwo,
  placeholder,
  modalVisible,
  functionOnPressLeft,
  functionOnPressRight,
  functionOnChangeText,
  data,
  loading,
  functionOnPressText,
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
            // ListEmptyComponent={
            //   <Text>
            //     Digite algo para pesquisar a descrição do produto desejado
            //   </Text>
            // }
            initialNumToRender={10}
            style={{flex: 1}}
            data={data}
            renderItem={({item}) => {
              return (
                <TextButton
                  onPress={() =>
                    functionOnPressText(item.linha, item.descricao)
                  }>
                  {item.descricao}
                </TextButton>
              );
            }}
          />
        )}
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
  loading: PropTypes.bool,
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
  loading: false,
};