// 🟢 Types pour les données météo
export interface MeteoData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
  visibility: number;
  cod: number;
}

// 🐱 Infos du chat météo
export interface ChatInfo {
  emoji: string;
  text: string;
  image: string;
}
