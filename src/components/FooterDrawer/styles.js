import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  height: 40px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px;
  margin-top: 360px;
`;

export const TextFooter = styled.Text`
  color: #263238;
  font-size: 17px;
  font-weight: bold;
  margin-left: 35px;
`;

export const AreaIcon = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const Icon = styled(Icons)`
  flex-direction: row;
  color: #707070;
  margin-left: 1px;
`;
