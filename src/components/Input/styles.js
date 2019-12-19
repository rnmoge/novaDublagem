import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  border-width: 3px;
  border-color: ${props => (props.error ? '#f00' : '#fefaf4')};
  margin-bottom: 20px;
  background: #f4f4f4;
  border-radius: 8px;
`;
export const AreaInput = styled.View`
  flex: 5;
`;

export const InputText = styled.TextInput.attrs(props => {
  return {
    secureTextEntry: props.passwordOption,
    placeholder: props.placeholder,
    autoCompleteType: 'off',
    autoCorrect: false,
    autoCapitalize: 'none',
    selectionColor: '#fefaf4',
    keyboardType: props.keyboardTypeInput,
    multiline: false,
  };
})`
  flex: 1;
  font-size: 16px;
  padding-left: 18;
`;

export const AreaIcon = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Icons)`
  font-size: 22px;
  font-weight: bold;
  color: ${props => props.colorIcon};
`;
