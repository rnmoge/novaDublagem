import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.View`
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
  color: #000a20;
  padding-left: 10px;
`;
export const ContainerText = styled.View`
  justify-content: center;
`;
export const TextInfo = styled.Text`
  font-size: 15;
`;
