
function getWeatherData(latitude, longitude, apiKey) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const weatherCondition = data.weather[0].main;
        const weatherImage = getWeatherImage(weatherCondition);

        document.getElementById("weather-info").textContent = `Condição: ${weatherCondition}`;
        document.getElementById("weather-image").src = weatherImage;
      })
      .catch(error => {
        console.error("Erro ao obter dados do clima:", error);
        document.getElementById("weather-info").textContent = "Não foi possível obter os dados do clima.";
      });
  }

  function getWeatherImage(weatherCondition) {
    // Lógica para mapear condições climáticas para imagens
    // Por exemplo, você pode usar URLs de imagens relacionadas ao clima ou ter imagens locais

    // Exemplo simples usando URLs de imagens:
    const images = {
      "Clear": "https://exemplo.com/imagem_ensolarada.jpg",
      "Rain": "https://exemplo.com/imagem_chuvosa.jpg",
      "Clouds": "https://exemplo.com/imagem_nublada.jpg",
      // Adicione mais condições conforme necessário
    };

    return images[weatherCondition] || "https://exemplo.com/imagem_padrao.jpg";
  }

  function getLocation() {
    // Obter a localização do usuário usando o recurso Geolocation do navegador
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const apiKey = "YOUR_API_KEY"; // Substitua pela sua chave de API do OpenWeatherMap

          getWeatherData(latitude, longitude, apiKey);
        },
        error => {
          console.error("Erro ao obter a localização:", error);
          document.getElementById("weather-info").textContent = "Não foi possível obter a localização do usuário.";
        }
      );
    } else {
      console.error("Geolocation não é suportado neste navegador.");
      document.getElementById("weather-info").textContent = "Geolocation não é suportado neste navegador.";
    }
  }

  getLocation();