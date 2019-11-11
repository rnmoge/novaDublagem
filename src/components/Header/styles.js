import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  flex-direction: row;
  background: #3f51b5;
  height: 80px;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const Text = styled.Text`
  color: #fefaf4;
  font-size: 16px;
  font-weight: bold;
  align-content: center;
`;
export const AreaIcon = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Icons)`
  font-size: 22px;
  font-weight: bold;
  color: #eee;
`;
