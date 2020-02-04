import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  padding-bottom: 10px;
`;
export const ContainerText = styled.View`
  padding: 5px;
`;

export const TextPrimary = styled.Text`
  color: #020202;
  font-weight: bold;
`;
export const ContainerInput = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  border-color: ${props => (props.error ? '#f00' : '#000')};
  border-width: 0.6px;
  background: #fff;
  border-radius: 8px;
`;
export const AreaInput = styled.TouchableOpacity`
  flex: 5;
`;

export const Input = styled.View`
  height: 48px;
  justify-content: center;
  padding-left: 10px;
`;

export const TextInput = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 16px;
  color: #717171;
`;

export const AreaIcon = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-left: 40px;
`;

export const Icon = styled(Icons)`
  font-size: 24px;
  font-weight: bold;
  color: #707070;
`;
