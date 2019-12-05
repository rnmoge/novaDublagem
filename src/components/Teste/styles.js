import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 3;
  background: #fff;
  margin-top: 15px;
  elevation: 5;
  border-radius: 10px;
  border-width: 0.1px;
  justify-content: center;
  align-items: center;
`;

export const AreaTable = styled.View`
  flex-direction: row;
`;

export const ContainerTitle = styled.View`
  flex-direction: column;
`;
export const Title = styled.Text`
  text-align: center;
  font-size: 16px;
  margin-bottom: 30px;
`;
export const ContainerSize = styled.View``;

export const FlatList = styled.FlatList`
  flex-direction: column;
`;

export const Sizes = styled.Text`
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  padding: 10px;
  border: #707070;
  border-width: 0.4px;
`;
export const Prices = styled.Text`
  text-align: center;
  font-size: 14px;
  padding: 10px;
  border: #707070;
  border-width: 0.4px;
`;
export const Text = styled.Text`
  text-align: center;
  padding: 10px;
`;
export const ContainerPrice = styled.View`
  flex: 1;
`;
export const ContainerComission = styled.View`
  flex-direction: row;
  justify-content: center;
`;
export const Comission = styled.Text`
  text-align: center;
  padding: 10px;
`;
