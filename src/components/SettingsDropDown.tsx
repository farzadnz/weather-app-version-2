import DropDown from "./ui/DropDown";
import { MenuItem, Divider } from "@mui/material";
import styled from "styled-components";
import DoneIcon from "@mui/icons-material/Done";
import {
  SettingsContextTypes,
  useSettingConfigs
} from "../contexts/SettingsProvider";

const IconContainer = styled("span")`
  margin-top: 5px;
  width: 30px;
  height: 24 px;
`;

interface SettingsDropDownProps {
  anchorElement: HTMLElement | null;
  isDropDownOpen: boolean;
  closeDropDown: () => void;
}

const SettingsDropDown: React.FC<SettingsDropDownProps> = ({
  anchorElement,
  isDropDownOpen,
  closeDropDown
}) => {
  const { distanceUnit, tempUnit, setDistanceUnit, setTempUnit } =
    useSettingConfigs() as SettingsContextTypes;

  const handleTempUnitChange = (newTempUnit: string) => {
    setTempUnit(newTempUnit);
    if (newTempUnit !== "fahrenheit") {
      closeDropDown();
    }
  };

  const handleDistanceUnitChange = (newDistUnit: string) => {
    setDistanceUnit(newDistUnit);
    closeDropDown();
  };

  return (
    <DropDown
      anchor={anchorElement}
      isOpen={isDropDownOpen}
      closeAction={closeDropDown}
    >
      <MenuItem onClick={() => handleDistanceUnitChange("kilometres")}>
        <IconContainer>
          {distanceUnit === "kilometres" && <DoneIcon />}
        </IconContainer>
        Kilometres
      </MenuItem>
      <MenuItem onClick={() => handleDistanceUnitChange("miles")}>
        <IconContainer>
          {distanceUnit === "miles" && <DoneIcon />}
        </IconContainer>
        Miles
      </MenuItem>
      <Divider></Divider>
      <MenuItem onClick={() => handleTempUnitChange("celsius")}>
        <IconContainer>{tempUnit === "celsius" && <DoneIcon />}</IconContainer>
        &deg;Celsius
      </MenuItem>
      <MenuItem onClick={() => handleTempUnitChange("fahrenheit")}>
        <IconContainer>
          {tempUnit === "fahrenheit" && <DoneIcon />}
        </IconContainer>
        &deg;Fahrenheit
      </MenuItem>
    </DropDown>
  );
};

export default SettingsDropDown;
