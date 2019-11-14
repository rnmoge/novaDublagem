import React from 'react';
// import {View} from 'react-native';

import {Container, Input, AreaInput, AreaIcon, Icon} from './styles';

export default function InputType() {
  return (
    <Container>
      <AreaInput>
        <Input />
        <AreaIcon>
          <Icon />
        </AreaIcon>
      </AreaInput>
    </Container>
  );
}
