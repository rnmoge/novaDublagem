import styled from 'styled-components/native';
import {TextInputMask} from 'react-native-masked-text';
import Icons from 'react-native-vector-icons/FontAwesome';

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
`;

export const ContainerInfo = styled.View`
  padding: 10px;
  justify-content: center;
  border-radius: 8px;
  border: 0.5px;
  border-color: #707070;
`;

export const Text = styled.Text.attrs({
  numberOfLines: 1,
})`
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
  color: ${props => (props.error ? '#f00' : '#020202')};
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

export const ContainerModal = styled.View`
  padding-top: ${Platform.OS === 'ios' ? 0 : 0};
  background: #3f51b5;
`;
// textInputMask
export const ContainerButton = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  border-width: 0.5px;
  margin-bottom: 20px;
  height: 48px;
  background: #fff;
  border-radius: 8px;
  padding-left: 8px;
  border-color: ${props => (props.error ? '#f00' : '#707070')};
`;

export const AreaInput = styled.View`
  flex: 5;
`;
export const InputMask = styled(TextInputMask).attrs(props => {
  return {
    placeholder: props.placeholder,
  };
})`
  flex: 1;
  font-size: 16px;
`;
export const AreaIcon = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Icons)`
  font-size: 22px;
  font-weight: bold;
  color: #707070;
`;
