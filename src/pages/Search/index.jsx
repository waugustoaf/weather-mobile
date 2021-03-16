import React, { useState } from 'react';
import {
  BackButton,
  BackButtonText,
  Container,
  Icon,
  SearchBox,
  SearchBoxInput,
} from './styles';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import api, { key } from '../../services/api';

export default function Search() {
  const navigation = useNavigation();

  const [input, setInput] = useState('');
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);

  async function handleSearch() {
    const response = await api.get(`/weather?key=${key}&city_name=${input}`);
  }

  return (
    <Container>
      <BackButton onPress={() => navigation.navigate('Home')}>
        <Feather name='chevron-left' size={32} color='#000' />
        <BackButtonText>Voltar</BackButtonText>
      </BackButton>

      <SearchBox>
        <SearchBoxInput
          value={input}
          onChange={() => setInput(valor)}
          placeholder='Ex: Belo Horizonte, MG'
        />

        <Icon onPress={handleSearch}>
          <Feather name='search' size={22} color='#FFF' />
        </Icon>
      </SearchBox>
    </Container>
  );
}
