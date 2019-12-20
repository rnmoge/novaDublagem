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
  height: 220px;
  background: #3f51b7;
  border-radius: 8px;
  padding: 10px;
`;
export const ContainerIcon = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;

export const ContainerText = styled.View`
  flex-direction: row;
  justify-content: center;
  padding-top: 10px;
`;

export const TextInfo = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 18px;
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
