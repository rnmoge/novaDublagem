import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View``;

export const ContainerHeader = styled.View``;

export const ContainerHeader2 = styled.View`
  flex-direction: row;
  background: #fff;
`;

export const ContainerBody = styled.View`
  flex: 1;
  padding: 10px;
  background: #eee;
  justify-content: center;
`;
export const ContainerDetails = styled.View`
  justify-content: center;
  align-items: center;
  height: 140px;
  padding: 10px;
  border-radius: 8px;
`;
export const AreaIcon = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Icon = styled(Icons)`
  font-size: 22;
  color: #707070;
`;
export const Input = styled.TextInput`
  flex: 6;
  text-align: left;
  color: #707070;
  font-size: 20px;
  padding-bottom: 10px;
  padding: 10px;
`;
export const List = styled.View`
  flex: 1;
  background: #e4e4e4;
  padding: 10px;
`;
export const ContainerTotal = styled.TouchableOpacity``;

export const FlatList = styled.FlatList``;

export const ContainerList = styled.View`
  height: 100px;
  background: #fff;
  justify-content: center;
  padding: 20px;
  margin-top: 10px;
  elevation: 5px;
`;

export const Reason = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const Cod = styled.Text``;
