import styled from "styled-components";

interface AvatarProps {
  url?: string;
  lg?: boolean;
}

const StyledAvatar = styled.div<AvatarProps>`
  width: ${(props) => (props.lg ? "30px" : "25px")};
  height: ${(props) => (props.lg ? "30px" : "25px")};
  border-radius: 15px;
  background-color: #2c2c2c;
  overflow: hidden;
`;

const Img = styled.img`
  max-width: 100%;
`;

export const Avatar: React.FC<AvatarProps> = ({ url = "", lg = false }) => {
  return (
    <StyledAvatar lg={lg}>{url !== "" ? <Img src={url} /> : null}</StyledAvatar>
  );
};
