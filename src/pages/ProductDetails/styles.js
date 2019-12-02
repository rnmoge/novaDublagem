import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #eee;
`;
export const ContainerBody = styled.View`
  flex: 1;
  padding: 10px;
`;
export const ContainerModal = styled.View`
  padding-top: ${Platform.OS === 'ios' ? 0 : 0};
  background: #3f51b5;
`;
