import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FatText } from "./shared/FatText";

const StyledComment = styled.div`
  margin: 6px 0px;
`;

const CommentCaption = styled.span`
  margin-left: 4px;
  mark {
    background-color: inherit;
    color: ${(props) => props.theme.accent};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

interface CommentProps {
  author: string;
  payload: string;
}

export const Comment: React.FC<CommentProps> = ({ author, payload }) => {
  return (
    <StyledComment>
      <FatText>{author}</FatText>
      <CommentCaption>
        {payload.split(" ").map((word, index) =>
          /#[\w]+/.test(word) ? (
            <React.Fragment key={index}>
              <Link to={`/hashtags/${word}`}>{word}</Link>{" "}
            </React.Fragment>
          ) : (
            <React.Fragment key={index}>{word} </React.Fragment>
          )
        )}
      </CommentCaption>
    </StyledComment>
  );
};
