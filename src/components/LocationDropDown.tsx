import DropDown from "./ui/DropDown";
import { MenuItem } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import {
  MockDataContextTypes,
  useMockData
} from "../contexts/MockDataProvider";
import styled from "styled-components";

const IconContainer = styled("span")`
  margin-top: 5px;
  width: 30px;
  height: 24 px;
`;

interface LocationDropDownProps {
  anchorElement: HTMLElement | null;
  isDropDownOpen: boolean;
  closeDropDown: () => void;
}

const LocationDropDown: React.FC<LocationDropDownProps> = ({
  anchorElement,
  isDropDownOpen,
  closeDropDown
}) => {
  const { selectedDataFile, setSelectedDataFile } =
    useMockData() as MockDataContextTypes;

  const handleMenuItemClick = (fileName: string) => {
    setSelectedDataFile(fileName);
    closeDropDown();
  };

  return (
    <DropDown
      anchor={anchorElement}
      isOpen={isDropDownOpen}
      closeAction={closeDropDown}
    >
      <MenuItem onClick={() => handleMenuItemClick("auckland.json")}>
        <IconContainer>
          {selectedDataFile === "auckland.json" && <DoneIcon />}
        </IconContainer>
        Auckland, New Zealand{" "}
      </MenuItem>
      <MenuItem onClick={() => handleMenuItemClick("sydney.json")}>
        <IconContainer>
          {selectedDataFile === "sydney.json" && <DoneIcon />}
        </IconContainer>
        Sydney, Australia
      </MenuItem>
      <MenuItem onClick={() => handleMenuItemClick("tokyo.json")}>
        <IconContainer>
          {selectedDataFile === "tokyo.json" && <DoneIcon />}
        </IconContainer>
        Tokyo, Japan
      </MenuItem>
      <MenuItem onClick={() => handleMenuItemClick("newyork.json")}>
        <IconContainer>
          {/* {selectedDataFile === "newyork.json" && <DoneIcon />} */}
        </IconContainer>
        New York, USA
      </MenuItem>
    </DropDown>
  );
};

export default LocationDropDown;
