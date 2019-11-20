import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding-top: ${Platform.OS === 'ios' ? 0 : 0};
  background: #3f51b5;
  padding: 15px;
`;
export const Text = styled.Text`
  flex-direction: row;
  justify-content: center;
  text-align: center;
  margin-top: 10;
  font-size: 16px;
  color: #eeee;
  background: #3f51b5;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: #eeeeee;
`;
export const ContainerScroll = styled.ScrollView``;

export const Loading = styled.View`
  flex: 1;
  background: #3f51b5;
`;
