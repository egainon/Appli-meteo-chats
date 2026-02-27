### 🌤️ MétéoChat 🐱

Une application météo interactive construite avec React + TypeScript qui affiche la météo d’une ville… accompagnée d’un chat adorable adapté au temps qu’il fait 😺

Chaque recherche affiche :
- 🌍 La météo actuelle d’une ville
- 🌡️ La température en °C
- ☁️ La description météo
- 🐱 Un chat personnalisé (emoji + image) selon la météo

### 📖 Description du projet

MétéoChat est une application front-end qui :
- Fait un appel API vers OpenWeather
- Récupère la météo actuelle d’une ville
- Analyse la condition météo (Clear, Rain, Snow, etc.)
- Associe dynamiquement un chat (emoji + image + message) via une fonction getChatMeteo()
- Affiche le tout dans une interface moderne et responsive

Le projet met en pratique :
- Les hooks React (useState)
- Les appels API avec fetch et async/await
- La gestion d’erreurs (ville introuvable, erreur réseau)
- Le typage avec TypeScript (MeteoData, ChatInfo)
- La gestion sécurisée d’une clé API
- Un design avec TailwindCSS

### 🛠️ Stack technique
- React
- TypeScript
- TailwindCSS
- API OpenWeather
