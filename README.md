# 🌦️ Weather App - Vanilla JavaScript

A beautiful, responsive weather application built with vanilla JavaScript that provides real-time weather data, hourly forecasts, and 7-day weather predictions.

## 🌐 Live Demo

**[Visit Live Demo](https://biswazit2006.github.io/Weather-App-Vanila-JavsaScript/)**

---

## ✨ Features

### Current Weather
- Real-time temperature in Celsius and Fahrenheit
- "Feels like" temperature
- Weather condition with icons
- Last updated timestamp

### Essential Information
- 💨 Wind speed and direction
- 💧 Humidity percentage
- 🌧️ Rain chance percentage
- 🔍 Visibility distance
- ☁️ Cloud cover percentage
- ☀️ UV Index
- 💨 Wind gust speed
- 🌡️ Pressure levels

### Hourly Forecast
- Hour-by-hour weather for today
- Temperature, conditions, and icons
- Rain probability for each hour
- Scrollable hourly cards

### Extended Forecast
- 5 or 7-day weather forecast
- Max/Min temperatures
- Weather conditions with icons
- Precipitation data
- Wind speed information

### Astronomy Data
- 🌅 Sunrise and Sunset times
- 🌙 Moonrise and Moonset times
- Moon phase information
- Moon illumination percentage

### Air Quality
- CO (Carbon Monoxide) levels
- Ozone (O3) concentration
- Nitrogen Dioxide (NO2)
- PM2.5 and PM10 particles
- US EPA Air Quality Index

### Additional Features
- 🔄 Auto-refresh weather data
- 📍 Auto-detect location (IP-based or GPS)
- 🎨 Beautiful gradient UI
- 📱 Fully responsive design
- 🌙 Modern, clean interface
- ⚡ Fast loading times

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection
- API Key from [WeatherAPI.com](https://www.weatherapi.com/)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/biswazit2006/Weather-App-Vanila-JavsaScript.git
cd Weather-App-Vanila-JavsaScript
```

2. **Get your API Key**
   - Visit [WeatherAPI.com](https://www.weatherapi.com/)
   - Sign up for a free account
   - Copy your API key

3. **Add API Key**
   - Open `script.js` or `index.html`
   - Replace `YOUR_API_KEY` with your actual API key
   ```javascript
   const API_KEY = 'your_api_key_here';
   ```

4. **Open the app**
   - Open `index.html` in your browser
   - Allow location access when prompted (for GPS)
   - Weather data will load automatically!

---

## 📁 Project Structure

```
Weather-App-Vanila-JavsaScript/
│
├── index.html          # Main HTML file with structure and styling
├── script.js           # JavaScript logic and API calls
├── README.md           # Documentation
└── assets/             # Weather icons and images (if any)
```

---

## 🔧 Technologies Used

- **HTML5** - Structure and markup
- **CSS3** - Styling and responsive design
  - Flexbox & Grid layouts
  - Gradient backgrounds
  - Media queries for responsiveness
- **Vanilla JavaScript** - Logic and functionality
  - Fetch API for HTTP requests
  - Geolocation API for location detection
  - DOM manipulation
- **WeatherAPI.com** - Weather data source

---

## 📡 API Integration

### WeatherAPI.com Endpoints Used

```javascript
// Current Weather
GET /current.json?key=API_KEY&q=auto:ip

// Forecast (1-7 days)
GET /forecast.json?key=API_KEY&q=location&days=7

// Hourly Data
GET /forecast.json?key=API_KEY&q=location&days=1

// Air Quality
GET /current.json?key=API_KEY&q=location&aqi=yes
```

### Location Detection Methods
1. **IP-based** (Default) - Detects location from IP address
2. **GPS-based** - Uses device geolocation for accuracy

---

## 🎯 How It Works

1. **Page Load** → App auto-detects user's location
2. **API Call** → Fetches weather data from WeatherAPI.com
3. **Data Processing** → Parses JSON response
4. **UI Update** → Displays weather information on screen
5. **Auto-refresh** → Updates weather every 10 minutes

---

## 📱 Responsive Design

- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (320px - 767px)

---

## 🔐 API Key Safety

**Important:** Never commit your API key to GitHub!

1. Create a `.gitignore` file:
```
config.js
*.env
.env.local
```

2. Store your API key separately:
```javascript
// config.js (not committed)
const API_KEY = 'your_key_here';
```

---

## 🐛 Troubleshooting

### Weather data not loading?
- Check your API key is valid
- Verify you have internet connection
- Check browser console for errors (F12)

### Location not detected?
- Check location permissions in browser settings
- Fallback to IP-based detection (automatic)
- Manually search for your location

### API quota exceeded?
- Free plan has rate limits
- Upgrade your WeatherAPI.com plan
- Implement caching to reduce API calls

---

## 📊 API Data Points Available

### Current Weather (15+ fields)
Temperature, Feels Like, Wind Speed, Humidity, Pressure, Visibility, Cloud Cover, UV Index, Dew Point, Wind Direction, Wind Gust

### Forecast Data (20+ fields)
Max/Min Temp, Precipitation, Snow, Wind Speed, Condition, Moon Phase, Sunrise/Sunset, Rain Chance, Snow Chance

### Additional Data
Air Quality Metrics, Pollen Levels, Marine Data, Astronomy Data, Alerts

---

## 🎨 Customization

### Change Color Scheme
Edit CSS gradients in `index.html`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Change Forecast Days
```javascript
const days = 7; // Change to 5 for 5-day forecast
```

### Change Refresh Interval
```javascript
setInterval(refreshWeather, 10 * 60 * 1000); // 10 minutes
```

---

## 📈 Future Enhancements

- [ ] Weather maps visualization
- [ ] Multiple location support
- [ ] Search location history
- [ ] Dark/Light mode toggle
- [ ] Weather alerts notifications
- [ ] Pollen forecast display
- [ ] Local storage for preferences
- [ ] Advanced charts and graphs
- [ ] Multiple language support
- [ ] PWA (Progressive Web App)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Biswazit** - [GitHub Profile](https://github.com/biswazit2006)

---

## 🙏 Acknowledgments

- [WeatherAPI.com](https://www.weatherapi.com/) - Weather data provider
- OpenWeather community for inspiration
- All contributors and users

---

## 📞 Support

If you have any questions or need help:
1. Check the [WeatherAPI Documentation](https://www.weatherapi.com/docs/)
2. Open an [GitHub Issue](https://github.com/biswazit2006/Weather-App-Vanila-JavsaScript/issues)
3. Review the troubleshooting section above

---

## 🌟 Show Your Support

If you find this project helpful:
- ⭐ Star this repository
- 🔗 Share with friends
- 📝 Submit feedback and suggestions
- 🐛 Report bugs

---

**Made with ❤️ by Biswazit**

**Last Updated:** January 2026
