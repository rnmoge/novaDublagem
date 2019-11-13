import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: stretch;
`;
export const ContainerHeader = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  background: #fff;
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
