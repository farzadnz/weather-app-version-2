import React, { ReactNode } from "react";
import { Menu } from "@mui/material";
import { styled } from "@mui/system";

interface DropDownProps {
  isOpen: boolean;
  closeAction: () => void;
  anchor: HTMLElement | null;
  children: ReactNode;
}

const CustomMenu = styled(Menu)``;

const DropDown: React.FC<DropDownProps> = ({
  closeAction,
  isOpen,
  children,
  anchor
}) => {
  return (
    <div>
      <CustomMenu
        anchorEl={anchor}
        open={isOpen}
        onClose={closeAction}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        {children}
      </CustomMenu>
    </div>
  );
};

export default DropDown;
