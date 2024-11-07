async function getWeather() {
    const apiKey = "YOUR_API_KEY";  // Replace with your OpenWeatherMap API key
    const city = document.getElementById("cityInput").value;
  
    if (city === "") {
      alert("Please enter a city name.");
      return;
    }
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.cod === 200) {
        document.getElementById("cityName").textContent = `Weather in ${data.name}`;
        document.getElementById("description").textContent = data.weather[0].description;
        document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById("wind").textContent = `Wind Speed: ${data.wind.speed} m/s`;
      } else {
        document.getElementById("cityName").textContent = "City not found!";
        document.getElementById("description").textContent = "";
        document.getElementById("temperature").textContent = "";
        document.getElementById("humidity").textContent = "";
        document.getElementById("wind").textContent = "";
      }
    } catch (error) {
      console.error("Error fetching the weather data:", error);
      alert("Failed to fetch the weather data. Please try again.");
    }
  }
  
