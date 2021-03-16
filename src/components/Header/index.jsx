import React from "react";
import { CityText, Container, DateText, TemperatureText } from "./styles";
import { Ionicons } from "@expo/vector-icons";

export default function Header({ date, city, temp, background, icon }) {
  return (
    <Container colors={background}>
      <DateText>{date}</DateText>
      <CityText>{city}</CityText>

      <Ionicons name={icon.name} color={icon.color} size={150} />

      <TemperatureText>{temp}º</TemperatureText>
    </Container>
  );
}
