import React from 'react';
import PropTypes from 'prop-types';
import {FlatList, Modal, Text, ActivityIndicator} from 'react-native';
import Button from '../Button';
import Logo from '../Logo';
import {
  Input,
  Container,
  Icon,
  AreaIcon,
  ContainerHeader,
  TextButton,
  ContainerInitial,
  TextInitial,
  ContainerHeader2,
  AreaIcon2,
  ContainerBody,
  Icon2,
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
  modalExist,
  functionOnPressButton,
}) {
  return (
    <Container>
      <Modal visible={modalVisible} animationType="slide">
        {modalExist ? (
          <>
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
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                size="large"
                color="#fff000"
              />
            ) : (
              <FlatList
                // ListEmptyComponent={
                //   <ContainerInitial>
                //     <TextInitial>
                //       Digite algo para pesquisar a descrição do produto desejado
                //     </TextInitial>
                //   </ContainerInitial>
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
          </>
        ) : (
          <>
            <ContainerHeader2>
              <AreaIcon2 onPress={functionOnPressLeft}>
                <Icon2 name={nameIcon} />
              </AreaIcon2>
            </ContainerHeader2>
            <ContainerBody>
              <TextInitial>
                Selecione a tabela que você estará utilizando, clique em
                Selecionar tabela para pesquisar suas tabelas
              </TextInitial>
              <Button
                titleButton="SELECIONE A TABELA"
                disabledButton={false}
                functionOnPress={() => {
                  functionOnPressButton();
                }}
              />
            </ContainerBody>
          </>
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
  functionOnPressButton: PropTypes.func,
  loading: PropTypes.bool,
  modalExist: PropTypes.bool,
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
  functionOnPressButton: () => {},
  loading: false,
  modalExist: true,
};
