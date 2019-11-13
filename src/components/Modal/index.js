import React from 'react';
import PropTypes from 'prop-types';
import {
  Title,
  Container,
  Icon,
  AreaIcon,
  ContainerHeader,
  ContainerList,
} from './styles';
import Input from '../Input';

export default function Modal({nameIcon, title}) {
  return (
    <Container>
      <ContainerHeader>
        <AreaIcon>
          <Icon name={nameIcon} />
        </AreaIcon>
        <Title>{title}</Title>
        <ContainerList />
      </ContainerHeader>
    </Container>
  );
}
Modal.propTypes = {
  title: PropTypes.string,
  nameIcon: PropTypes.string,
};
Modal.defaultProps = {
  title: 'Title Page',
  nameIcon: 'times',
};
