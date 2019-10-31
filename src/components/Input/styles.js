import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  border: 1px;
  border-color: ${props => (props.error ? '#e45' : '#707070')};
  border-radius: 8px;
  margin-bottom: 20px;
`;
export const InputText = styled.TextInput`
  flex: 1;
  background: #fefaf4;
  color: #707070;
  font-size: 16px;
  border-radius: 8;
  padding-left: 18;
`;
