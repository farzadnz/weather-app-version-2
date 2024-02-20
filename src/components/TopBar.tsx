import React from "react";
import styled from "styled-components";
import SettingsButton from "./SettingsButton";
import LocationButton from "./LocationButton";

const Wrapper = styled.div`
  display: flex;
  justify-content: right;
  column-gap: 10px;
`;

const TopBar: React.FC = () => {
  return (
    <Wrapper>
      <LocationButton></LocationButton>
      <SettingsButton></SettingsButton>
    </Wrapper>
  );
};

export default TopBar;
