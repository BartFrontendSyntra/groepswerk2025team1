# Niche Weather Dashboard

A unique weather application that provides specialized weather information for three distinct groups: surfers, tomato farmers, and vampires. Each section displays relevant weather data tailored to their specific needs.

## Features

### 🏄 Surf-o-meter
- Real-time wind speed and direction
- Cardinal direction display (N, NE, E, SE, S, SW, W, NW)
- Perfect for planning your next surfing session

### 🍅 Tomatometer
- Humidity levels with visual progress indicator
- Rainfall measurements (mm per hour)
- Essential data for tomato cultivation

### 🧛 Vampire-O-Meter
- Sunrise and sunset times
- Cloud cover percentage
- Plan your nocturnal activities accordingly

## Getting Started

### Prerequisites
- A modern web browser
- An OpenWeatherMap API key

### Installation

1. Clone or download this repository to your local machine

2. Create a `secret-key.js` file in the root directory of the project

3. Add your OpenWeatherMap API key to the `secret-key.js` file:

```javascript
const API_KEY = "your_api_key_here";
```

4. Get your free API key from [OpenWeatherMap](https://openweathermap.org/api):
   - Sign up for a free account
   - Navigate to your API keys section
   - Copy your API key
   - Replace `"your_api_key_here"` with your actual API key

5. Open `index.html` in your web browser

## Usage

1. Enter a location in the search bar at the top of the page
2. Click the search button or press Enter
3. View the weather data for all three specialized sections
4. The app remembers your last 5 searched locations

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Bootstrap 5.3.8
- OpenWeatherMap API
- Nominatim OpenStreetMap API

## Note

The `secret-key.js` file is excluded from version control via `.gitignore` to protect your API key. Make sure to create this file locally before running the application.
