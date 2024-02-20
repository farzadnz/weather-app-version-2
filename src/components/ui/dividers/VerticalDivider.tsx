import Divider from "@mui/material/Divider";
import { styled } from "@mui/system";

interface VerticalDividerProps {
  height?: string;
}

const StyledVerticalDivider = styled(Divider)<VerticalDividerProps>`
  background-color: white;
  height: ${(props) => props.height || "70%"};
`;

const VerticalDivider: React.FC<VerticalDividerProps> = ({ height }) => {
  return <StyledVerticalDivider orientation="vertical" height={height} />;
};

export default VerticalDivider;
