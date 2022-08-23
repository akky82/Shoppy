import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
  
  return (
    <div className="rounded-3xl bg-gray-200 max-w-2xl shadow-xl pt-3.5">
      <label className="text-lg text-slate-900 pl-5">Daily</label>
      <Accordion
        allowZeroExpanded
        className="rounded-3xl grid grid-cols-1 gap-3 p-5"
      >
        { data.daily.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="max-w-xl h-10 rounded-3xl mx-auto items-center flex cursor-pointer text-sm py-1.5 px-5 bg-gray-300">
                  <img src={ `icons/${item.weather[0].icon}.png` } alt="weather" className="w-12"/>
                  <label className="day flex-1 ml-1 cursor-pointer">{forecastDays[idx]}</label>
                  <label className="description flex-1 mr-1 text-right cursor-pointer">{item.weather[0].description}</label>
                  <label className="min-max text-zinc-500">{Math.round(item.temp.min)}°C /{Math.round(item.temp.max)}°C</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="grid max-w-xl mx-auto px-3.5 py-1 gap-x-12 gap-y-0 grid-cols-2">
                <div className="items-center px-5 flex justify-between h-7">
                  <label>Pressure:</label>
                  <label className="text-right">{item.pressure} hPa</label>
                </div>
                <div className="items-center px-5 flex justify-between h-7">
                  <label>Humidity:</label>
                  <label className="text-right">{item.humidity} %</label>
                </div>
                <div className="items-center px-5 flex justify-between h-7">
                  <label>Clouds:</label>
                  <label className="text-right">{item.clouds} %</label>
                </div>
                <div className="items-center px-5 flex justify-between h-7">
                  <label>Wind speed:</label>
                  <label className="text-right">{item.wind_speed} m/s</label>
                </div>
                <div className="items-center px-5 flex justify-between h-7">
                  <label>UV Index:</label>
                  <label className="text-right">{item.uvi}</label>
                </div>
                <div className="items-center px-5 flex justify-between h-7">
                  <label>Rain chance:</label>
                  <label className="text-right">{Math.round(item.pop * 100)} %</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Forecast;