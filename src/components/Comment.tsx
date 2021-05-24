import styled from "styled-components";
import { FatText } from "./shared/FatText";

const StyledComment = styled.div`
  margin: 6px 0px;
`;

const CommentCaption = styled.span`
  margin-left: 4px;
`;

interface CommentProps {
  author: string;
  payload: string;
}

export const Comment: React.FC<CommentProps> = ({ author, payload }) => {
  return (
    <StyledComment>
      <FatText>{author}</FatText>
      <CommentCaption
        dangerouslySetInnerHTML={{
          __html: payload.replace(/#[\w]+/g, "<mark>$&</mark>"),
        }}
      />
    </StyledComment>
  );
};
