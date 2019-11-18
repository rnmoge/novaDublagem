import React from 'react';
// import {View} from 'react-native';
// import PropTypes from 'prop-types';
import {Container, Line, FlatList} from './styles';

export default function ListView() {
  return (
    <Container>
      <FlatList
        data={[
          {id: 1, name: 'tabela1'},
          {id: 2, name: 'tabela1'},
          {id: 3, name: 'tabela1'},
          {id: 4, name: 'tabela1'},
          {id: 5, name: 'tabela1'},
          {id: 6, name: 'tabela1'},
          {id: 7, name: 'tabela1'},
          {id: 8, name: 'tabela1'},
          {id: 9, name: 'tabela1'},
          {id: 10, name: 'tabela1'},
          {id: 11, name: 'tabela1'},
          {id: 12, name: 'tabela1'},
          {id: 13, name: 'tabela1'},
          {id: 14, name: 'tabela1'},
          {id: 15, name: 'tabela1'},
          {id: 16, name: 'tabela1'},
          {id: 17, name: 'tabela1'},
          {id: 18, name: 'tabela1'},
          {id: 19, name: 'tabela1'},
        ]}
        renderItem={item => {
          return <Line>Tabelas</Line>;
        }}
      />
    </Container>
  );
}

ListView.propTypes = {};
ListView.defaultProps = {};
