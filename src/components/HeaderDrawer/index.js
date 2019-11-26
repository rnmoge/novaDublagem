import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {AsyncStorage} from 'react-native';
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
import * as ActionsLogin from '../../store/modules/login/actions';
// import store from '../../store/modules/login/reducers';

export default function HeaderDrawer() {
  console.tron.log('data');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ActionsLogin.menuSucess());
  }, [dispatch]);
  return (
    <Container>
      <ContainerAvatar>
        <TextAvatar>U</TextAvatar>
      </ContainerAvatar>
      <ContainerUser
        data={['data']}
        renderItem={({item}) => {
          return (
            <>
              <ContainerName>
                <TextName>{item.username}</TextName>
              </ContainerName>
              <ContainerEmail>
                <TextEmail>user@email.com</TextEmail>
              </ContainerEmail>
            </>
          );
        }}
      />
    </Container>
  );
}
