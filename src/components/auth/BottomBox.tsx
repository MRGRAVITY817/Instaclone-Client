import { Link } from "react-router-dom";
import styled from "styled-components";
import { BaseBox } from "../shared/BaseBox";
const NewBottomBox = styled(BaseBox)`
  padding: 20px 0px;
  text-align: center;
  a {
    font-weight: 600;
    color: ${(props) => props.theme.accent};
  }
`;

interface BottomBoxProps {
  cta: string;
  link: string;
  linkText: string;
}

export const BottomBox: React.FC<BottomBoxProps> = ({ cta, link, linkText }) => {
  return (
    <NewBottomBox>
      <span>{cta}</span>
      <Link to={link}>{linkText}</Link>
    </NewBottomBox>
  );
};
