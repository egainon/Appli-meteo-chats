import { useState } from "react";
import type { MeteoData, ChatInfo } from "./types/interface";
import { getChatMeteo } from "./components/ChatMeteo";
import { API_KEY } from './key/key';

function AppMeteoChat() {
  
  const [ville, setVille] = useState("");
  const [meteo, setMeteo] = useState<MeteoData | null>(null);
  const [erreur, setErreur] = useState<string | null>(null);

  const rechercherMeteo = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${API_KEY}&units=metric&lang=fr`
      );
      const data: MeteoData = await res.json();
      if (data.cod !== 200) {
        setErreur("Ville introuvable");
        setMeteo(null);
        return;
      }
      setMeteo(data);
      setErreur(null);
    } catch {
      setErreur("Erreur réseau");
      setMeteo(null);
    }
  };

  // Si des données météo existent, on récupère les informations du chat correspondantes (emoji, texte, image) via getChatMeteo(), sinon chat reste null.
  const chat: ChatInfo | null = meteo
    ? getChatMeteo(meteo.weather[0].main, meteo.main.temp)
    : null;

  return (
    <div className="min-h-screen bg-linear-to-br from-[#FAF3D9] via-[#ECF6F6] to-[#E6BD97] text-[#1a1a1a] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Titre */}
        <h1 className="text-3xl font-bold text-center mb-6 tracking-wide text-[#5a6b2e]">
          MétéoChat
        </h1>
        
        {/* Recherche */}
        <div className="flex gap-2 mb-6">
          <input
            value={ville}
            onChange={(e) => setVille(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && rechercherMeteo()}
            placeholder="Ville..."
            className="flex-1 px-4 py-3 bg-white border-2 border-[#5a6b2e] rounded-lg text-[#1a1a1a] placeholder-[#5a6b2e] focus:outline-none focus:border-[#a0502e] shadow-sm"
          />
          <button
            onClick={rechercherMeteo}
            className="px-4 py-3 bg-[#5a6b2e] text-white font-bold rounded-lg hover:bg-[#4a5726] transition shadow-md"
          >
            OK
          </button>
        </div>

        {/* Résultats */}
        {erreur ? (
          <div className="bg-white border-2 border-[#a0502e] p-4 text-center rounded-lg shadow-lg text-[#1a1a1a]">
            {erreur}
          </div>
        ) : meteo && chat ? (
          <div className="bg-white border-2 border-[#5a6b2e] rounded-lg p-6 text-center shadow-xl">
            <h2 className="text-xl font-bold mb-4 text-[#5a6b2e]">
              {meteo.name} {chat.emoji}
              {meteo.weather[0].description}
            </h2>
              <p className="text-3xl font-bold text-[#a0502e] mb-2">
              {Math.round(meteo.main.temp)}°C
            </p>
            {/* <p className="text-sm text-[#1a1a1a] mb-3 capitalize">
              {meteo.weather[0].description}
            </p> */}
            {/* <p className="text-sm text-[#a0502e]">
              {chat.text}
            </p> */}
            <img
              src={chat.image}
              alt="Chat météo"
              className="w-60 mx-auto mb-3 image-rendering-pixelated"
            />
          </div>
        ) : (
          <div className="bg-white border-2 border-[#E6BD97] rounded-lg p-6 text-center text-[#5a6b2e] shadow-lg">
            Entre une ville
          </div>
        )}
      </div>
    </div>
  );
}

export default AppMeteoChat;