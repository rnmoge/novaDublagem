import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  flex: 1;
`;
export const ContainerHeader = styled.View`
  flex: 1;
  background: #3f51b7;
  padding: 15px;
`;

export const AreaIcon = styled.View`
  flex: 1;
  background: #3f51b7;
  justify-content: center;
  align-items: center;
`;
export const Icon = styled(Icons)`
  font-size: 60px;
  color: #fff;
`;
export const TextBold = styled.Text`
  padding: 10px;
  font-weight: bold;
  font-size: 20px;
  color: #fff;
  padding-bottom: 30px;
`;
export const TextBoldTwo = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-weight: bold;
  font-size: 17px;
  color: #fff;
`;
export const TextRegular = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: #fff;
  font-size: 16px;
`;
