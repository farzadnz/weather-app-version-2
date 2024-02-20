import InfoBox from "./ui/InfoBox";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { useMockData } from "../contexts/MockDataProvider";
import {
  SettingsContextTypes,
  useSettingConfigs
} from "../contexts/SettingsProvider";
import { celsiusToFahrenheit } from "../utils/celsiusToFahrenheit";
import { kilometresToMiles } from "../utils/kilometresToMiles";

const LowAndHighContainer = styled.div`
  display: grid;
  grid-gap: 50px;
`;

const WindAndHumidityContainer = styled.div`
  display: grid;
  grid-gap: 50px;
`;

const TestMainContainer = styled.div`
  display: grid;
  grid-gap: 50px;
`;

const LowTempContainer = styled.div``;

const HighTempContainer = styled.div``;

const WindSpeedContainer = styled.div``;

const HumidityContainer = styled.div``;

const TestChildContainer1 = styled.div``;

const TestChildContainer2 = styled.div``;

const MainContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  color: white;
  justify-content: space-between;
  margin: 0 5%;
`;

function CurrentWeatherMoreInfoBox() {
  const { mockData } = useMockData() || {
    setSelectedDataFile: () => {}
  };

  const { tempUnit, distanceUnit } =
    useSettingConfigs() as SettingsContextTypes;

  const lowest = mockData?.currentWeatherMoreInfo.lowest;
  const highest = mockData?.currentWeatherMoreInfo.highest;
  const wind = mockData?.currentWeatherMoreInfo.wind;
  const humidity = mockData?.currentWeatherMoreInfo.humidity;
  const uvIndex = mockData?.currentWeatherMoreInfo.uvIndex;
  const visibility = mockData?.currentWeatherMoreInfo.visibility;

  return (
    <InfoBox width={"100%"} height={"300px"}>
      <MainContainer>
        <LowAndHighContainer>
          <LowTempContainer>
            <Typography variant="h5">Lowest</Typography>
            <Typography variant="h3">
              {tempUnit === "celsius" ? lowest : celsiusToFahrenheit(lowest)}
              &deg;
            </Typography>
          </LowTempContainer>

          <HighTempContainer>
            <Typography variant="h5">Highest</Typography>
            <Typography variant="h3">
              {tempUnit === "celsius" ? highest : celsiusToFahrenheit(highest)}
              &deg;
            </Typography>
          </HighTempContainer>
        </LowAndHighContainer>

        <WindAndHumidityContainer>
          <WindSpeedContainer>
            <Typography variant="h5">Wind</Typography>
            <Typography variant="h3">
              {distanceUnit === "kilometres" ? wind : kilometresToMiles(wind)}{" "}
              {distanceUnit === "kilometres" ? "Km/h" : "Kph"}
            </Typography>
          </WindSpeedContainer>

          <HumidityContainer>
            <Typography variant="h5">Humidity</Typography>
            <Typography variant="h3">{humidity}</Typography>
          </HumidityContainer>
        </WindAndHumidityContainer>

        <TestMainContainer>
          <TestChildContainer1>
            <Typography variant="h5">UV Index</Typography>
            <Typography variant="h3">{uvIndex}</Typography>
          </TestChildContainer1>

          <TestChildContainer2>
            <Typography variant="h5">Visibility</Typography>
            <Typography variant="h3">
              {distanceUnit === "kilometres"
                ? visibility
                : kilometresToMiles(visibility)}{" "}
              {distanceUnit === "kilometres" ? "Km" : "Cm"}
            </Typography>
          </TestChildContainer2>
        </TestMainContainer>
      </MainContainer>
    </InfoBox>
    //
  );
}

export default CurrentWeatherMoreInfoBox;
