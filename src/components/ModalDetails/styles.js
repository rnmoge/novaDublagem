import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
`;
export const ContainerHeader = styled.View`
  flex-direction: row;
  background: #fff;
  padding: 10px;
`;
export const ContainerBody = styled.View`
  flex: 1;
  padding: 10px;
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
  height: 60px;
  align-items: center;
  padding-left: 20px;
  background: #fff;
`;
export const Icon = styled(Icons)`
  font-size: 22;
  color: #707070;
`;
export const Input = styled.TextInput`
  flex: 6;
  background: #fff;
  text-align: left;
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
