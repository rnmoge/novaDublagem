import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  flex: 1;
  background: #eee;
`;
export const ContainerError = styled.View`
  flex: 1;
  background: #3f51b7;
  justify-content: center;
  align-items: center;
`;
export const ContainerBody = styled.View`
  flex: 1;
  background: #eee;
  padding: 15px;
`;
export const ContainerHeader = styled.View`
  height: 80px;
  background: #3f51b7;
  justify-content: center;
  align-items: center;
`;
export const AreaIcon = styled.View`
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Icons)`
  font-size: 30px;
  font-weight: bold;
  color: #fff;
`;

export const Text = styled.Text`
  padding: 4px;
  color: #fff;
  font-weight: bold;
`;

export const ContainerClient = styled.View`
  height: 76px;
  background: #fff;
  justify-content: center;
  padding-left: 20px;
  elevation: 5px;
  border-radius: 6px;
  margin-bottom: 15px;
`;
export const ContainerOrder = styled.View`
  height: 400px;
  background: #fff;
  padding-left: 20px;
  elevation: 5px;
  border-radius: 6px;
  justify-content: center;
`;

export const TextBold = styled.Text`
  font-weight: bold;
  font-size: 16px;
  padding-top: 4px;
`;

export const TextRegular = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 16px;
  padding-top: 6px;
`;
export const ContainerProducts = styled.View`
  margin-top: 10px;
`;

export const ListProducts = styled.FlatList``;

export const Card = styled.View`
  background: #fff;
  border-radius: 8px;
  justify-content: center;
  padding: 10px;
  padding-left: 20px;
  elevation: 5px;
  margin-bottom: 20px;
`;

export const Line = styled.Text``;
export const Model = styled.Text`
  padding-left: 5px;
`;
export const Model2 = styled.Text``;

export const ListSizes = styled.View`
  background: #f65;
`;
export const ContainerLine = styled.View`
  flex-direction: row;
`;

export const Sizes = styled.View`
  flex-direction: row;
  background: #f09;
`;
export const TotalSizes = styled.View`
  flex-direction: row;
`;

export const ContainerInfo = styled.View`
  flex: 2;
  flex-direction: row;
`;
export const TextSizes = styled.Text`
  text-align: center;
`;
export const TextBoldSizes = styled.Text`
  text-align: center;
  font-weight: bold;
`;
