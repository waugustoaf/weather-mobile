export function condition(condition) {
  const conditions = {
    storm: {
      name: "thunderstorm-outline",
      color: "#1ec9ff",
    },
    snow: {
      name: "snow-outline",
      color: "#787878",
    },
    hail: {
      name: "thunderstorm-outline",
      color: "#e65c5c",
    },
    rain: {
      name: "rainy-outline",
      color: "#1ec9ff",
    },
    fog: {
      name: "cloud-circle-outline",
      color: "#1ec9ff",
    },
    clear_day: {
      name: "sunny-outline",
      color: "#ffb300",
    },
    clear_night: {
      name: "moon-outline",
      color: "#1ec9ff",
    },
    cloud: {
      name: "cloudy-outline",
      color: "#1ec9ff",
    },
    cloudly_day: {
      name: "partly-sunny-outline",
      color: "#1ec9ff",
    },
    cloudly_night: {
      name: "partly-night-outline",
      color: "#1ec9ff",
    },
    default: {
      name: "help-outline",
      color: "#e65c5c",
    },
  };

  return conditions[condition] || conditions.default;
}
