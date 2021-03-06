import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-top: 10px;
`;

export const FlatList = styled.FlatList`
  flex-direction: column;
`;

export const ContainerList = styled.View`
  flex-direction: row;
  border-radius: 10px;
  height: 100px;
  background: #fff;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 10px;
  elevation: 5;
  box-shadow: 10px 5px 5px black;
  border-width: 0.1px;
`;
export const ContainerText = styled.View`
  flex: 1;
  flex-direction: column;
  padding-left: 20px;
  justify-content: center;
  text-align: center;
  margin-left: 10px;
`;
export const Line = styled.Text`
  font-size: 16;
  margin-bottom: 5px;
`;
export const Model = styled.Text`
  font-size: 16;
  margin-bottom: 5px;
`;
export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  flex-wrap: wrap;
  height: 75px;
  width: 75px;
  background: #707070;
  border-radius: 3px;
  margin-left: 15px;
`;

export const ContainerButton = styled.View``;

export const Button = styled.TouchableOpacity`
  background: #fdca0b;
  flex-direction: row;
  margin-top: 50px;
  height: 30px;
  width: 130px;
  border-radius: 5px;
  margin-right: 5px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: #000000;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
`;
export const TextInitial = styled.Text`
  color: #212121;
  font-size: 16px;
  margin-top: 200px;
  font-weight: bold;
  text-align: center;
`;
export const Loading = styled.View`
  flex: 1;
  background: #eee;
  justify-content: center;
  align-items: center;
`;
