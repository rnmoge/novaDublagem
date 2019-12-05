import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {TouchableOpacity, Text} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import {
  Container,
  ContainerAvatar,
  TextAvatar,
  ContainerUser,
  ContainerName,
  TextName,
  ContainerEmail,
  TextEmail,
} from './styles';
import logo from '../../../assets/image/logo-azul.png';
import * as MenuActions from '../../store/modules/menu/actions';

export default function HeaderDrawer() {
  const {username, permission} = useSelector(state => state.menu);
  const dispatch = useDispatch();
  function menuRender() {}

  return (
    <Container>
      <ContainerAvatar>
        <TextAvatar source={logo} />
      </ContainerAvatar>
      <ContainerUser>
        <ContainerName>
          <TextName>{username}</TextName>
        </ContainerName>
        <ContainerEmail>
          <TextEmail>{permission}</TextEmail>
        </ContainerEmail>
      </ContainerUser>
    </Container>
  );
}
