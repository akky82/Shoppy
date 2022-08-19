import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };
  
  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };
  
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  return (
    <StateContext.Provider 
      value={{
        activeMenu, setActiveMenu,
        isClicked, setIsClicked,
        screenSize, setScreenSize,
        currentColor, setCurrentColor,
        currentMode, setCurrentMode,
        themeSettings, setThemeSettings,
        handleClick,
        setMode,
        setColor,
        initialState,
      }}
    >
      { children }
    </StateContext.Provider>
  )
};

export const useStateContext = () => useContext(StateContext);