import React, {useState} from 'react';
// import {Text} from 'react-native';
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

export default function CardSize({data, nameIcon, nameIcon2}) {
  const [dataSize, setDataSize] = useState([
    {id: 1, size: 'P/40', quant: 0},
    {id: 2, size: 'M/42', quant: 0},
    {id: 3, size: 'G/44', quant: 0},
  ]);
  function addRemoveList(add, index) {
    const list = [...dataSize];
    if (add) {
      if (list[index].quant < 200) {
        list[index].quant += 60;
        setDataSize(list);
      } else {
        setDataSize(list);
      }
    } else if (list[index].quant === 0) {
      list[index].quant = 0;
    } else {
      list[index].quant -= 60;
      setDataSize(list);
    }
  }
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
      <List
        data={dataSize}
        initialNumToRender={10}
        renderItem={({item, index}) => {
          return (
            <ContainerTotal2>
              <ContainerSize>
                <Sizes>{item.size}</Sizes>
              </ContainerSize>
              <ContainerSize>
                <ContainerIcon>
                  <AreaIcon onPress={() => addRemoveList(false, index)}>
                    <Icon name={nameIcon} iconAparence={false} />
                  </AreaIcon>
                  <Quant>{item.quant}</Quant>
                  <AreaIcon onPress={() => addRemoveList(true, index)}>
                    <Icon name={nameIcon2} iconAparence={false} />
                  </AreaIcon>
                </ContainerIcon>
              </ContainerSize>
            </ContainerTotal2>
          );
        }}
      />
    </Container>
  );
}
CardSize.prototypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  nameIcon: PropTypes.string,
  nameIcon2: PropTypes.string,
  functionOnpressIconRigth: PropTypes.func,
  functionOnpressIconLeft: PropTypes.func,
};
CardSize.defaultProps = {
  data: [],
  nameIcon: 'fonticons',
  nameIcon2: 'fonticons',
  functionOnpressIconRigth: () => {},
  functionOnpressIconLeft: () => {},
};
