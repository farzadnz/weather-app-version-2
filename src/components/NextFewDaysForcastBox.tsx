//import {styled} from "styled-components";
import { Fragment } from "react";
import { styled } from "@mui/system";
import InfoBox from "./ui/InfoBox";
import SingleDayUpdate from "./SingleDayUpdate";
import HorizontalDivider from "./ui/dividers/HorizontalDivider";
import { useMockData } from "../contexts/MockDataProvider";
import WeatherIcon from "./WeatherIcon";
import {
  SettingsContextTypes,
  useSettingConfigs
} from "../contexts/SettingsProvider";
import { celsiusToFahrenheit } from "../utils/celsiusToFahrenheit";

const NextFewDaysForcastContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  color: white;
`;

interface DailyUpdateProp {
  weatherIcon: string;
  weatherInfo: string;
  lowest: string;
  highest: string;
}

function NextFewDaysForcastBox() {
  const { mockData } = useMockData() || {
    setSelectedDataFile: () => {}
  };

  const { tempUnit } = useSettingConfigs() as SettingsContextTypes;

  return (
    <InfoBox width={"30%"} height={"810px"}>
      <NextFewDaysForcastContainer>
        {Object.entries<DailyUpdateProp>(mockData?.dailyUpdates || {}).map(
          ([key, { weatherIcon, weatherInfo, lowest, highest }]) => (
            <Fragment key={key}>
              <SingleDayUpdate
                day={key}
                icon={<WeatherIcon iconString={weatherIcon} size={60} />}
                forecast={weatherInfo}
                lowest={
                  tempUnit === "celsius" ? lowest : celsiusToFahrenheit(lowest)
                }
                highest={
                  tempUnit === "celsius"
                    ? highest
                    : celsiusToFahrenheit(highest)
                }
              />
              {key !== "Sun" && <HorizontalDivider />}
            </Fragment>
          )
        )}
      </NextFewDaysForcastContainer>
    </InfoBox>
  );
}

export default NextFewDaysForcastBox;
