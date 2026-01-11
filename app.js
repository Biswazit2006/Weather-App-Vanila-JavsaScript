const weatherApiKey = '83b48667693f40088ad191656260901';

//  Current Weather Data Fetching

async function getCurrentWeather(location) {
  const apiKey = weatherApiKey;
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`
  );
  const data = await response.json();
  temp.innerHTML = data.current.temp_c + "&deg;C";
  feelsLike.innerHTML = ` ${data.current.feelslike_c}&deg;C`;
  windSpeeed.innerHTML = `${data.current.wind_kph} kph`;
  humidity.innerHTML = `${data.current.humidity}%`;
  humidity2.innerHTML = `${data.current.humidity}%`;
  icon.src = data.current.condition.icon;
  input.placeholder = data.location.name;

//   Dates
const localTime = new Date(data.location.localtime);
 date.innerHTML = `${localTime.getDate().toString().padStart(2, '0')} ${localTime.toLocaleString('en-US', { month: 'long' })} ${localTime.getFullYear()}`;
  dayAndTime.innerHTML = `${localTime.toLocaleString('en-US', { weekday: 'long' })} <span class="main-left-time">${localTime.getHours()}:${localTime.getMinutes().toString().padStart(2, '0')}</span>`;
  
  // console.log(`Temperature: ${data.current.temp_c}°C`);
  // console.log(`Condition: ${data.current.condition.text}`);
  // console.log(`Wind: ${data.current.wind_kph} kph`);
  console.log(`Humidity: ${data.current.humidity}%`);
}

getCurrentWeather('London');



// const d = new Date("2026-01-10T18:30:00Z");

// const customDate = [
//   d.getDate().toString().padStart(2, '0'),
//   d.toLocaleString('en-US', { month: 'short' }),
//   d.getFullYear().toString().slice(-2)
// ].join('/');

// const customTime = `${d.getHours()}:${d.getMinutes().toString().padStart(2, '0')}`;

// console.log(`${customDate} ${customTime}`); // "10/Jan/26 18:30"

// console.log(d.getDate().toString().padStart(2, '0'))
// console.log(d.toLocaleString('en-US', { month: 'short' }))
// console.log(d.getFullYear().toString().slice(-2))