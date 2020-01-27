import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const ContainerBody = styled.View`
  flex: 1;
  background: #eee;
  padding: 10px;
`;
export const ContainerInput = styled.View`
  background: #ffff;
  elevation: 5px;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#000',
})`
  margin: 30px 0;
`;
