import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 10px;
`;
export const ContainerHeader = styled.View`
  margin-top: 110px;
  flex: 2;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  background: #fff;
`;
export const ContainerList = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #000;
`;
export const AreaIcon = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
`;
export const Icon = styled(Icons)`
  font-size: 22;
  color: #707070;
  padding-bottom: 19px;
`;
export const Title = styled.Text`
  flex: 6;
  background: #f65;
  text-align: center;
  color: #707070;
  font-size: 24px;
  padding-bottom: 10px;
`;
