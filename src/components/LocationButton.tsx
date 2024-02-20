import React, { useState } from "react";
import RoundButtonWithIcon from "./ui/RoundButtonWithIcon";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationDropDown from "./LocationDropDown";

const LocationButton = () => {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);

  const handleClose = () => {
    setAnchorElement(null);
  };

  const HandleSettingsClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setAnchorElement(event.currentTarget);
  };

  return (
    <>
      <RoundButtonWithIcon
        icon={<LocationOnIcon />}
        onClick={HandleSettingsClick}
      ></RoundButtonWithIcon>
      <LocationDropDown
        anchorElement={anchorElement}
        isDropDownOpen={Boolean(anchorElement)}
        closeDropDown={handleClose}
      ></LocationDropDown>
    </>
  );
};

export default LocationButton;
