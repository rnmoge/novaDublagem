import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/Header';
import InputType from '../../components/InputType';
import Button from '../../components/Button';
import ModalAddress from '../../components/ModalAddress';
import ModalClient from '../../components/ModalClient';
// import ModalBank from '../../components/ModalBank';
// import ModalInfoClient from '../../components/ModalInfoClient';
import Confirmation from '../../components/Confirmation';
import InputMask from '../../components/InputMaskCNPJ';
import InputMaskCel from '../../components/InputMaskCel';
import InputClick from '../../components/InputClick';
import Radius from '../../components/Radius';
import {Container, ContainerTotal} from './styles';
import {ContainerBody} from '../../components/DetailsOrder/styles';
import {TextNormal} from '../../styles/fonts';
import * as ActionsRegister from '../../store/modules/registerclient/actions';

export default function CustomerRegistration({navigation}) {
  const dispatch = useDispatch();
  const {loading, error} = useSelector(state => state.common);
  const {
    addressApi,
    // clientsApi,
    providersApi,
    // banksApi,
    // infoApi,
    modalAddress,
    modalProvider,
    // modalClient,
    // modalBank,
    // modalInfo,
    newData,
    address1,
    address2,
  } = useSelector(state => state.registerclient);
  const [inputRazon, setInpuRazon] = useState(null);
  const [textSecondary, setTextSecondary] = useState('Cadastre os endereços');
  const [textSecondary2, setTextSecondary2] = useState(
    'Cadastre os fornecedores'
  );
  // const [textSecondary3, setTextSecondary3] = useState('Cadastre os clientes');
  // const [textSecondary4, setTextSecondary4] = useState('Cadastre os bancos');
  // const [textSecondary5, setTextSecondary5] = useState(
  //   'Cadastre outras informações'
  // );
  const [inputName, setInpuName] = useState(null);
  const [inputCnpj, setInputCnpj] = useState(null);
  const [inputSubscriptionOne, setInputSubscriptionOne] = useState(null);
  const [inputSubscriptionTwo, setInputSubscriptionTwo] = useState(null);
  const [suffrage, setSuffrage] = useState(false);
  const [InputExist, setInputExist] = useState(false);
  const [modalAddress2, setModalAddress2] = useState(false);
  const [modalAddress3, setModalAddress3] = useState(false);
  const [modalConfirmation, setModalConfirmation] = useState(false);
  const [addressEqual, setAddressEqual] = useState(address1);
  const [addressEqual2, setAddressEqual2] = useState(address2);
  const [inputSuffrage, setinputSuffrage] = useState(null);
  const [inputContat, setInputContat] = useState(null);
  const [inputMobile, setInputMobile] = useState(null);
  const [inputCellFix, setInputCellFix] = useState(null);
  const [inputEmail, setInputEmail] = useState(null);
  const [disable, setDisable] = useState(true);
  useEffect(() => {
    if (address1) {
      setAddressEqual(address1);
    } else {
      setAddressEqual(false);
    }
    if (address2) {
      setAddressEqual2(address2);
    } else {
      setAddressEqual2(false);
    }
  }, [address1, address2]);
  useEffect(() => {
    if (addressApi !== null) {
      setTextSecondary('Cadastrado');
    } else {
      setTextSecondary('Cadastre os endereços');
    }
  }, [addressApi]);
  // useEffect(() => {
  //   if (clientsApi !== null) {
  //     setTextSecondary3('Cadastrado');
  //   }
  // }, [clientsApi]);
  useEffect(() => {
    if (providersApi !== null) {
      setTextSecondary2('Cadastrado');
    } else {
      setTextSecondary2('Cadastre os fornecedores');
    }
  }, [providersApi]);
  useEffect(() => {
    if (
      inputRazon === null ||
      inputName === null ||
      inputCnpj === null ||
      inputSubscriptionOne === null ||
      inputMobile === null ||
      inputEmail === null ||
      textSecondary === 'Cadastre os endereços' ||
      textSecondary2 === 'Cadastre os fornecedores'
    ) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [
    inputCnpj,
    inputEmail,
    inputMobile,
    inputName,
    inputRazon,
    inputSubscriptionOne,
    textSecondary,
    textSecondary2,
  ]);
  // useEffect(() => {
  //   if (banksApi !== null) {
  //     setTextSecondary4('Cadastrado');
  //   }
  // }, [banksApi]);
  // useEffect(() => {
  //   if (infoApi !== null) {
  //     setTextSecondary5('Cadastrado');
  //   }
  // }, [infoApi]);
  function exchangeRadius() {
    setSuffrage(!suffrage);
    setInputExist(!InputExist);
  }
  function registerClient() {
    setModalConfirmation(!modalConfirmation);
    dispatch(
      ActionsRegister.saveClientTotal(
        inputRazon,
        inputName,
        inputCnpj,
        inputSubscriptionOne,
        inputSubscriptionTwo,
        suffrage,
        inputSuffrage,
        inputContat,
        inputCellFix,
        inputEmail,
        inputMobile,
        addressApi,
        providersApi
      )
    );
  }
  function openModalAddress() {
    dispatch(ActionsRegister.openModalAddress());
  }
  function closeModalAddress() {
    dispatch(ActionsRegister.closeModalAddress());
  }
  function openModalProvider() {
    dispatch(ActionsRegister.openModalProvider());
  }
  function closeModalProvider() {
    dispatch(ActionsRegister.closeModalProvider());
  }
  // function openModalClient() {
  //   dispatch(ActionsRegister.openModalClient());
  // }
  // function closeModalClient() {
  //   dispatch(ActionsRegister.closeModalClient());
  // }
  // function openModalBank() {
  //   dispatch(ActionsRegister.openModalBank());
  // }
  // function closeModalBank() {
  //   dispatch(ActionsRegister.closeModalBank());
  // }
  // function openModalInfo() {
  //   dispatch(ActionsRegister.openModalInfo());
  // }
  // function closeModalInfo() {
  //   dispatch(ActionsRegister.closeModalInfo());
  // }
  function closeModal() {
    setModalConfirmation(!modalConfirmation);
    setInpuName(null);
    setInputCnpj(null);
    setInpuRazon(null);
    setInputSubscriptionOne(null);
    setInputSubscriptionTwo(null);
    setinputSuffrage(null);
    setTextSecondary2('Cadastre os fornecedores');
    setTextSecondary('Cadastre os endereços');
    setInputContat(null);
    setInputMobile(null);
    setInputCellFix(null);
    setInputEmail(null);
    setSuffrage(false);
    dispatch(ActionsRegister.cleanModals());
    dispatch(ActionsRegister.cleanData());
  }
  return (
    <Container>
      <Header
        title="Cadastro de Cliente"
        functionOnpressIconLeft={() => navigation.openDrawer()}
      />
      <ScrollView>
        <ContainerBody>
          <ContainerTotal>
            <TextNormal>Razão Social</TextNormal>
            <InputType
              placeholder="Razão Social"
              valueInputText={inputRazon}
              functionOnChangeText={text => {
                setInpuRazon(text);
              }}
            />
            <TextNormal>Nome Fantasia</TextNormal>
            <InputType
              placeholder="Nome Fantazia"
              valueInputText={inputName}
              functionOnChangeText={text => {
                setInpuName(text);
              }}
            />
            <TextNormal>CNPJ</TextNormal>
            <InputMask
              placeholder="CNPJ"
              valueInput={inputCnpj}
              onChangeText={text => {
                setInputCnpj(text);
              }}
            />

            <TextNormal>Inscrição Estadual</TextNormal>
            <InputType
              placeholder="Inscrição Estadual"
              valueInputText={inputSubscriptionOne}
              functionOnChangeText={text => {
                setInputSubscriptionOne(text);
              }}
            />
            <TextNormal>Inscrição Municipal</TextNormal>
            <InputType
              placeholder="Inscrição Municipal"
              valueInputText={inputSubscriptionTwo}
              functionOnChangeText={text => {
                setInputSubscriptionTwo(text);
              }}
            />
            <Radius
              text="Tem suframa?"
              nameIcon={suffrage ? 'dot-circle' : 'circle'}
              functionOnPress={() => {
                exchangeRadius();
              }}
            />
            {InputExist ? (
              <InputType
                placeholder="Suframa"
                valueInputText={inputSuffrage}
                functionOnChangeText={text => {
                  setinputSuffrage(text);
                }}
              />
            ) : null}
            <TextNormal>Contato</TextNormal>
            <InputType
              placeholder="Contato"
              valueInputText={inputContat}
              functionOnChangeText={text => {
                setInputContat(text);
              }}
            />
            <TextNormal>Celular</TextNormal>
            <InputMaskCel
              placeholder="Celular"
              valueInput={inputMobile}
              onChangeText={text => {
                setInputMobile(text);
              }}
            />
            <TextNormal>Telefone Fixo</TextNormal>
            <InputMaskCel
              placeholder="Telefone Fixo"
              valueInput={inputCellFix}
              onChangeText={text => {
                setInputCellFix(text);
              }}
            />
            <TextNormal>E-mail</TextNormal>
            <InputType
              placeholder="E-mail"
              valueInputText={inputEmail}
              functionOnChangeText={text => {
                setInputEmail(text);
              }}
            />
            {/* <InputClick
              icoName="angle-down"
              textPrimary="Outras informações"
              textSecundary={textSecondary5}
              functionOnpressInput={() => {
                openModalInfo();
              }}
            /> */}
            <InputClick
              icoName="angle-down"
              textPrimary="Endereço"
              textSecundary={textSecondary}
              functionOnpressInput={() => {
                openModalAddress();
              }}
            />
            {addressEqual ? (
              <InputClick
                icoName="angle-down"
                textPrimary="Endereço de cobrança"
                textSecundary="Cadastre os endereços de cobrança"
                functionOnpressInput={() => {
                  setModalAddress2(!modalAddress2);
                }}
              />
            ) : null}
            {addressEqual2 ? (
              <InputClick
                icoName="angle-down"
                textPrimary="Endereço de entrega"
                textSecundary="Cadastre os endereços de entrega"
                functionOnpressInput={() => {
                  setModalAddress3(!modalAddress3);
                }}
              />
            ) : null}

            <InputClick
              icoName="angle-down"
              textPrimary="Fornecedores"
              textSecundary={textSecondary2}
              functionOnpressInput={() => {
                openModalProvider();
              }}
            />
            {/* <InputClick
              icoName="angle-down"
              textPrimary="Clientes"
              textSecundary={textSecondary3}
              functionOnpressInput={() => {
                openModalClient();
              }}
            /> */}
            {/* <InputClick
              icoName="angle-down"
              textPrimary="Bancos"
              textSecundary={textSecondary4}
              functionOnpressInput={() => {
                openModalBank();
              }}
            /> */}
            <Button
              titleButton="CONFIRMAR"
              functionOnPress={() => {
                registerClient();
              }}
              disabledButton={disable}
            />
          </ContainerTotal>
        </ContainerBody>
      </ScrollView>
      <ModalAddress
        modalVisible={modalAddress}
        functionOnPressIcon={() => {
          closeModalAddress();
        }}
      />
      <ModalAddress
        modalVisible={modalAddress2}
        functionOnPressIcon={() => {
          setModalAddress2(!modalAddress2);
        }}
        radiusExist={false}
      />
      <ModalAddress
        modalVisible={modalAddress3}
        functionOnPressIcon={() => {
          setModalAddress3(!modalAddress3);
        }}
        radiusExist={false}
      />
      <ModalClient
        modalExist={false}
        modalVisible={modalProvider}
        functionOnPressIcon={() => {
          closeModalProvider();
        }}
      />
      {/* <ModalClient
        modalExist
        modalVisible={modalClient}
        functionOnPressIcon={() => {
          closeModalClient();
        }}
      />
      <ModalBank
        modalExist
        modalVisible={modalBank}
        functionOnPressIcon={() => {
          closeModalBank();
        }}
      />
      <ModalInfoClient
        modalVisible={modalInfo}
        functionOnPressIcon={() => {
          closeModalInfo();
        }}
      /> */}
      <Confirmation
        modalVisible={modalConfirmation}
        nameIcon="check-circle"
        functionOnPressButton={() => {
          closeModal();
        }}
        loading={loading}
        data={newData}
        error={error}
        nameIconError="times-circle"
      />
    </Container>
  );
}
