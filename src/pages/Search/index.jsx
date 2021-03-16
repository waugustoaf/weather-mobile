import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import api, { key } from '../../services/api';
import {
  BackButton,
  BackButtonText,
  Container,
  ErrorMessage,
  Icon,
  SearchBox,
  SearchBoxInput,
} from './styles';

export default function Search() {
  const navigation = useNavigation();

  const [input, setInput] = useState('');
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);

  async function handleSearch() {
    const response = await api.get(`/weather?key=${key}&city_name=${input}`);

    if (response.data.by === 'default') {
      setError('Humm, cidade não encontrada!');
      setInput('');
      setCity(null);
      Keyboard.dismiss();
      return;
    }

    setCity(response.data.results);
    setInput('');
    Keyboard.dismiss();
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
          onChangeText={(value) => setInput(value)}
          placeholder='Ex: Belo Horizonte, MG'
        />

        <Icon onPress={handleSearch}>
          <Feather name='search' size={22} color='#FFF' />
        </Icon>
      </SearchBox>

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
}
