import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  elevation: 5;
  border-radius: 10px;
  border-width: 0.1px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const AreaImage = styled.View`
  height: 120px;
  width: 120px;
  margin-left: 12px;
`;

export const Image = styled.Image`
  height: 120px;
  width: 120px;
  border-radius: 10px;
`;

export const AreaText = styled.View`
  padding-left: 15px;
`;

export const Line = styled.Text`
  font-size: 14;
  padding: 3px;
`;

export const Model = styled.Text`
  font-size: 14;
  padding: 3px;
`;

export const Description = styled.Text`
  font-size: 14;
  padding: 3px;
`;

export const Feacture = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 14;
  padding: 3px;
`;