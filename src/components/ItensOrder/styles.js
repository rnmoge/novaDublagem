import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

export const Text = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #000;
  font-weight: bold;
`;

export const ContainerOrder = styled.View`
  height: 280px;
  background: #fff;
  padding-left: 20px;
  elevation: 5px;
  border-radius: 6px;
  justify-content: center;
`;

export const TextBold = styled.Text`
  font-weight: bold;
  font-size: 16px;
  padding-top: 8px;
`;

export const TextRegular = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 16px;
  padding-top: 8px;
`;
export const ContainerProducts = styled.View`
  margin-top: 10px;
`;
export const ContainerCard = styled.View`
  flex: 5;
`;
export const ListProducts = styled.FlatList``;

export const Card = styled.View`
  background: #fff;
  border-radius: 8px;
  height: 160px;
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  elevation: 5;
`;

export const Line = styled.Text``;

export const ListSizes = styled.View``;

export const Sizes = styled.View`
  flex-direction: row;
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
export const ContainerIcon = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AreaIcon = styled.TouchableOpacity`
  /* background: #f65; */
  height: 50px;
  width: 50px;
  justify-content: center;
  align-items: center;
`;
export const Icon = styled(Icons)`
  font-size: 22px;
  font-weight: bold;
  color: #000a20;
`;
