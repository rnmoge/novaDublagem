import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding-top: ${Platform.OS === 'ios' ? 0 : 30};
`;
export const Text = styled.Text``;
export const Button = styled.Button``;
