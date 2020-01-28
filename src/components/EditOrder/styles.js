import styled from 'styled-components/native';

export const Container = styled.View``;

export const ContainerBody = styled.View`
  flex: 1;
  padding: 15px;
`;
export const Text = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 14px;
  color: #020202;
  font-weight: bold;
  padding: 5px;
`;
