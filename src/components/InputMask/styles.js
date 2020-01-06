import styled from 'styled-components/native';
import {TextInputMask} from 'react-native-masked-text';
import Icons from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  border-width: 0.5px;
  margin-bottom: 20px;
  height: 48px;
  background: #fff;
  border-radius: 8px;
  padding-left: 8px;
  border-color: ${props => (props.error ? '#f00' : '#707070')};
  margin-top: 4px;
`;

export const AreaInput = styled.View`
  flex: 5;
`;
export const Input = styled(TextInputMask).attrs(props => {
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
