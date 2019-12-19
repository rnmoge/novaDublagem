import React from 'react';
import PropTypes from 'prop-types';
import {Modal, ActivityIndicator} from 'react-native';
// import Header from '../Header';
import {useSelector} from 'react-redux';
import CardTablePrice from '../CardTablePrice';
import CardDetails from '../CardDetails';
import {
  Container,
  Icon,
  AreaIcon,
  ContainerHeader,
  ContainerBody,
} from './styles';

export default function ModalPacking({
  nameIcon,
  nameIconTwo,
  placeholder,
  modalVisible,
  functionOnPressLeft,
  functionOnPressRight,
  functionOnChangeText,
  descricao,
  loading,
  functionOnPressText,
}) {
  const {line, comission, price, details, sizes} = useSelector(
    state => state.neworder
  );

  return (
    <Container>
      <Modal visible={modalVisible} animationType="slide">
        <ContainerHeader>
          <AreaIcon onPress={functionOnPressLeft}>
            <Icon name={nameIcon} />
          </AreaIcon>
        </ContainerHeader>
        {loading ? (
          <ActivityIndicator
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            size="large"
            color="#fff000"
          />
        ) : (
          <ContainerBody>
            <CardTablePrice commision={comission} data={sizes} />
          </ContainerBody>
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
  descricao: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
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
