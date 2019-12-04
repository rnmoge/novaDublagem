import styled from 'styled-components/native';

export const Container = styled.View`
  height: 60px;
`;
export const ButtonArea = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  margin-top: 10px;
  border-color: #3f51b5;
  border-width: 2px;
`;

export const Text = styled.Text`
  color: #3f51b5;
  font-size: 16px;
  font-weight: bold;
  padding-right: 5px;
  padding-left: 5px;
`;
