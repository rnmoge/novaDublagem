import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;
export const ContainerImage = styled.View`
  margin-top: 120px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 250;
`;
