import type { ChatInfo } from "../types/interface";

import chatFroid from "../images/chat-froid.png";
import chatOk from "../images/chat-ok.png";
import chatChaud from "../images/chat-chaud.png";

export const getChatMeteo = (
  weather: string,
  temp: number
): ChatInfo => {
  let weatherEmoji = "🌈";

  switch (weather) {
    case "Clear":
      weatherEmoji = "🌞";
      break;
    case "Clouds":
      weatherEmoji = "☁️";
      break;
    case "Rain":
    case "Drizzle":
      weatherEmoji = "🌧️";
      break;
    case "Thunderstorm":
      weatherEmoji = "⛈️";
      break;
    case "Snow":
      weatherEmoji = "❄️";
      break;
    case "Mist":
    case "Fog":
      weatherEmoji = "🌫️";
      break;
  }

  if (temp < 5) {
    return {
      emoji: `${weatherEmoji}`,
      text: "Brrr… un temps à ne pas mettre un chat dehors",
      image: chatFroid,
    };
  }

  if (temp <= 20) {
    return {
      emoji: `${weatherEmoji}`,
      text: "Temps doux… ronron tout doux",
      image: chatOk,
    };
  }

  return {
    emoji: `${weatherEmoji}`,
    text: "Chaud chaud ! Je me fais bronzer",
    image: chatChaud,
  };
};
