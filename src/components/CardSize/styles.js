import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.View`
  flex: 5;
  border: 0.5px;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
`;
export const ContainerTitle = styled.View`
  flex-direction: row;
`;
export const ContainerSize = styled.View`
  flex: 1;
  background: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextInfo = styled.Text`
  padding: 10px;
  text-align: center;
`;
export const List = styled.FlatList``;

export const ContainerTotal2 = styled.View`
  flex-direction: row;
`;
export const Sizes = styled.Text`
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  padding: 10px;
`;
export const ContainerQuant = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ContainerTam = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Quant = styled.Text`
  text-align: center;
  font-size: 16px;
  padding: 15px;
`;
export const ContainerIcon = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const AreaIcon = styled.TouchableOpacity`
  padding-right: 10px;
`;

export const Icon = styled(Icons)`
  font-size: 20px;
  font-weight: bold;
  color: #000a20;
`;
