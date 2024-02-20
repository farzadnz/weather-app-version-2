import Divider from "@mui/material/Divider";
import { styled } from "@mui/system";

interface HorizontalDividerProps {
  width?: string;
}

const StyledHorizontalDivider = styled(Divider)<HorizontalDividerProps>`
  background-color: white;
  width: ${(props) => props.width || "90%"};
  align-self: center;
`;

const HorizontalDivider: React.FC<HorizontalDividerProps> = ({ width }) => {
  return <StyledHorizontalDivider width={width} />;
};

export default HorizontalDivider;
