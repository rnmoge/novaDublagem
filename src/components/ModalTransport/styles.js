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
  background: #eee;
  text-align: left;
  color: #707070;
  font-size: 20px;
  padding-bottom: 10px;
  padding: 10px;
`;
