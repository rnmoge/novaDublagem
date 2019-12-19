import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 5px;
`;
export const FlatList = styled.FlatList`
  flex: 1;
`;

export const ContainerTotal = styled.TouchableOpacity`
  padding-bottom: 5px;
`;
export const ContainerText = styled.View`
  justify-content: center;
  align-items: center;
  padding-top: 60px;
`;

export const ContainerClient = styled.View.attrs({
  numberOfLines: 1,
})`
  height: 120px;
  width: 100%;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  background: #fff;
  border-radius: 8px;
  border-width: 0.1px;
  border-color: #000;
  elevation: 5;
`;
export const ConatinerCod = styled.View.attrs({
  numberOfLines: 1,
})`
  flex-direction: row;
`;
export const Text = styled.Text`
  font-weight: bold;
  padding: 2px;
  font-size: 16px;
`;
export const TextInfo = styled.Text.attrs({
  numberOfLines: 0.1,
})`
  padding: 2px;
`;
export const TextInfo2 = styled.Text.attrs({
  numberOfLines: 1,
})`
  padding: 50px;
  font-weight: bold;
`;

export const Cod = styled.Text`
  padding: 2px;
  padding-right: 10px;
  justify-content: center;
  align-items: center;
`;
export const Info = styled.Text`
  text-align: center;
  font-weight: bold;
  padding: 2px;
  font-size: 16px;
`;
