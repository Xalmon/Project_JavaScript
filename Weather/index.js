const mockWeatherData = {
    "Lagos": {
        "temperature": "70°F",
        "conditions": "Sunny"
    },
    "Ogun": {
        "temperature": "63°F",
        "conditions": "Cloudy"
    },
    "Ondo": {
        "temperature": "55°F",
        "conditions": "Rainy"
    },
    "Oyo": {
        "temperature": "30°F",
        "conditions": "Normal"
    },
    "Osun": {
        "temperature": "75°F",
        "conditions": "Sunny"
    },
    "Anambra": {
        "temperature": "62°F",
        "conditions": "Cloudy"
    },
    "Imo": {
        "temperature": "75°F",
        "conditions": "Sunny"
    },
    "Kanu": {
        "temperature": "30°F",
        "conditions": "Normal"
    },
    "Jos": {
        "temperature": "75°F",
        "conditions": "Sunny"
    }
};

function getWeather() {
    const city = document.getElementById("cityInput").value;
    const weatherDisplay = document.getElementById("weatherDisplay");
    const temperatureElement = document.getElementById("temperature");
    const conditionsElement = document.getElementById("conditions");
    const weatherIconElement = document.getElementById("weatherIcon");

    if (mockWeatherData[city]) {
        const { temperature, conditions } = mockWeatherData[city];
        temperatureElement.innerText = `Temperature: ${temperature}`;
        conditionsElement.innerText = `Conditions: ${conditions}`;
        weatherIconElement.src = getWeatherIcon(conditions);
        weatherDisplay.style.display = "block";
    } else {
        weatherDisplay.innerHTML = "<p>City not found in mock data</p>";
        weatherDisplay.style.display = "block";
    }
}

function getWeatherIcon(weatherCondition) {
    const iconMap = {
        "Sunny": "sunny.png",
        "Cloudy": "cloudy.png",
        "Rainy": "rainy.png",
        "Normal": "default.png"
    };
    return iconMap[weatherCondition] || "default.png"; 
}
