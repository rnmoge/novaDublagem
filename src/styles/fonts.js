import styled from 'styled-components/native';

export const TextBold = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-weight: bold;
  font-size: 16px;
`;
export const TextRegular = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 16px;
`;
export const ContainerText = styled.View`
  flex-direction: row;
  padding: 2px;
`;
