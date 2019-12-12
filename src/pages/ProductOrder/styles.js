import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #eee;
`;
export const ContainerBody = styled.View`
  flex: 1;
`;
export const ContainerTotal = styled.View`
  padding: 10px;
`;

export const ContainerClient = styled.View`
  padding: 10px;
  background: #fff;
  border-radius: 8px;
  elevation: 5px;
`;

export const ContainerPlaceholder = styled.View`
  justify-content: center;
  padding-bottom: 10px;
`;

export const ContainerInfo = styled.View`
  padding: 10px;
  justify-content: center;
  border-radius: 8px;
  border: 0.5px;
  border-color: #707070;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: #020202;
  font-weight: bold;
`;

export const TextClient = styled.Text.attrs({
  numberOfLines: 1,
})`
  padding: 2px;
  font-size: 15px;
  font-weight: bold;
`;
export const List = styled.View`
  flex: 1;
  padding: 10px;
`;
export const ContainerList = styled.View`
  background: #fff;
  padding: 10px;
  border-radius: 8px;
  elevation: 5;
`;
export const ContainerImagem = styled.View`
  background: #fff;
  padding: 10px;
  border-radius: 8px;
  justify-content: center;
  border: 0.5px;
  align-items: center;
  margin-bottom: 15px;
`;
export const Image = styled.Image`
  height: 75;
  width: 75;
  border-radius: 3px;
  margin-left: 15px;
`;
export const ContainerButton2 = styled.View`
  flex-direction: column;
`;
export const ContainerButton = styled.View`
  flex-direction: row;
`;
export const ContainerModal = styled.View`
  padding-top: ${Platform.OS === 'ios' ? 0 : 0};
  background: #3f51b5;
`;
