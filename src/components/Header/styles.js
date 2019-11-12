import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  flex-direction: row;
  background: #3f51b5;
  height: 65px;
  width: 100%;
  align-items: center;
`;
export const Text = styled.Text`
  color: #fefaf4;
  font-size: 18px;
  font-weight: bold;
`;
export const AreaIcon = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
`;

export const Icon = styled(Icons)`
  font-size: 22px;
  font-weight: bold;
  color: #eee;
  padding-right: 100px;
`;
export const AreaIconCart = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
`;
export const Icon2 = styled(Icons)`
  font-size: 22px;
  font-weight: bold;
  color: #eee;
  padding-left: 100px;
`;
