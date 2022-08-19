import React, { useState } from 'react';
import Search from '../components/Search';
import CurrentWeather from '../components/CurrentWeather';
import Forecast from '../components/Forecast';  
import { WEATHER_API_URL, WEATHER_API_KEY } from '../api/api';

import { Header } from '../components';

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  };

  return (
    <div className="rounded-3xl bg-white m-2 p-2 mt-24 md:m-10 md:p-10 dark:bg-gray-300">
      <Header
        category="App"
        title="Weather"
      />
      <Search onSearchChange={ handleOnSearchChange } />
      {currentWeather && <CurrentWeather data={ currentWeather } />}
      {forecast && <Forecast data={ forecast } />}
    </div>
  );
};

export default Weather;