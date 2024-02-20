import { ReactNode } from "react";
import { Typography } from "@mui/material";
import styled from "styled-components";

const SingleHourContainer = styled.div`
  text-align: center;
  color: white;
`;

const Temperature = styled(Typography)`
  padding-left: 5px;
`;

interface SingleHourUpdateProps {
  time: string;
  icon: ReactNode;
  temperature: string;
}

const SingleHourUpdate: React.FC<SingleHourUpdateProps> = ({
  time,
  icon,
  temperature
}) => {
  return (
    <SingleHourContainer>
      <Typography fontSize={24}>{time}</Typography>
      {icon}
      <Temperature fontSize={32}>{temperature}&deg;</Temperature>
    </SingleHourContainer>
  );
};

export default SingleHourUpdate;
