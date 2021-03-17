import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ActivityIndicator, Keyboard } from 'react-native';
import api, { key } from '../../services/api';
import Conditions from '../../components/Conditions';
import {
  BackButton,
  BackButtonText,
  Container,
  DateText,
  ErrorMessage,
  Header,
  Icon,
  NameText,
  SearchBox,
  SearchBoxInput,
  TemperatureContainer,
  TemperatureText,
} from './styles';

export default function Search() {
  const navigation = useNavigation();

  const [input, setInput] = useState('');
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);
  const [isWaiting, setIsWaiting] = useState(false);

  async function handleSearch() {
    setInput('');
    Keyboard.dismiss();
    setIsWaiting(true);

    const response = await api.get(`/weather?key=${key}&city_name=${input}`);

    if (response.data.by === 'default') {
      setError('Humm, cidade não encontrada!');
      setCity(null);
      setIsWaiting(false);
      return;
    }

    setIsWaiting(false);
    setCity(response.data.results);
  }

  if (city) {
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

        <Header colors={['#1ed6ff', '#97c1ff']}>
          <DateText>{city.date}</DateText>
          <NameText>{city.city_name}</NameText>

          <TemperatureContainer>
            <TemperatureText>{city.temp}º</TemperatureText>
          </TemperatureContainer>

          <Conditions
            wind={city.wind_speedy}
            sunrise={city.sunrise}
            sunset={city.sunset}
            humidity={city.humidity}
          />
        </Header>
      </Container>
    );
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

      {isWaiting && (
        <ActivityIndicator
          style={{ marginTop: 30 }}
          size={100}
          color='#1ec6ff'
        />
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
}
