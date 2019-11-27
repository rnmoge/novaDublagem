import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
`;
export const ContainerAvatar = styled.View`
  width: 90px;
  height: 90px;
  border-radius: 45px;
  justify-content: center;
  align-items: center;
  background: #fdca0b;
  margin-bottom: 10px;
`;
export const TextAvatar = styled.Text`
  font-size: 20px;
  font-weight: bold;
  justify-content: center;
  text-align: center;
`;
export const ContainerUser = styled.FlatList`
  height: 150;
  background: #f65;
`;
export const ContainerName = styled.View`
  justify-content: center;
  align-items: center;
`;
export const TextName = styled.Text`
  font-size: 16;
  margin-top: 5;
  color: #fff;
  text-align: left;
  font-weight: bold;
`;
export const ContainerEmail = styled.View`
  justify-content: center;
  align-items: center;
`;
export const TextEmail = styled.Text`
  font-size: 14;
  margin-top: 5;
  color: #fff;
  text-align: left;
`;
