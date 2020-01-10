import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  flex: 1;
  background: #eee;
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
  font-size: 40px;
  font-weight: bold;
  color: #fff;
`;

export const Text = styled.Text`
  padding: 10px;
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
  height: 280px;
  background: #fff;
  padding-left: 20px;
  padding-top: 20px;
  elevation: 5px;
  border-radius: 6px;
  margin-bottom: 20px;
`;

export const TextBold = styled.Text`
  font-weight: bold;
  font-size: 16px;
  padding-top: 8px;
`;

export const TextRegular = styled.Text`
  font-size: 16px;
  padding-top: 8px;
`;
export const ContainerProducts = styled.View`
  flex: 1;
  background: #f56;
  padding: 8px;
`;

export const ListProducts = styled.FlatList``;

export const Card = styled.View`
  background: #456;
  height: 100px;
  justify-content: center;
  padding-left: 20px;
`;

export const Line = styled.Text``;
