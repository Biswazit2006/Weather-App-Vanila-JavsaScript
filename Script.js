// +++++++++++++++++++++++++++++++++++++++++++++
//  DOM Nodes
// +++++++++++++++++++++++++++++++++++++++++++++
const temp = document.getElementById("temp");
const todayInfo = document.getElementById("todayInfo");
const feelsLike = document.getElementById("feelsLike");
const windSpeeed = document.getElementById("windSpeeed");
const humidity = document.getElementById("humidity");
const weatherIcon = document.getElementById("weatherIcon");
const locationCity = document.getElementById("locationCity");
const date = document.getElementById("date");
const dayAndTime = document.getElementById("dayAndTime");
const ChanceOfRAin = document.getElementById("ChanceOfRAin");
const futurePodcast = document.getElementById("futurePodcast");
const todayPodcast = document.getElementById("todayPodcast");


// +++++++++++++++++++++++++++++++++++++++++++++
//  Current Weather Data Fetching
// +++++++++++++++++++++++++++++++++++++++++++++
const weatherApiKey = '83b48667693f40088ad191656260901';
let city = "Rajshahi"


// +++++++++++++++++++++++++++++++++++++++++++++
//  Current Weather Data Fetching (Todays info)
// +++++++++++++++++++++++++++++++++++++++++++++
async function getCurrentWeather(location) {
  const apiKey = weatherApiKey;
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`
  );
  const data = await response.json();
  console.log(data)
  temp.innerHTML = data.current.temp_c + "&deg;C";
  todayInfo.innerHTML = data.current.condition.text ;

  feelsLike.innerHTML = ` ${data.current.feelslike_c}&deg;C`;
  windSpeeed.innerHTML = `${data.current.wind_kph} kp/h`;
  humidity.innerHTML = `${data.current.humidity}%`;
//   humidity2.innerHTML = `${data.current.humidity}%`;
  weatherIcon.src = data.current.condition.icon;
  locationCity.innerHTML = data.location.name + "," + data.location.country ;

//   Dates
const localTime = new Date(data.location.localtime);
 date.innerHTML = `${localTime.getDate().toString().padStart(2, '0')} ${localTime.toLocaleString('en-US', { month: 'long' })} ${localTime.getFullYear()}`;
  dayAndTime.innerHTML = `${localTime.toLocaleString('en-US', { weekday: 'long' })} <span class="main-left-time">${localTime.getHours()}:${localTime.getMinutes().toString().padStart(2, '0')}</span>`;
  
  // console.log(`Temperature: ${data.current.temp_c}°C`);
  // console.log(`Condition: ${data.current.condition.text}`);
  // console.log(`Wind: ${data.current.wind_kph} kph`);
  console.log(`Humidity: ${data.current.humidity}%`);
}

getCurrentWeather(city);

// +++++++++++++++++++++++++++++++++++++++++++++
// Weather Forecast (1-14 days)
// +++++++++++++++++++++++++++++++++++++++++++++
async function getForecast(location, days = 7) {
  const apiKey = weatherApiKey;
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=${days}`
  );
  const data = await response.json();
  // console.log(data.location.localtime)
  // Get some info for main infobar
  console.log(data.forecast.forecastday[0])
  ChanceOfRAin.innerHTML = data.forecast.forecastday[0].day.daily_chance_of_rain + "%";
  let TodayMaxTemp = data.forecast.forecastday[0].day.maxtemp_c;
  let todayminTemp = data.forecast.forecastday[0].day.mintemp_c;
  let TodaySunRiseTime = data.forecast.forecastday[0].astro.sunrise;
  let TodaySunSetTime = data.forecast.forecastday[0].astro.sunset;
  let TodayMoonRise = data.forecast.forecastday[0].astro.moonrise;
  let TodayMoonSet = data.forecast.forecastday[0].astro.moonset;
  
  console.log(TodaySunRiseTime)


//  Data loop For podcast future
  data.forecast.forecastday.forEach(day => {
    // Date formateing
    const dateObj = new Date(day.date);
    const dayName = dateObj.toLocaleDateString(undefined, { weekday: 'short' });

    let podcastDay = document.createElement("h6")
    podcastDay.innerHTML = dayName;

    let podcastDayTemp = document.createElement("p");
    podcastDayTemp.innerHTML = day.day.maxtemp_c + "&deg;C" + " / " + day.day.mintemp_c + "&deg;C";

    let podcastDayIcon = document.createElement("img")
    podcastDayIcon.src = day.day.condition.icon;

    let podcastDayWind = document.createElement("p")
    podcastDayWind.innerHTML = day.day.maxwind_kph + "Km/h";

    let card = document.createElement("div")
    card.className = "future-podcast-card glass-effect"
    card.appendChild(podcastDay)
    card.appendChild(podcastDayTemp);
    card.appendChild(podcastDayIcon)
    card.appendChild(podcastDayWind)

    futurePodcast.appendChild(card);
  });
//   Loop For today Hourly Podcast
data.forecast.forecastday[0].hour.forEach(h =>{
    // Get Hour
    const apiTime = h.time;
    const date = new Date(apiTime)
    const formattedHour = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    hour12: true
    });
    // console.log(formattedHour)
    console.log()
    // Dom
    let timeNow = document.createElement("p")
    timeNow.innerHTML = formattedHour;
    let weatherIcon = document.createElement("img");
    weatherIcon.src = h.condition.icon;
    let temUpdate = document.createElement("p")
    temUpdate.innerHTML = h.temp_c + "&deg;C";

    let todayCard = document.createElement("div");
    todayCard.className = "today-podcast-card glass-effect";
    todayCard.appendChild(timeNow)
    todayCard.appendChild(weatherIcon)
    todayCard.appendChild(temUpdate)

    todayPodcast.appendChild(todayCard)

})

}

getForecast('London', 14);