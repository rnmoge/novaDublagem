import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons';

export const Container = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  border-width: 3px;
  border-color: ${props => (props.error ? '#e45' : '#fefaf4')};
  margin-bottom: 20px;
  background: #f54;
  border-radius: 8px;
`;

export const AreaInput = styled.View`
  flex: 5;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  padding-left: 18;
`;

export const AreaIcon = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Icons)`
  font-size: 22px;
  font-weight: bold;
`;
