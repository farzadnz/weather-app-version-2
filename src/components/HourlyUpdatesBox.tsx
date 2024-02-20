import { Fragment } from "react";
import InfoBox from "./ui/InfoBox";
import SingleHourUpdate from "./SingleHourUpdate";
import styled from "styled-components";
//import { WiSnow } from "weather-icons-react";
import VerticalDivider from "./ui/dividers/VerticalDivider";
import { useMockData } from "../contexts/MockDataProvider";
import WeatherIcon from "./WeatherIcon";
import {
  SettingsContextTypes,
  useSettingConfigs
} from "../contexts/SettingsProvider";
import { celsiusToFahrenheit } from "../utils/celsiusToFahrenheit";

const FlexSection = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
  color: white;
`;

interface HourlyUpdateProp {
  time: string;
  weatherIcon: string;
  temp: string;
}

function HourlyUpdatesBox() {
  const { mockData } = useMockData() || {
    setSelectedDataFile: () => {}
  };

  const { tempUnit } = useSettingConfigs() as SettingsContextTypes;

  return (
    <InfoBox width={"100%"} height={"200px"}>
      <FlexSection>
        {Object.entries<HourlyUpdateProp>(mockData?.hourlyUpdates || {}).map(
          ([key, { time, weatherIcon, temp }]) => (
            <Fragment key={key}>
              <SingleHourUpdate
                time={time}
                icon={<WeatherIcon iconString={weatherIcon} size={100} />}
                temperature={
                  tempUnit === "celsius" ? temp : celsiusToFahrenheit(temp)
                }
              />
              {key !== "ninePM" && <VerticalDivider />}
            </Fragment>
          )
        )}
      </FlexSection>
    </InfoBox>

    //
  );
}

export default HourlyUpdatesBox;
