import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding-top: ${Platform.OS === 'ios' ? 0 : 0};
  background: #3f51b5;
  padding: 15px;
`;
export const Text = styled.Text`
  justify-content: center;
  text-align: center;
  padding: 30px;
  font-size: 16px;
  color: #eeeeee;
`;
export const ContainerScroll = styled.ScrollView``;
export const TextButton = styled.Text`
  font-weight: bold;
  color: #eeeeee;
  margin-left: 328;
  padding: 2px;
`;
