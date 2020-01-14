import React, {useState, useMemo, useEffect} from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
import {
  Container,
  ContainerTitle,
  ContainerSize,
  TextInfo,
  List,
  ContainerTotal2,
  Sizes,
  AreaIcon,
  Quant,
  ContainerIcon,
  Icon,
} from './styles';

export default function CardSize({
  data,
  nameIcon,
  nameIcon2,
  functionOnpressIconLeft,
}) {
  return (
    <Container>
      <ContainerTitle>
        <ContainerSize>
          <TextInfo>Tamanho:</TextInfo>
        </ContainerSize>
        <ContainerSize>
          <TextInfo>Quantidades:</TextInfo>
        </ContainerSize>
      </ContainerTitle>

      {data.length === 0 || data === null ? (
        <Text />
      ) : (
        <List
          data={data}
          initialNumToRender={10}
          renderItem={({item, index}) => {
            return (
              <ContainerTotal2>
                <ContainerSize>
                  <Sizes>{item.descricao}</Sizes>
                </ContainerSize>
                <ContainerSize>
                  <ContainerIcon>
                    <AreaIcon
                      onPress={() => {
                        functionOnpressIconLeft(index, false);
                      }}>
                      <Icon name={nameIcon} iconAparence={false} />
                    </AreaIcon>
                    <Quant>{item.quant}</Quant>
                    <AreaIcon
                      onPress={() => {
                        functionOnpressIconLeft(index, true);
                      }}>
                      <Icon name={nameIcon2} iconAparence={false} />
                    </AreaIcon>
                  </ContainerIcon>
                </ContainerSize>
              </ContainerTotal2>
            );
          }}
        />
      )}
    </Container>
  );
}
CardSize.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  nameIcon: PropTypes.string,
  nameIcon2: PropTypes.string,
  functionOnpressIconLeft: PropTypes.func,
};
CardSize.defaultProps = {
  data: [
    {
      descricao: 'Yuri 123',
      quant: 0,
    },
  ],
  nameIcon: 'fonticons',
  nameIcon2: 'fonticons',
  functionOnpressIconLeft: () => {},
};
