import React from 'react';
import {TextInput} from 'react-native';
import {Container, Text} from './styles';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import {navigate} from '../../services/navigation';
import Button from '../../components/Button';

export default function ForgotPassword() {
  return (
    <Container>
      <Input />
      <Button titleButton="AVANÇAR" />
    </Container>
  );
}
