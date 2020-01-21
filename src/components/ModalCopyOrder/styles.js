import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  /* flex: 1; */
  /* background: #f89; */
  justify-content: center;
  align-items: center;
`;
export const ContainerTotal = styled.View`
  margin: 20px;
  margin-top: 200px;
`;

export const ContainerBody = styled.View`
  height: 300px;
  background: #3f51b7;
  border-radius: 8px;
  padding: 10px;
`;
export const ContainerIcon = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding-bottom: 15px;
  margin-left: 18px;
`;

export const ContainerText = styled.View`
  flex-direction: row;
  justify-content: center;
  height: 50px;
`;
export const ContainerInput = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const TextInfo = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 18px;
`;

export const AreaIcon = styled.View`
  height: 22px;
  width: 22px;
  align-items: center;
  justify-content: center;
  background: #f65;
`;

export const Icon = styled(Icons)`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;
export const ContainerError = styled.View``;
export const TextError = styled.Text`
  color: #ff0000;
`;
