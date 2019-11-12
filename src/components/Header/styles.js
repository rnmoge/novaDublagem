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
  align-items: center;
`;
export const AreaIcon = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: ${props => props.positionIcon};
`;

export const Icon = styled(Icons)`
  font-size: 22px;
  font-weight: bold;
  color: #eee;
  padding: 20px;
`;
export const AreaIconCart = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  align-items: ${props => props.positionIcon};
`;
export const Icon2 = styled(Icons)`
  font-size: 22px;
  font-weight: bold;
  color: #eee;
`;
