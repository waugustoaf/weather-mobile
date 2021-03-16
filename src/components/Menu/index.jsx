import React from 'react';
import { Container } from './styles';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Menu () {
  const navigation = useNavigation();

  return (
    <Container onPress={ () => navigation.openDrawer() }>
      <Feather
        name="menu"
        size={36}
        color="#373737"
      />
    </Container>
  );
}