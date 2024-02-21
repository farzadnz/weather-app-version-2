import React from "react";

import styled from "styled-components";
import CurrentWeatherBox from "./components/CurrentWeatherBox";
import CurrentWeatherMoreInfoBox from "./components/CurrentWeatherMoreInfoBox";
import HourlyUpdatesBox from "./components/HourlyUpdatesBox";
import NextFewDaysForcastBox from "./components/NextFewDaysForcastBox";
import TopBar from "./components/TopBar";
import { createTheme, ThemeProvider } from "@mui/material";
import { WeatherIconProvider } from "./contexts/WeatherIconProvider";
import { MockDataProvider } from "./contexts/MockDataProvider";
import { SettingsProvider } from "./contexts/SettingsProvider";

const GridSection = styled.div`
  display: grid;
  gap: 10px;
  width: 80%;
`;

const FlexSection = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const MainPageContainer = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const theme = createTheme({
  typography: {
    fontFamily: "Impact",
  },
});

const MainPage: React.FC = () => {
  return (
    <MainPageContainer>
      <ThemeProvider theme={theme}>
        <MockDataProvider>
          <SettingsProvider>
            <TopBar></TopBar>
            <WeatherIconProvider>
              <FlexSection>
                <GridSection>
                  <CurrentWeatherBox></CurrentWeatherBox>
                  <HourlyUpdatesBox></HourlyUpdatesBox>
                </GridSection>
                <NextFewDaysForcastBox></NextFewDaysForcastBox>
              </FlexSection>
              <CurrentWeatherMoreInfoBox></CurrentWeatherMoreInfoBox>
            </WeatherIconProvider>
          </SettingsProvider>
        </MockDataProvider>
      </ThemeProvider>
    </MainPageContainer>
  );
};

export default MainPage;
