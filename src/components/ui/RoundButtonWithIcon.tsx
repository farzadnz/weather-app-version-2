import React, { ReactNode } from "react";
import styled from "styled-components";

interface RoundButtonWithIconProps {
  icon: ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = styled.button`
  background-color: #566582;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: none;
  &: hover {
    background-color: #44526e;
    cursor: pointer;
  }
`;

const StyledIcon = styled.span`
  color: white;
  background-color: #566582;
  ${Button}:hover & {
    background-color: #44526e;
  }
`;

const RoundButtonWithIcon: React.FC<RoundButtonWithIconProps> = ({
  icon,
  onClick
}) => {
  return (
    <Button onClick={onClick}>
      <StyledIcon>{icon}</StyledIcon>
    </Button>
  );
};

export default RoundButtonWithIcon;
