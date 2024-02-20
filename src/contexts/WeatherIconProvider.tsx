import React, { ReactNode, createContext, useContext } from "react";
import * as WeatherIcons from "weather-icons-react";

interface WeatherIconProviderType {
  children: ReactNode;
}

const WeatherIconContext = createContext<typeof WeatherIcons | null>(null);

export const useWeatherIcons = () => {
  const packageContent = useContext(WeatherIconContext);

  if (!packageContent) {
    throw new Error("useWeatherIcons must be used within a MainPage");
  }

  return packageContent;
};

export const WeatherIconProvider: React.FC<WeatherIconProviderType> = ({
  children
}) => {
  return (
    <WeatherIconContext.Provider value={WeatherIcons}>
      {children}
    </WeatherIconContext.Provider>
  );
};
