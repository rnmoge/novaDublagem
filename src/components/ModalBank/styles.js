import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View``;

export const ContainerHeader = styled.View`
  flex-direction: row;
  height: 48px;
  align-items: center;
`;
export const ContainerBody = styled.View`
  flex: 1;
  padding: 15px;
`;
export const ContainerRadius = styled.View``;

export const AreaIcon = styled.TouchableOpacity`
  height: 48px;
  width: 48px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const Icon = styled(Icons)`
  font-size: 25;
  color: #707070;
`;
