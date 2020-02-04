import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  flex-direction: column;
  align-items: stretch;
`;
export const ContainerHeader = styled.View`
  flex-direction: row;
  background: #fff;
`;
export const ContainerBody = styled.View`
  flex: 1;
  background: #fff;
  padding: 10px;
`;
export const ContainerHeader2 = styled.View`
  height: 48px;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
`;
export const ContainerInitial = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
export const AreaIcon = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const AreaIcon2 = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Icon = styled(Icons)`
  font-size: 22;
  color: #707070;
`;
export const Input = styled.TextInput`
  flex: 6;
  background: #f4f4f4;
  text-align: left;
  color: #707070;
  font-size: 20px;
  padding-bottom: 10px;
  padding: 10px;
`;
export const TextButton = styled.Text`
  background: #fff;
  flex-direction: row;
  text-align: left;
  padding: 20px;
  font-size: 16px;
  color: #707070;
  font-weight: bold;
  border: 0.2px;
  border-left-color: #fff;
  border-right-color: #fff;
  border-top-color: #fff;
  border-bottom-color: #707070;
`;
export const TextInitial = styled.Text`
  background: #fff;
  flex-direction: row;
  text-align: center;
  padding: 20px;
  font-size: 16px;
  color: #707070;
  font-weight: bold;
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
export const TextClient = styled.Text.attrs({
  numberOfLines: 1,
})`
  padding: 2px;
  font-size: 15px;
  font-weight: bold;
  color: ${props => (props.error ? '#f00' : '#020202')};
`;
