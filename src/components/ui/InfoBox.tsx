import React, { ReactNode } from "react";
import { Box } from "@mui/material";

interface InfoBoxProps {
  width: string;
  height: string;
  children: ReactNode;
}

const InfoBox: React.FC<InfoBoxProps> = ({ width, height, children }) => {
  return (
    <Box
      sx={{
        width: { width },
        height: { height },
        backgroundColor: "#566582",
        borderRadius: 5
      }}
    >
      {children}
    </Box>
  );
};

export default InfoBox;
