import styled from 'styled-components/native';
import {TextInputMask} from 'react-native-masked-text';

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

export const ContainerButton = styled.TouchableOpacity`
  flex: 1;
  height: 48px;
  justify-content: center;
  margin-top: 15px;
  padding-left: 20px;
  border: 0.5px;
`;
export const TextButton = styled.Text`
  padding-top: 20px;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
`;

export const ContainerModal = styled.View`
  padding-top: ${Platform.OS === 'ios' ? 0 : 0};
  background: #3f51b5;
`;
export const InputMask = styled(TextInputMask)`
  border: 0.5px;
`;
