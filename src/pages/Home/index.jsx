import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import Conditions from "../../components/Conditions";
import Forecast from "../../components/Forecast";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { Container, DaysList, ErrorMsgText } from "./styles";
import api, { key } from "../../services/api";
import { ActivityIndicator } from "react-native";

export default function Home() {
  const [errorMsg, setErrorMsg] = useState(null);
  const [weather, setWeather] = useState({});
  const [forecasts, setForecasts] = useState([]);
  const [icon, setIcon] = useState({ name: "cloud", color: "#fff" });
  const [background, setBackground] = useState(["#1ed6ff", "#97c1ff"]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();

      if (status !== "granted") {
        setErrorMsg("Permissão negada para acessa a localização");
        return (
          <Container>
            <ErrorMsgText>{errorMsg}</ErrorMsgText>
          </Container>
        );
      }

      const { latitude, longitude } = await (
        await Location.getCurrentPositionAsync({})
      ).coords;

      const response = await api.get(
        `/weather?key=${key}&lat=${latitude}&lon=${longitude}`
      );

      setWeather(response.data.results);
      setForecasts(weather.forecast);

      if (weather.currently === "noite") {
        setBackground(["#0c3741", "#0f2f61"]);
      }

      switch (weather.condition_slug) {
        case "clear_day":
          setIcon({ name: "partly-sunny", color: "#FFB300" });
          break;
        case "rain":
        case "storm":
          setIcon({ name: "rainy", color: "#FFF" });
          break;
      }
    })();
  }, []);

  if (
    (forecasts && forecasts.length === 0) ||
    Object.keys(weather).length === 0
  ) {
    return (
      <Container>
        <ActivityIndicator size={100} color="#1ec6ff" />
      </Container>
    );
  }

  return (
    <Container>
      <Menu />
      <Header
        date={weather.date}
        city={weather.city_name}
        temp={weather.temp}
        background={background}
        icon={icon}
      />
      <Conditions
        wind={weather.wind_speedy}
        sunrise={weather.sunrise}
        sunset={weather.sunset}
        humidity={weather.humidity}
      />
      <DaysList
        horizontal={true}
        contentContainerStyle={{ paddingBottom: "5%" }}
        data={forecasts}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => <Forecast data={item} />}
      />
    </Container>
  );
}
