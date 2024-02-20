import React, { useState } from "react";
import RoundButtonWithIcon from "./ui/RoundButtonWithIcon";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsDropDown from "./SettingsDropDown";

const SettingsButton = () => {
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
        icon={<SettingsIcon />}
        onClick={HandleSettingsClick}
      ></RoundButtonWithIcon>
      <SettingsDropDown
        anchorElement={anchorElement}
        isDropDownOpen={Boolean(anchorElement)}
        closeDropDown={handleClose}
      ></SettingsDropDown>
    </>
  );
};

export default SettingsButton;
