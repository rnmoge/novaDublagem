import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20;
  margin-top: 20px;
  padding-top: 40px;
`;
export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 250;
`;
