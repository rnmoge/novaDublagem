import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.View`
  flex: 1;
  background: #eee;

  /* elevation: 5; */
`;
export const ContainerTotal = styled.View`
  background: #fff;
  elevation: 5;
  margin-top: 10px;
  padding: 10px;
  border-radius: 8px;
  flex-direction: row;
`;
export const ContainerTotal2 = styled.View`
  background: #fff;
  padding: 10px;
  border-radius: 8px;
`;

export const AreaIcon = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;
export const Icon = styled(Icons)`
  font-size: 22px;
  font-weight: bold;
  color: #000a20;
`;

export const List = styled.FlatList``;

export const ContainerProduct = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerQuant = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const ContainerQuant2 = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: center;
`;

export const TextInfo = styled.Text`
  text-align: center;
`;
export const TextTitle = styled.Text`
  font-weight: bold;
  padding: 2px;
`;

export const ContainerIcon = styled.View`
  flex-direction: column;
  justify-content: center;
`;
export const TotalSizes = styled.View`
  flex-direction: row;
`;

export const ContainerInfo = styled.View`
  flex: 1;
  flex-direction: row;
`;
export const TextSizes = styled.Text`
  text-align: center;
`;
export const TextBoldSizes = styled.Text`
  text-align: center;
  font-weight: bold;
`;
export const Line = styled.Text`
  padding: 2px;
`;
