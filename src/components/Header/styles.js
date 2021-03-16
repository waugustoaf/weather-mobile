import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled(LinearGradient)`
  width: 95%;
  height: 55%;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const DateText = styled.Text`
  color: #FFFFFF;
  font-size: 17px;
`;

export const CityText = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
`;

export const TemperatureText = styled.Text`
  color: #ffffff;
  font-size: 80px;
  font-weight: bold;
`;
