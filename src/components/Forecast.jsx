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
      <label className="title text-lg text-slate-900 pl-5">Daily</label>
      <Accordion
        allowZeroExpanded
        className="rounded-3xl grid grid-rows-2 grid-flow-col md:grid-flow-row gap-3 p-5"
      >
        { data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item max-w-xl h-10 rounded-3xl mx-auto items-center flex cursor-pointer text-sm py-1.5 px-5 bg-gray-300">
                  <img src={ `icons/${item.weather[0].icon}.png` } alt="weather" className="w-12"/>
                  <label className="day flex-1 ml-1 cursor-pointer">{forecastDays[idx]}</label>
                  <label className="description flex-1 mr-1 text-right  cursor-pointer">{item.weather[0].description}</label>
                  <label className="min-max text-zinc-500">{Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid grid max-w-xl mx-auto px-3.5 py-1 gap-x-12 gap-y-0 grid-cols-2">
                <div className="daily-details-grid-item items-center px-5 flex justify-between h-7">
                  <label>Pressure:</label>
                  <label className="text-right">{item.main.pressure}</label>
                </div>
                <div className="daily-details-grid-item items-center px-5 flex justify-between h-7">
                  <label>Humidity:</label>
                  <label className="text-right">{item.main.humidity}</label>
                </div>
                <div className="daily-details-grid-item items-center px-5 flex justify-between h-7">
                  <label>Clouds:</label>
                  <label className="text-right">{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item items-center px-5 flex justify-between h-7">
                  <label>Wind speed:</label>
                  <label className="text-right">{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item items-center px-5 flex justify-between h-7">
                  <label>Sea level:</label>
                  <label className="text-right">{item.main.sea_level}m</label>
                </div>
                <div className="daily-details-grid-item items-center px-5 flex justify-between h-7">
                  <label>Feels like:</label>
                  <label className="text-right">{item.main.feels_like}°C</label>
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