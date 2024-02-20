import { ReactNode } from "react";
import { Typography } from "@mui/material";
import styled from "styled-components";

const SingleDayContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const DayOfTheWeek = styled(Typography)`
  width: 10%;
`;

interface SingleDayUpdateProps {
  day: string;
  icon: ReactNode;
  forecast: string;
  lowest: string;
  highest: string;
}

const SingleDayUpdate: React.FC<SingleDayUpdateProps> = ({
  day,
  icon,
  forecast,
  lowest,
  highest
}) => {
  return (
    <SingleDayContainer>
      <DayOfTheWeek fontSize={24}>{day}</DayOfTheWeek>
      {icon}
      <Typography fontSize={24}>{forecast}</Typography>
      <Typography fontSize={24}>
        {lowest}&deg; | {highest}&deg;
      </Typography>
    </SingleDayContainer>
  );
};

export default SingleDayUpdate;
