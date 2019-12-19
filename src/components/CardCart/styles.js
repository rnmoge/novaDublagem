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

export const TextInfo = styled.Text`
  text-align: center;
`;
export const TextTitle = styled.Text`
  font-weight: bold;
`;

export const ContainerIcon = styled.View`
  flex-direction: column;
  justify-content: center;
`;
