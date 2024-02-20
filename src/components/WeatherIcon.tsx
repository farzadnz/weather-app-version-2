import React from "react";
import { useWeatherIcons } from "../contexts/WeatherIconProvider";

interface WeatherIconProps {
  iconString: string;
  size: number;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ iconString, size }) => {
  const weatherIcons = useWeatherIcons();
  const WeatherIconComponent = weatherIcons[iconString];
  return <WeatherIconComponent size={size} />;
};

export default WeatherIcon;
