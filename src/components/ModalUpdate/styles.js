import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View``;
export const ContainerTotal = styled.View`
  flex: 1;
  flex-direction: column-reverse;
  justify-content: flex-end;
  margin: 15px;
  flex-direction: column;
`;

export const ContainerBody = styled.View`
  height: 60px;
  background: #202124;
  padding: 10px;
`;
export const ContainerSnack = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const ContainerText = styled.View`
  flex: 1;
  flex-direction: row;
`;
export const ContainerButton = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 8px;
`;

export const TextInfo = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const AreaIcon = styled.View`
  height: 100px;
  width: 100px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Icons)`
  font-size: 90px;
  font-weight: bold;
  color: #fff;
`;
export const TextButton = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;
