import React from "react";
import { Container, Condition } from "./styles";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Text } from "react-native";

export default function Conditions({
  wind: wind_speedy,
  sunrise,
  sunset,
  humidity,
}) {
  return (
    <Container>
      <Condition>
        <Feather name="wind" size={23} color="#1ed6ff" />
        <Text>{wind_speedy}</Text>
      </Condition>

      <Condition>
        <MaterialCommunityIcons
          name="weather-sunset-up"
          size={23}
          color="#1ed6ff"
        />
        <Text>{sunrise}</Text>
      </Condition>

      <Condition>
        <MaterialCommunityIcons
          name="weather-sunset-down"
          size={23}
          color="#1ed6ff"
        />
        <Text>{sunset}</Text>
      </Condition>

      <Condition>
        <Feather name="droplet" size={23} color="#1ed6ff" />
        <Text>{humidity}</Text>
      </Condition>
    </Container>
  );
}
