import styled from 'styled-components/native';

export const Container = styled.View``;

export const List = styled.FlatList``;

export const FlatList = styled.FlatList`
  flex-direction: column;
`;
export const Card = styled.View`
  height: 120px;
  background: #fff;
  justify-content: center;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 8px;
`;
export const TextRegular = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 16px;
`;
export const TextBold = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-weight: bold;
  font-size: 16px;
`;
export const textInfo = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 16px;
`;
export const TextInitial = styled.Text`
  color: #212121;
  font-size: 16px;
  margin-top: 200px;
  font-weight: bold;
  text-align: center;
`;
export const ContainerButton = styled.TouchableOpacity``;
