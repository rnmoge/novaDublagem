import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px;
`;
export const AreaIcon = styled.TouchableOpacity`
  padding-right: 10px;
`;
export const ContainerButton = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px;
`;

export const Icon = styled(Icons)`
  font-size: 20px;
  font-weight: bold;
  color: #606060;
`;
export const ContainerText = styled.View`
  justify-content: center;
`;
export const TextInfo = styled.Text`
  font-size: 15;
  color: #606060;
`;
