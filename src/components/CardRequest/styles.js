import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.View`
  height: 140;
  background: #fff;
  margin-bottom: 25px;
  border-radius: 10px;
  elevation: 5;
`;
export const AreaButton = styled.TouchableOpacity`
  flex: 1;
  height: 140;
  background: #fff;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 10px;
`;
export const TextCard = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000a20;
`;

export const Icon = styled(Icons)`
  font-size: 22px;
  font-weight: bold;
  color: #000a20;
  padding-left: 10px;
`;
