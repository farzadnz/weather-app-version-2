import InfoBox from "./ui/InfoBox";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { useMockData } from "../contexts/MockDataProvider";
import WeatherIcon from "./WeatherIcon";
import {
  SettingsContextTypes,
  useSettingConfigs
} from "../contexts/SettingsProvider";
import { celsiusToFahrenheit } from "../utils/celsiusToFahrenheit";

const StyledDiv = styled.div`
  text-align: center;
  color: white;
`;

const WeatherSection = styled.div`
  margin-top: 50px;
`;

const TemperatureSection = styled.div``;

const TempSpan = styled.span`
  margin-left: 22.22px;
`;

function CurrentWeatherBox() {
  const { mockData } = useMockData() || {
    setSelectedDataFile: () => {}
  };

  const { tempUnit } = useSettingConfigs() as SettingsContextTypes;

  const location = mockData?.currentWeather.location;
  const weatherInfo = mockData?.currentWeather.weatherInfo;
  const temp = mockData?.currentWeather.temp;
  const mockDataWeatherIcon = mockData?.currentWeather.weatherIcon;

  return (
    <InfoBox width={"100%"} height={"600px"}>
      <StyledDiv>
        <Typography variant="h1">{location}</Typography>
        <WeatherSection>
          <Typography fontSize={32}>{weatherInfo}</Typography>
          {mockDataWeatherIcon && (
            <WeatherIcon iconString={mockDataWeatherIcon} size={200} />
          )}
        </WeatherSection>
        <TemperatureSection>
          <Typography fontSize={64}>
            <TempSpan>
              {tempUnit === "celsius" ? temp : celsiusToFahrenheit(temp)}
            </TempSpan>
            &deg;
          </Typography>
          <Typography fontSize={32}>
            {tempUnit === "celsius" ? "Celsius" : "Fahrenheit"}
          </Typography>
        </TemperatureSection>
      </StyledDiv>
    </InfoBox>
    //
  );
}

export default CurrentWeatherBox;
