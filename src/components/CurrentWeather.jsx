import React from "react";

const CurrentWeather = ({ data }) => {
  return (
    <div className="rounded-3xl px-5 pb-5 w-80 bg-gray-100 my-5 shadow-lg md:ml-20 md:mr-auto mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xl tracking-wide font-semibold leading-none">{ data.city }</p>
          <p className="text-sm leading-none">{ data.weather[0].description }</p>
        </div>
        <img
          alt="weather"
          className="w-24"
          src={ `icons/${data.weather[0].icon}.png` }
        />
      </div>
      <div className="flex items-center justify-between">
        <p className="text-5xl font-semibold text-slate-900 tracking-tighter">
          { Math.round(data.main.temp) }°C
        </p>
        <div className="pl-5 w-full">
          <div className="flex justify-between">
            <span className="font-medium">Details</span>
          </div>
          <div className="flex justify-between leading-none">
            <span className="text-sm">Feels like</span>
            <span className="font-semibold text-right">
              { Math.round(data.main.feels_like) }°C
            </span>
          </div>
          <div className="flex justify-between leading-none">
            <span className="text-sm">Wind</span>
            <span className="font-semibold text-right">{ data.wind.speed } m/s</span>
          </div>
          <div className="flex justify-between leading-none ">
            <span className="text-sm">Humidity</span>
            <span className="font-semibold text-right">{ data.main.humidity }%</span>
          </div>
          <div className="flex justify-between leading-none">
            <span className="text-sm">Pressure</span>
            <span className="font-semibold text-right">{ data.main.pressure } hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;