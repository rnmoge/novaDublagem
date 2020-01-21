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
export const TextNormal = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 14px;
  padding: 2px;
  font-weight: bold;
`;
export const ContainerText = styled.View`
  flex-direction: row;
  padding: 2px;
`;
