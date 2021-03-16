import React from 'react';
import { Container, DateText, TemperaturesField, MinimumTempText, MaximumTempText } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { condition } from '../../utils/condition';

export default function Forecast({ data }) {
  const icon = condition(data.condition);

  return(
    <Container>

      <DateText>{data.date}</DateText>

      <Ionicons name={icon.name} color={icon.color} size={25} />

      <TemperaturesField>
        <MinimumTempText>{data.min}º</MinimumTempText>
        <MaximumTempText>{data.max}º</MaximumTempText>
      </TemperaturesField>

    </Container>
  );
}